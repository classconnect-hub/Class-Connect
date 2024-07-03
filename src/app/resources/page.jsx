'use client';

import React, { useState } from "react";
import styles from "./resources.css";

const Notes = () => {
  const [filterDepartment, setFilterDepartment] = useState("All"); // default filter value
  const [filterSemester, setFilterSemester] = useState("All"); // default filter value
  const [filterSubject, setFilterSubject] = useState("All"); // default filter value
  const [notes, setNotes] = useState([
    { id: 1, department: "Comps", semester: "Sem1", subject: "DBMS", note: "Note 1" },
    { id: 2, department: "AI-DS", semester: "Sem1", subject: "ML", note: "Note 2" },
    { id: 3, department: "IT", semester: "Sem1", subject: "OS", note: "Note 3" },
    { id: 4, department: "EXTC", semester: "Sem1", subject: "EC", note: "Note 4" },
    { id: 5, department: "Comps", semester: "Sem2", subject: "CN", note: "Note 5" },
    { id: 6, department: "AI-DS", semester: "Sem2", subject: "AI", note: "Note 6" },
    { id: 7, department: "IT", semester: "Sem2", subject: "DS", note: "Note 7" },
    { id: 8, department: "EXTC", semester: "Sem2", subject: "CA", note: "Note 8" },
    { id: 9, department: "Comps", semester: "Sem3", subject: "DC", note: "Note 9" },
    { id: 10, department: "AI-DS", semester: "Sem3", subject: "CV", note: "Note 10" },
    { id: 11, department: "IT", semester: "Sem3", subject: "CN", note: "Note 11" },
    { id: 12, department: "EXTC", semester: "Sem3", subject: "EC", note: "Note 12" },
    { id: 13, department: "Comps", semester: "Sem4", subject: "OS", note: "Note 13" },
    { id: 14, department: "AI-DS", semester: "Sem4", subject: "ML", note: "Note 14" },
    { id: 15, department: "IT", semester: "Sem4", subject: "DBMS", note: "Note 15" },
    { id: 16, department: "EXTC", semester: "Sem4", subject: "AI", note: "Note 16" },
  ]);

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
  <h1 className="middleTitle">Resources</h1>
</div>
      <div className="filter-list-container">
      <h3 style={{paddingTop:'20px'}}>Year</h3>
      <select className="filter-select" value={filterDepartment} onChange={handleFilterDepartmentChange}>
        <option value="All">All</option>
        <option value="FY">FY</option>
        <option value="Comps">Comps</option>
        <option value="AI-DS">AI-DS</option>
        <option value="IT">IT</option>
        <option value="EXTC">EXTC</option>
      </select>
      <h3>Semester</h3>
      <select className="filter-select" value={filterSemester} onChange={handleFilterSemesterChange}>
        <option value="All">All</option>
        <option value="Sem1">Sem1</option>
        <option value="Sem2">Sem2</option>
        <option value="Sem3">Sem3</option>
        <option value="Sem4">Sem4</option>
      </select>
      <h3>Subject</h3>
      <select className="filter-select" value={filterSubject} onChange={handleFilterSubjectChange}>
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
            {note.note} ({note.department}, {note.semester}, {note.subject})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;