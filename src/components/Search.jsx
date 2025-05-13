import React from "react";

const Search = ({ search, setInput }) => {
  const inputHabdler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHabdler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
