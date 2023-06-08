import React, { useState } from 'react';
import '../styles/course.css';
import CourseStudents from './CourseStudents';

function Course({ courseName, period, courseId }) {
  const [showStudents, setShowStudents] = useState(false);
  const [studentsButtonVisible, setStudentsButtonVisible] = useState(true);

  const handleViewStudents = () => {
    setShowStudents(true);
    setStudentsButtonVisible(false);
  };

  const handleCloseStudents = () => {
    setShowStudents(false);
    setStudentsButtonVisible(true);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card text-white card-has-bg" style={{ backgroundImage: "url(https://source.unsplash.com/600x900/?tech,street)" }}>
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <h2 className="card-title mt-0 mb-2">{courseName}</h2>
          </div>
          <div className="card-footer">
            <div className="media">
              <div className="media-body">
                <h6 className="my-0 text-white d-block">This course takes</h6>
                <small>{period} weeks</small>
              </div>
            </div>
            {studentsButtonVisible && (
              <button className="btn btn-primary mt-2" onClick={handleViewStudents}>
                View Students
              </button>
            )}
          </div>
        </div>
      </div>
      {showStudents && (
        <CourseStudents courseId={courseId} handleCloseStudents={handleCloseStudents} />
      )}
    </div>
  );
}

export default Course;
