import React, { useState } from "react";

const PlaylistManager = ({ songs, setCurrentSong }) => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const createPlaylist = () => {
    if (playlistName.trim() !== "") {
      setPlaylists([...playlists, { name: playlistName, songIds: [] }]);
      setPlaylistName("");
    }
  };

  return (
    <div className="playlist-manager">
      <h3>Playlists</h3>
      <input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button onClick={createPlaylist}>Create</button>
      <ul>
        {playlists.map((pl, idx) => (
          <li key={idx}>
            {pl.name}
            <button onClick={() => setCurrentSong(songs[0])}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;