import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import UserTable from './layout/UserTable';
import ControlPanel from './layout/ControlPanel';
import NavPanel from './layout/NavPanel';
import config from '../config.js';

const Users = () => {
  const [records, setRecords] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('mini-web-app');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    Axios.get(`${config.apiBaseUrl}/api/users`, { headers })
      .then((response) => response.data)
      .then((data) => {
        setRecords(data.users);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const selectOne = (recordId) => {
    setSelectedCheckboxes((prevState) => ({
      ...prevState,
      [recordId]: !prevState[recordId],
    }));
  };

  const selectMany = () => {
    setSelectAllChecked(!selectAllChecked);
    const newSelection = {};
    records.forEach((record) => {
      newSelection[record.email] = !selectAllChecked;
    });
    setSelectedCheckboxes(newSelection);
  };

  return (
    <div className="account-container col-lg-12">
      <NavPanel />
      <div className="container col-lg-10">
        <div class="row pt-5">
          <h1 class="display-3">User data table manager</h1>
        </div>

        <ControlPanel
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
          setRecords={setRecords}
        />

        <UserTable
          records={records}
          selectedCheckboxes={selectedCheckboxes}
          selectMany={selectMany}
          selectOne={selectOne}
          selectAllChecked={selectAllChecked}
        />
      </div>
    </div>
  );
};

export default Users;
