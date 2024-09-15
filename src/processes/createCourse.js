import { database } from "./firestore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

async function createCourse(course) {
  console.log(course);
  const getDate = () => {
    let today = new Date();
    return [today.getDate(), today.getMonth() + 1, today.getFullYear()];
  };

  if (course.hasOwnProperty("id")) {
    let today = getDate();
    let data = {
      id: course.id,
      name: course.name,
      description: course.description,
      curriculum: course.id,
      totalEnrollings: course.totalEnrollings,
      createdOn: course.createdOn,
      lastUpdated: today,
    };

    let courseRef = doc(database, "courses", data.id);
    delete data.id;

    try {
      console.log(`Updating course "${data.name}" with new values: `, data);
      await setDoc(courseRef, data);
      console.log(`Successfully updated Course: ${data.name}`);
    } catch (error) {
      console.log(`Failed to update course: ${data.name}`, error);
    }
  } else {
    let today = getDate();
    let data = {
      name: course.name,
      description: course.description,
      curriculum: "",
      totalEnrollings: 0,
      createdOn: today,
      lastUpdated: today,
    };
    let courseRef = collection(database, "courses");
    console.log("Creating a new course with: ", data);
    let result = await addDoc(courseRef, data);
    console.log("Created new course successfully: ", result);
  }
}

export default createCourse;
