import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Student from './Student';

function CourseStudents({ courseId, handleCloseStudents }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:9292/courses/${courseId}/students`);
        const data = await response.json();

        setStudents(data);
        setLoading(false);
      } catch (error) {
        setError('Error occurred while fetching students.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, [courseId]);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Table className="table table-bordered whiteboard">
        <thead>
          <tr className="fixed-table">
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
        {showDetails && (
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="10">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="10">Error: {error}</td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan="10">No students found for this course.</td>
              </tr>
            ) : (
              students.map((student) => (
                <Student
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  gender={student.gender}
                  id_number={student.id_number}
                  admission_number={student.admission_number}
                  classroom_id={student.classroom_id}
                  course_id={student.course_id}
                  age={student.age}
                  instructor_id={student.instructor_id}
                  status={student.status}
                />
              ))
            )}
          </tbody>
        )}
      </Table>
      <button className="btn btn-secondary" onClick={handleCloseStudents}>
        Close
      </button>
      <button className="btn btn-secondary" onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

export default CourseStudents;
