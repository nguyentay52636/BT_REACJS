import { useState, useEffect } from 'react';
import './Style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Form({ students, onAdd, onUpdate }) {
  const valueEmpty = {
    masv: '',
    hoten: '',
    sodienthoai: '',
    email: '',
  };
  const [values, setValues] = useState(valueEmpty);
  const [error, setError] = useState(valueEmpty);

  //state luu tru id
  // const [nextId, setNextId] = useState(1);
  useEffect(() => {
    if (!students) {
      return;
    } else {
      setValues(students);
    }
  }, [students]);
  const handleSubmit = (e) => {
    let invalid = true;
    e.preventDefault();
    if (values.id) {
      onUpdate(values.id, values);
    } else {
      onAdd(values);
    }
    for (let key in values) {
      invalid &= validateField(key, values[key]);
    }
    if (!invalid) {
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };
  // ten input va gia tri put
  const validateField = (filedName, fieldValue) => {
    let invalid = true;
    const formError = {};
    let isvalid = fieldValue.trim() === '';
    switch (filedName) {
      case 'masv':
        if (isvalid) {
          formError.masv = 'Vui lòng không để trống!';
          invalid = false;
        } else {
          formError.masv = '';
        }
        break;
      case 'hoten':
        if (isvalid) {
          formError.hoten = 'Vui lòng không để trống!';
          invalid = false;
        } else {
          formError.hoten = '';
        }
        break;
      case 'sodienthoai':
        if (isvalid) {
          formError.sodienthoai = 'Vui lòng không để trống!';
          invalid = false;
        } else {
          formError.sodienthoai = '';
        }
        break;
      case 'email':
        // const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (isvalid) {
          formError.email = 'Vui lòng không để trống!';
          return false;
        } else {
          formError.email = '';
        }
        break;
      default:
        break;
    }
    setError((currentValues) => {
      return { ...currentValues, ...formError };
    });
    return invalid;
  };
  // handle add , edit , delete

  return (
    <div>
      <div className="header">
        <h1>Thông tin sinh viên</h1>
      </div>
      <div className="content-input">
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="maSv" className="form-label">
                  Mã SV
                </label>

                <input
                  className="form-control"
                  id="maSv"
                  name="masv"
                  value={values.masv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {error.masv && (
                  <span className="text-danger">{error.masv}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="sodienthoai" className="form-label">
                  Phone number
                </label>

                <input
                  className="form-control"
                  name="sodienthoai"
                  onChange={handleChange}
                  value={values.sodienthoai}
                  id="sodienthoai"
                  onBlur={handleBlur}
                />
                {error.sodienthoai && (
                  <span className="text-danger">{error.sodienthoai}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="hoten" className="form-label">
                  Họ tên
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={values.hoten}
                  name="hoten"
                  id="hoten"
                  onBlur={handleBlur}
                />
                {error.hoten && (
                  <span className="text-danger">{error.hoten}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={values.email}
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {error.email && (
                  <span className="text-danger">{error.email}</span>
                )}
              </div>
            </div>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            onClick={() => onAdd}
          >
            Them sinh vien
          </button>
        </form>
      </div>
      <hr />
      <br />
    </div>
  );
}
