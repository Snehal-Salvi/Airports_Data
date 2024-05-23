import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import airportsData from "../../data/airports.json";
import "./table.css";

// The main Table component
export default function Table() {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  // State to keep track of the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to keep track of selected airport types
  const [selectedTypes, setSelectedTypes] = useState([]);
  // Number of records to display per page
  const recordsPerPage = 4;

  // Filter airports based on search query and selected types
  const filteredAirports = airportsData.filter(
    (airport) =>
      airport.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTypes.length === 0 || selectedTypes.includes(airport.type))
  );

  // Calculate the indexes for the current page records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredAirports.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredAirports.length / recordsPerPage);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Function to handle type filter changes
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      // Remove the type from selected types if it is already selected
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      // Add the type to selected types if it is not already selected
      setSelectedTypes([...selectedTypes, type]);
    }
    // Reset to the first page when filters change
    setCurrentPage(1);
  };

  return (
    <div className="table-container">
      {/* Filter section */}
      <div className="filter-container">
        {/* Type filter */}
        <div className="type-container">
          <h1>Type</h1>
          <label>
            <input
              type="checkbox"
              checked={selectedTypes.includes("small")}
              onChange={() => handleTypeChange("small")}
            />
            Small
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedTypes.includes("medium")}
              onChange={() => handleTypeChange("medium")}
            />
            Medium
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedTypes.includes("large")}
              onChange={() => handleTypeChange("large")}
            />
            Large
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedTypes.includes("heliport")}
              onChange={() => handleTypeChange("heliport")}
            />
            Heliport
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedTypes.includes("favourites")}
              onChange={() => handleTypeChange("favourites")}
            />
            In your favourites
          </label>
        </div>
        {/* Search filter */}
        <div className="search-container">
          <h1>Filter by search</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              // Reset to the first page when search query changes
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Table section */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ICAO</th>
            <th>IATA</th>
            <th>Elev.</th>
            <th>Lat.</th>
            <th>Long.</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Display current records */}
          {currentRecords.map((airport) => (
            <tr key={airport.id}>
              <td>{airport.name}</td>
              <td>{airport.icao}</td>
              <td>{airport.iata}</td>
              <td>{airport.elevation}</td>
              <td>{airport.latitude}</td>
              <td>{airport.longitude}</td>
              <td>{airport.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination section */}
      <ul className="pagination">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </li>
        <div className="pagination-info">
          <span>
            Showing{" "}
            <span style={{ fontWeight: "bold" }}>{indexOfFirstRecord + 1}</span>
            -
            <span style={{ fontWeight: "bold" }}>
              {Math.min(indexOfLastRecord, filteredAirports.length)}
            </span>{" "}
            of
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {filteredAirports.length}
            </span>{" "}
            results
          </span>
        </div>
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </li>
      </ul>
    </div>
  );
}
