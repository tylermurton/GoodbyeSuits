import React from "react";
// import "../styles/SearchBox.css";



function SearchBox({ renderTable }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => renderTable(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;