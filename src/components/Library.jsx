import React from "react";

const Library = ({ songs, setCurrentSong, favorites, toggleFavorite, addSong }) => {
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      addSong({ name: file.name, url, id: Math.random().toString(36).substr(2, 9) });
    });
  };

  return (
    <div className="library">
      <h3>Library</h3>
      <input type="file" multiple onChange={handleFileUpload} />
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <span onClick={() => setCurrentSong(song)} style={{ cursor: "pointer" }}>
              {song.name}
            </span>
            <button onClick={() => toggleFavorite(song.id)}>
              {favorites.includes(song.id) ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;