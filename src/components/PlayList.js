import React, { useState, useRef, useEffect } from "react";

import {
  EdSheeranSongsData,
  ColdplaySongsData,
  ImagineDragonsSongsData,
} from "./audios";

const MusicianPlayLists = (props) => {
  const RenderSong = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElem = useRef();

    useEffect(() => {
      if (isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }, [isPlaying]);

    const handleBtnClick = () => {
      setIsPlaying(!isPlaying);
    };

    return (
      <p className="playlist-boxes">
        <span>
          <button className="playPauseBtn" onClick={handleBtnClick}>
            {isPlaying ? "Play" : "Pause"}
            <audio
              ref={audioElem}
              src="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
            ></audio>
          </button>
        </span>
        <h4 style={{ display: "inline-block" }}>{song.title}</h4>
      </p>
    );
  };

  return (
    <div>
      <div className="playlists">
        <div>
          <h2>{props.playList1}</h2>
          {EdSheeranSongsData.map((song) => {
            return <RenderSong song={song} />;
          })}
        </div>
        <div>
          <h2>{props.playList2}</h2>
          {ColdplaySongsData.map((song) => {
            return <RenderSong song={song} />;
          })}
        </div>
        <div>
          <h2>{props.playList3}</h2>
          {ImagineDragonsSongsData.map((song) => {
            return <RenderSong song={song} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MusicianPlayLists;
