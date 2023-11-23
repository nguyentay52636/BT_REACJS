import React from 'react';

export default function DetailsForm({ students, onDelete, onEdit }) {
  return (
    <div>
      <div className="table-content">
        <table className="table table-border table-dark">
          <thead clasName="">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const { id, hoten, sodienthoai, email } = student;
              return (
                <tr key={id}>
                  <th>{id}</th>
                  <th>{hoten}</th>
                  <th>{sodienthoai}</th>
                  <th>{email}</th>
                  <th>
                    <button
                      className="btn btn-danger "
                      onClick={() => onEdit(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
