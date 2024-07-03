'use client';

import React, { useState } from "react";
import styles from "./notes.css";
// Notes.js
import compsData from './data/comps';
 import aiDsData from './data/aids';
 import itData from './data/it';
 import extcData from './data/extc';

 const notes = [...compsData, ...aiDsData, ...itData, ...extcData];
// const notes = [...compsData];



const Notes = () => {
  const [filterDepartment, setFilterDepartment] = useState("All"); // default filter value
  const [filterSemester, setFilterSemester] = useState("All"); // default filter value
  const [filterSubject, setFilterSubject] = useState("All"); // default filter value
  const [notesState, setNotesState] = useState(notes);

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
    if (filterDepartment !== "All" && filterSemester === "All" && filterSubject === "All")
      return note.department === filterDepartment;
    if (filterDepartment === "All" && filterSemester !== "All" && filterSubject === "All")
      return note.semester === filterSemester;
    if (filterDepartment === "All" && filterSemester === "All" && filterSubject !== "All")
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
      return (
        note.semester === filterSemester && note.subject === filterSubject
      );
    return (
      note.department === filterDepartment &&
      note.semester === filterSemester &&
      note.subject === filterSubject
    );
  });

  return (
    <div>
      <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
 <h1 className="middleTitle">Notes</h1>
</div>
<div className="filter-list-container">
  <h3 style={{paddingTop:'20px'}}>Year</h3>
  <select className="filter-select" value={filterDepartment} onChange={handleFilterDepartmentChange} >
    <option value="All">All</option>
    <option value="FY">FY</option>
    <option value="Comps">Comps</option>
    <option value="AI-DS">AI-DS</option>
    <option value="IT">IT</option>
    <option value="EXTC">EXTC</option>
  </select>
  <h3>Semester</h3>
  <select className="filter-select" value={filterSemester} onChange={handleFilterSemesterChange} >
    <option value="All">All</option>
    <option value="Sem1">Sem1</option>
    <option value="Sem2">Sem2</option>
    <option value="Sem3">Sem3</option>
    <option value="Sem4">Sem4</option>
  </select>
  <h3>Subject</h3>
  <select className="filter-select" value={filterSubject} onChange={handleFilterSubjectChange} >
    <option value="All">All</option>
    <option value="DBMS">DBMS</option>
    <option value="ML">ML</option>
    <option value="OS">OS</option>
    <option value="EC">EC</option>
    <option value="CN">CN</option>
    <option value="AI">AI</option>
    <option value="DS">DS</option>
    <option value="CA">CA</option>
    <option value="DC">DC</option>
    <option value="CV">CV</option>
  </select>
</div>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <a href={note.link} target="_blank" rel="noopener noreferrer">{note.note} ({note.department}, {note.semester}, {note.subject}) - <span style={{ color:'grey' }}>{note.name}</span></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;