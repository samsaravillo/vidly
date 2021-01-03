import React from "react";

const Search = ({ error }) => {
  return (
    <div className="form-group">
      <input
        name="Search"
        placeholder="Search..."
        id="Search"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Search;
