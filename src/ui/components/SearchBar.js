import React, { useState } from "react";
import { BiBorderRadius } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 480;

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(query);
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  const searchBoxStyle = {
    display: "flex",
    alignItems: "stretch",
    border: isMobile ? "1.7px solid #FF3D00" : "2px solid #FF3D00",
    borderRadius: "5px",
    width: "100%",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const inputStyle = {
    flex: 1,
    padding: isMobile?"8px":"12px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: isMobile ? "12px" : "16px",
  };

  const iconStyle = {
    color: "white",
    cursor: "pointer",
    width: isMobile ? "16px" : "20px",
    height: isMobile ? "16px" : "20px",
  };

  const searchIconBoxStyle = {
    backgroundColor: "#FF3D00",
    width: isMobile ? "35px" : "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0px 3px 3px 0px",
  };

  return (
    <div className="search-box" style={searchBoxStyle}>
      <input
        type="text"
        placeholder="Search here"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        style={inputStyle}
      />
      <div className="search-icon-box" style={searchIconBoxStyle}>
        <FaSearch onClick={handleSearch} style={iconStyle} />
      </div>
    </div>
  );
}
