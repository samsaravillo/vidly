import React from "react";

const Search = ({ title, error, ...rest }) => {
  return (
    <div className="form-group">
      <input
        {...rest}
        name="Search"
        placeholder="Search..."
        id="Search"
        value={title}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Search;
