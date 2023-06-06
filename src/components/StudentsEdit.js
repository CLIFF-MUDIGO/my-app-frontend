import React from 'react';
import { Table } from 'react-bootstrap';
import useFetchData from '../hooks/fetchData';
import StudentEdit from './StudentEdit';

function StudentsEdit() {
  const [students, studentLoading, studentError] = useFetchData('http://localhost:9292/students');

  return (
    <div>
      {studentLoading ? (
        <div>Loading...</div>
      ) : studentError ? (
        <div>Error: {studentError.message}</div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <Table className="table table-bordered whiteboard">
            <thead className="fixed-table" >
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">gender</th>
                <th scope="col">id_number</th>
                <th scope="col">adm number</th>
                <th scope="col">classroom</th>
                <th scope="col">course_id</th>
                <th scope="col">age</th>
                <th scope="col">instructor</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((elem) => (
                <StudentEdit
                  key={elem.id}
                  id={elem.id}
                  name={elem.name}
                  gender={elem.gender}
                  id_number={elem.id_number}
                  admission_number={elem.admission_number}
                  classroom_id={elem.classroom_id}
                  course_id={elem.course_id}
                  age={elem.age}
                  instructor_id={elem.instructor_id}
                  status={elem.status}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default StudentsEdit;
