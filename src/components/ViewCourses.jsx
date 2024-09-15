import React, { useEffect, useState } from "react";
import getCourses from "../processes/getCourses";
import createCourse from "../processes/createCourse";

function ViewCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function render() {
      let data = await getCourses();
      console.log("Courses: ", data);
      setCourses(data);
    }
    render();
  }, []);

  return (
    <div>
      {courses && courses.length == 0 ? (
        <p>No courses to display</p>
      ) : (
        courses &&
        courses.map((course) => {
          return (
            <div key={course.id} onClick={() => createCourse(course)}>
              <h1>{course.name}</h1>
              <p>{course.description}</p>
              <p>{course.curriculum}</p>
              <p>Enrolled: {course.totalEnrollings}</p>
              <p>Created: {course.createdOn}</p>
              <p>Last Updated: {course.lastUpdated}</p>
            </div>
          );
        })
      )}
      {!courses && (
        <p>
          Error fetching courses. Check your network connection and try again
        </p>
      )}
    </div>
  );
}

export default ViewCourses;
