import React  from 'react';

import './search-panel.css';

const SearchPanel = ({onSearch}) => {
  const handleChangeInput = (e) => {
    onSearch(e.target.value.toLocaleLowerCase())
  }
  return (
    <input
         type="text"
         className="form-control search-input"
         placeholder="type to search"
         onChange={handleChangeInput}
    />
  );
};

export default SearchPanel;
