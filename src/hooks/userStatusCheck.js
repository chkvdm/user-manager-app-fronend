import axios from 'axios';
import config from '../config.js';

const UserStatusCheck = () => {
  const token = localStorage.getItem('mini-web-app');
  axios
    .get(`${config.apiBaseUrl}/api/users/status`, {
      headers: { Authorization: `Bearer ${token}` },
      validateStatus: function (status) {
        return status < 500;
      },
    })
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem('mini-web-app');
        window.location = '/login';
      }
    })

    .catch(() => {
      console.error('Enter error');
    });
};

export default UserStatusCheck;
