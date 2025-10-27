import React, { useState, useEffect } from "react";

const Player = ({ currentSong, audioRef }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };
    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => audioRef.current.removeEventListener("timeupdate", updateProgress);
  }, [audioRef]);

  return (
    <div className="player">
      <h2>{currentSong.name}</h2>
      <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
      <div className="progress-bar" style={{ width: "80%", margin: "10px auto", background: "#fff", height: "10px", borderRadius: "5px" }}>
        <div style={{ width: `${progress}%`, background: "#6a00f4", height: "10px", borderRadius: "5px" }}></div>
      </div>
    </div>
  );
};

export default Player;