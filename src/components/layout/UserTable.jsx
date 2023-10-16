import React from 'react';
import '../../css/usersTable.css';

const UserTable = ({
  records,
  selectedCheckboxes,
  selectMany,
  selectOne,
  selectAllChecked,
}) => {
  return (
    <div class="table-container my-3">
      <div class="row">
        <div class="col-lg-12 mx-auto bg-white rounded shadow">
          <div class="table-responsive">
            <table class="table table-fixed">
              <thead>
                <tr>
                  <th scope="col" class="col-1">
                    <input
                      type="checkbox"
                      onChange={selectMany}
                      checked={selectAllChecked}
                    />
                  </th>
                  <th scope="col" class="col-2">
                    name
                  </th>
                  <th scope="col" class="col-2">
                    email
                  </th>
                  <th scope="col" class="col-2">
                    last login
                  </th>
                  <th scope="col" class="col-3">
                    date of registration
                  </th>
                  <th scope="col" class="col-2">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((row, i) => (
                  <tr key={i}>
                    <th scope="row" class="col-1">
                      <input
                        type="checkbox"
                        onChange={() => selectOne(row.email)}
                        checked={selectedCheckboxes[row.email] || false}
                      />
                    </th>
                    <td class="col-2">{row.name}</td>
                    <td class="col-2">{row.email}</td>
                    <td class="col-2">{row.lastLogin}</td>
                    <td class="col-3">{row.registrationDate}</td>
                    <td class="col-2">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
