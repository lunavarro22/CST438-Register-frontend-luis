import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddStudent({ SEMESTER_LIST, year, semester }) {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newStudent = { name, email, status };
    const semesterIndex = SEMESTER_LIST.findIndex(
      (semester) => semester.year === year && semester.name === semester
    );
    if (semesterIndex !== -1) {
      SEMESTER_LIST[semesterIndex].students.push(newStudent);
    }
    // Redirect back to the Semester page
    history.push("/");
  }

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
