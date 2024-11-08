"use client";
import React, { useState } from "react";
import notes from "./data/pData"; // Adjust the path as per your project structure
import "./pyq.css";
import { PageWrapper } from "../page-wrapper";

const PYQ = () => {
  const [filters, setFilters] = useState({
    department: "All",
    semester: "All",
    subject: "All",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredNotes = notes.filter((note) => {
    return (
      (filters.department === "All" || note.department === filters.department) &&
      (filters.semester === "All" || note.semester === filters.semester) &&
      (filters.subject === "All" || note.subject === filters.subject)
    );
  });

  const renderFilterOptions = (name, options) => (
    <select className="filter-select" name={name} value={filters[name]} onChange={handleFilterChange}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );

  return (
    <PageWrapper>
      <div>
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="middleTitle">PYQ</h1>
          </div>
        <div className="filter-list-container">
          <h3>Year</h3>
          {renderFilterOptions("department", ["All", "FY", "Comps", "AI-DS"])}
          <h3>Semester</h3>
          {renderFilterOptions("semester", ["All", "Sem1", "Sem2", "Sem3", "Sem4"])}
          <h3>Subject</h3>
          {renderFilterOptions("subject", ["All", "DBMS", "ML", "OS"])}
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
                {["note", "department", "semester", "subject"].map((field) => (
                  <td key={field}>
                    <a
                      href={note.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {note[field]}
                    </a>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default PYQ;
