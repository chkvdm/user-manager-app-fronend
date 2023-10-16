import React from 'react';
import { Navigate } from 'react-router-dom';

function Home() {
  if (!localStorage.getItem('mini-web-app')) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/account/users" />;
}

export default Home;
