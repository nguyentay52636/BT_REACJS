import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Form';
import DetailsForm from './DetailsForm';

export default function Management() {
  const urlApi = 'https://6531d9cd4d4c2e3f333d5463.mockapi.io/api/v1/Student';
  const [students, setStudent] = useState([]);
  const [selectedStudent, setSeletedStudent] = useState(null);
const [isUpdating, setIsUpdating] = useState(false)
  const fetchStudent = async () => {
    try {
      const respone = await axios.get(urlApi);
      setStudent(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, [students]);
  //them
  const handleAdd = async (student) => {
    try {
      const respone = await axios.post(urlApi, student);
      fetchStudent(respone);
      alert('thanhcong');
    } catch (error) {
      console.log(error);
    }
  };

  //xoa
  const hanhdledDelete = async (id) => {
    try {
      let respone = await axios.delete(`${urlApi}/${id}`);
      fetchStudent(respone);
      alert('xoa thanh cong ');
    } catch (error) {
      console.log(error);
    }
  };
  //lay du lieu
  const handleSelectStudent = async (id) => {
    try {
      const { data } = await axios.get(`${urlApi}/${id}`);
      setSeletedStudent(data);
      setIsUpdating(true)
    } catch (error) {
      console.log(error);
    }
  };

  //upadte
  const handleUpdateStudent = async (id, student) => {
    try {
      let respone = await axios.put(`${urlApi}/${id}`, student);
      fetchStudent(respone);
      setIsUpdating(false)
      setSeletedStudent(null);
      alert('cap nhap thanh cong');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form
      isUpdating={isUpdating}
        students={selectedStudent}
        onAdd={handleAdd}
        onUpdate={handleUpdateStudent}
      />
      <DetailsForm
        students={students}
        onDelete={hanhdledDelete}
        onEdit={handleSelectStudent}
      />
    </div>
  );
}
