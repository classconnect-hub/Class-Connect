'use client';

import React, { useState } from "react";
import extcData from "../../data/extc"; // Importing only extcData
import "../../notes.css";
import BackButton from '../backbutton';

const EXTC = () => {
  const [filterSemester, setFilterSemester] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");

  const handleFilterSemesterChange = (e) => {
    setFilterSemester(e.target.value);
  };

  const handleFilterSubjectChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const filteredNotes = extcData.filter((note) => {
    if (filterSemester === "All" && filterSubject === "All") return true;
    if (filterSemester !== "All" && filterSubject === "All") return note.semester === filterSemester;
    if (filterSemester === "All" && filterSubject !== "All") return note.subject === filterSubject;
    return note.semester === filterSemester && note.subject === filterSubject;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 className="middleTitle">ExTC Department</h1>
      </div>

      <BackButton />
      <div className="filter-list-container">
        <h3 style={{ paddingTop: "10px" }}>Semester</h3>
        <select className="filter-select" value={filterSemester} onChange={handleFilterSemesterChange}>
          <option value="All">All</option>
          <option value="Sem1">Sem1</option>
          {/* <option value="Sem2">Sem2</option> */}
        </select>
        <h3 style={{ paddingTop: "10px" }}>Subject</h3>
        <select className="filter-select" value={filterSubject} onChange={handleFilterSubjectChange}>
          <option value="All">All</option>
          <option value="Maths">Maths III</option>
          <option value="DLD">DLD</option>
          <option value="EDC">EDC</option>
          <option value="MC">MC</option>
          {/* <option value="SE">Soft Engg.</option> */}
        </select>
      </div>

      <table className="notes-table">
        <thead>
          <tr>
            <th>Note</th>
            <th>Semester</th>
            <th>Subject</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note) => (
            <tr key={note.id}>
              <td>
                <a href={note.link} target="_blank" rel="noopener noreferrer">
                  {note.note}
                </a>
              </td>
              <td>{note.semester}</td>
              <td>{note.subject}</td>
              <td style={{ color: "grey" }}>{note.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EXTC;
