import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

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
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #FF3D00',
    borderRadius: '5px',
    width: '100%',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow for elevation
  };

  const inputStyle = {
    flex: 1,
    padding: '8px',
    border: 'none',
    outline: 'none',
    margin: '3px 8px',
    backgroundColor: 'transparent',
    fontSize: '20px', // Add this line to increase the text size
  };
  

  const iconStyle = {
    color: 'white', // Set the icon color to white for better contrast
    cursor: 'pointer',
    width: '25px',
    height: '25px',
    
  };

  const searchIconBoxStyle = {
    backgroundColor: '#FF3D00',
    width: '60px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className='search-box' style={searchBoxStyle}>
      <input
        type='text'
        placeholder='Search here'
        value={query}
        onChange={handleInputChange}
        className='search-input'
        style={inputStyle}
      />
      <div className="search-icon-box" style={searchIconBoxStyle}>
        <FaSearch onClick={handleSearch} style={iconStyle} />
      </div>
    </div>
  );
}
