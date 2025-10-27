import React, { useState, useRef, useEffect } from "react";
import Player from "./components/Player";
import Library from "./components/Library";
import PlaylistManager from "./components/PlaylistManager";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  const toggleFavorite = (songId) => {
    setFavorites((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    );
  };

  return (
    <div className="app-container">
      <h1>BeatFlow Music Player</h1>
      <SearchBar songs={songs} setSongs={setSongs} />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addSong={addSong}
      />
      <PlaylistManager
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      {currentSong && <Player currentSong={currentSong} audioRef={audioRef} />}
    </div>
  );
};

export default App;