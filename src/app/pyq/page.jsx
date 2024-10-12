"use client";
import React, { useState } from "react";
import notes from "./data/pData"; // Adjust the path as per your project structure
import "./pyq.css";
import { PageWrapper } from "../page-wrapper";

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
    return (
      (filterDepartment === "All" || note.department === filterDepartment) &&
      (filterSemester === "All" || note.semester === filterSemester) &&
      (filterSubject === "All" || note.subject === filterSubject)
    );
  });

  return (
    <PageWrapper>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1 className="middleTitle">PYQ</h1>
        </div>
        <div className="filter-list-container">
          <h3 style={{ paddingTop: "10px" }}>Year</h3>
          <select className="filter-select" value={filterDepartment} onChange={handleFilterDepartmentChange}>
            <option value="All">All</option>
            <option value="FY">FY</option>
            <option value="Comps">Comps</option>
            <option value="AI-DS">AI-DS</option>
          </select>
          <h3 style={{ paddingTop: "10px" }}>Semester</h3>
          <select className="filter-select" value={filterSemester} onChange={handleFilterSemesterChange}>
            <option value="All">All</option>
            <option value="Sem1">Sem1</option>
            <option value="Sem2">Sem2</option>
            <option value="Sem3">Sem3</option>
            <option value="Sem4">Sem4</option>
          </select>
          <h3 style={{ paddingTop: "10px" }}>Subject</h3>
          <select className="filter-select" value={filterSubject} onChange={handleFilterSubjectChange}>
            <option value="All">All</option>
            <option value="DBMS">DBMS</option>
            <option value="ML">ML</option>
            <option value="OS">OS</option>
          </select>
        </div>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Note</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Subject</th>
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
                <td>{note.department}</td>
                <td>{note.semester}</td>
                <td>{note.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default Notes;
