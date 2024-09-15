import { database } from "./firestore";
import { getDocs, collection } from "firebase/firestore";

async function getCourses() {
  console.log("Fetching Courses");
  let courseRef = collection(database, "courses");
  let coursesSnapshot = await getDocs(courseRef);
  let courses = [];
  coursesSnapshot.forEach((course) => {
    courses.push(course.data());
    courses[courses.length - 1].id = course.id;
  });
  console.log("Cources Fetched suucessfully");
  return courses;
}

export default getCourses;
