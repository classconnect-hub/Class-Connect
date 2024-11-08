"use client";
import React, { useState, useEffect } from "react";
import "./pyq.css";
import { PageWrapper } from "../page-wrapper";

const PYQ = () => {
  const [filters, setFilters] = useState({
    department: "All",
    semester: "All",
    subject: "All",
  });
  const [notes, setNotes] = useState([]); // State to hold notes data

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/pyq'); // Fetch data from the pyq API route
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []); // Fetch notes on component mount

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
      <option value="All">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const departments = [...new Set(notes.map((note) => note.department))];
  const semesters = [...new Set(notes.map((note) => note.semester))];
  const subjects = [...new Set(notes.map((note) => note.subject))];

  return (
    <PageWrapper>
      <div style={{ textAlign: "center" }}>
        <h1 className="middleTitle">PYQ</h1>
      </div>
      <div className="filter-list-container">
        <h3 className="filter-label">Department</h3>
        {renderFilterOptions("department", departments)}
        <h3 className="filter-label">Semester</h3>
        {renderFilterOptions("semester", semesters)}
        <h3 className="filter-label">Subject</h3>
        {renderFilterOptions("subject", subjects)}
      </div>
      <div className="notes-list">
        {filteredNotes.length > 0 ? (
          <table className="notes-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Semester</th>
                <th>Subject</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotes.map((note) => (
                <tr key={note.id} onClick={() => window.open(note.link, "_blank")} style={{ cursor: 'pointer' }}>
                  <td>{note.department}</td>
                  <td>{note.semester}</td>
                  <td>{note.subject}</td>
                  <td>{note.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No notes available for the selected filters.</p>
        )}
      </div>
    </PageWrapper>
  );
};

export default PYQ;