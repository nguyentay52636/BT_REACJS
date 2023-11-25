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
              const { masv, hoten, sodienthoai, email } = student;
              return (
                <tr key={masv}>
                  <th>{masv}</th>
                  <th>{hoten}</th>
                  <th>{sodienthoai}</th>
                  <th>{email}</th>
                  <th>
                    <button
                      className="btn btn-danger "
                      onClick={() => onEdit(masv)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => onDelete(masv)}
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
