import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Users from './components/Users';
import ProtectedRoutes from './hooks/protectedroutes';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/account/users" element={<Users />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
