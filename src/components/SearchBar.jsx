import React, { useState } from "react";

const SearchBar = ({ songs, setSongs }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = songs.filter((s) => s.name.toLowerCase().includes(value.toLowerCase()));
    setSongs(filtered.length > 0 ? filtered : songs);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Songs..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;