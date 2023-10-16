const logOut = () => {
  localStorage.removeItem('mini-web-app');
  window.location = '/login';
};

export default logOut;
