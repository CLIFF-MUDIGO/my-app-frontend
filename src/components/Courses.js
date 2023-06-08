import React from 'react';
import useFetchData from '../hooks/fetchData';
import Course from './Course';

function Courses() {
  const [courses, courseError, courseLoading] = useFetchData('http://localhost:9292/courses');

  if (courseLoading) {
    return <div>Loading...</div>;
  }

  if (courseError) {
    return <div>Error occurred while fetching courses.</div>;
  }

  if (!Array.isArray(courses) || courses.length === 0) {
    return <div>No courses available.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {courses.map((elem) => (
          <Course courseName={elem.course_name} key={elem.id} period={elem.course_period} courseId={elem.id} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
