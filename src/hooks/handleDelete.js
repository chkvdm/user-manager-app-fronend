import Axios from 'axios';
import { decodeToken } from 'react-jwt';
import logOut from '../hooks/logOut';
import config from '../config.js';

const handleDelete = (selectedCheckboxes, setRecords) => {
  const selectedUsers = Object.keys(selectedCheckboxes).filter(
    (email) => selectedCheckboxes[email]
  );
  const token = localStorage.getItem('mini-web-app');
  const currentUserEmail = decodeToken(token).email;
  selectedUsers.forEach((email) => {
    Axios.delete(`${config.apiBaseUrl}/api/users`, {
      headers: { Authorization: `Bearer ${token}` },
      validateStatus: function (status) {
        return status < 500;
      },
      data: {
        email: email,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          logOut();
        }
        setRecords((prevRecords) =>
          prevRecords.filter((record) => record.email !== email)
        );
        if (email === currentUserEmail) {
          logOut();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export default handleDelete;
