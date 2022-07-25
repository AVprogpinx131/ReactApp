import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Counter from "./Counter";
import MusicianPlayLists from "./PlayList";
import Promises from "./Promises";
import SearchItems from "./SearchBar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name="Andrus" />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/playlist"
          element={
            <MusicianPlayLists
              playList1="Ed Sheeran Playlist"
              playList2="Coldplay Playlist"
              playList3="Imagine Dragons Playlist"
            />
          }
        />
        <Route path="/promises" element={<Promises />} />
        <Route path="/searchbar" element={<SearchItems />} />
      </Routes>
    </>
  );
};

export default App;
