import Axios from 'axios';
import { decodeToken } from 'react-jwt';
import logOut from '../hooks/logOut';
import config from '../config.js';

const handleStatusChange = (
  selectedCheckboxes,
  setSelectedCheckboxes,
  setRecords,
  status
) => {
  const selectedUsers = Object.keys(selectedCheckboxes).filter(
    (email) => selectedCheckboxes[email]
  );
  const token = localStorage.getItem('mini-web-app');
  const currentUserEmail = decodeToken(token).email;
  selectedUsers.forEach((email) => {
    Axios.put(
      `${config.apiBaseUrl}/api/users`,
      {
        email: email,
        status: status,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
        validateStatus: function (status) {
          return status < 500;
        },
      }
    )
      .then((response) => {
        if (response.status === 401) {
          logOut();
        }
        setRecords((prevRecords) =>
          prevRecords.map((record) => {
            if (record.email === email) {
              return {
                ...record,
                status: response.data.newStatus,
              };
            }
            if (email === currentUserEmail) {
              logOut();
            }
            return record;
          })
        );
        setSelectedCheckboxes({});
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export default handleStatusChange;
