'use client';

import React, { useState } from "react";
import fyData from "../../data/fy"; // Importing only fyData
import "../../notes.css";
import BackButton from '../backbutton';
const FY = () => {
  const [filterSemester, setFilterSemester] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");

  const handleFilterSemesterChange = (e) => {
    setFilterSemester(e.target.value);
  };

  const handleFilterSubjectChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const filteredNotes = fyData.filter((note) => {
    if (
      filterSemester === "All" &&
      filterSubject === "All"
    )
      return true;
    if (
      filterSemester !== "All" &&
      filterSubject === "All"
    )
      return note.semester === filterSemester;
    if (
      filterSemester === "All" &&
      filterSubject !== "All"
    )
      return note.subject === filterSubject;
    return (
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
        <h1 className="middleTitle">FY Notes</h1>
      </div>
      <BackButton />
      <div className="filter-list-container">
        <h3 style={{ paddingTop: "10px" }}>Semester</h3>
        <select
          className="filter-select"
          value={filterSemester}
          onChange={handleFilterSemesterChange}
        >
          <option value="All">All</option>
          <option value="Sem1">Sem1</option>
          {/* <option value="Sem2">Sem2</option> */}
        </select>
        <h3 style={{ paddingTop: "10px" }}>Subject</h3>
        <select
          className="filter-select"
          value={filterSubject}
          onChange={handleFilterSubjectChange}
        >
          <option value="All">All</option>
          <option value="BEE">BEE</option>
          <option value="EC">Engineering Chemistry</option>
          <option value="EM-1">Maths 1</option>
          <option value="EM">Mechanics</option>
          <option value="EP">Engineering Physics</option>
        </select>
      </div>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <a
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {note.note} ({note.semester}, {note.subject}) -{" "}
              <span style={{ color: "grey" }}>{note.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FY;