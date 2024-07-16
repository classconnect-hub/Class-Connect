"use client";
import React, { useState } from "react";
import notes from "./data/qbData"; // Adjust the path as per your project structure
import "./qb.css";

const Notes = () => {
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterSemester, setFilterSemester] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");

  const handleFilterDepartmentChange = (e) => {
    setFilterDepartment(e.target.value);
  };

  const handleFilterSemesterChange = (e) => {
    setFilterSemester(e.target.value);
  };

  const handleFilterSubjectChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const filteredNotes = notes.filter((note) => {
    if (
      filterDepartment === "All" &&
      filterSemester === "All" &&
      filterSubject === "All"
    )
      return true;
    if (
      filterDepartment !== "All" &&
      filterSemester === "All" &&
      filterSubject === "All"
    )
      return note.department === filterDepartment;
    if (
      filterDepartment === "All" &&
      filterSemester !== "All" &&
      filterSubject === "All"
    )
      return note.semester === filterSemester;
    if (
      filterDepartment === "All" &&
      filterSemester === "All" &&
      filterSubject !== "All"
    )
      return note.subject === filterSubject;
    if (
      filterDepartment !== "All" &&
      filterSemester !== "All" &&
      filterSubject === "All"
    )
      return (
        note.department === filterDepartment && note.semester === filterSemester
      );
    if (
      filterDepartment !== "All" &&
      filterSemester === "All" &&
      filterSubject !== "All"
    )
      return (
        note.department === filterDepartment && note.subject === filterSubject
      );
    if (
      filterDepartment === "All" &&
      filterSemester !== "All" &&
      filterSubject !== "All"
    )
      return note.semester === filterSemester && note.subject === filterSubject;
    return (
      note.department === filterDepartment &&
      note.semester === filterSemester &&
      note.subject === filterSubject
    );
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="middleTitle">Question Bank</h1>
      </div>
      <div className="filter-list-container">
        <h3 style={{ paddingTop: "10px" }}>Year</h3>
        <select
          className="filter-select"
          value={filterDepartment}
          onChange={handleFilterDepartmentChange}
        >
          <option value="All">All</option>
          <option value="FY">FY</option>
          <option value="Comps">Comps</option>
          <option value="AI-DS">AI-DS</option>
          {/* Add more options as needed */}
        </select>
        <h3 style={{ paddingTop: "10px" }}>Semester</h3>
        <select
          className="filter-select"
          value={filterSemester}
          onChange={handleFilterSemesterChange}
        >
          <option value="All">All</option>
          <option value="Sem1">Sem1</option>
          <option value="Sem2">Sem2</option>
          <option value="Sem3">Sem3</option>
          <option value="Sem4">Sem4</option>
          {/* Add more options as needed */}
        </select>
        <h3 style={{ paddingTop: "10px" }}>Subject</h3>
        <select
          className="filter-select"
          value={filterSubject}
          onChange={handleFilterSubjectChange}
        >
          <option value="All">All</option>
          <option value="DBMS">DBMS</option>
          <option value="ML">ML</option>
          <option value="OS">OS</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <a href={note.link} target="_blank" rel="noopener noreferrer">
              {note.title} ({note.department}, {note.semester}, {note.subject})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
