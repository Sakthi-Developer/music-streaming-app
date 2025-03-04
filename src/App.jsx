import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';
import Favorites from './components/Favorites';
import Playlist from './components/Playlist';
import './App.css';

// Create a context for sharing state
export const AppContext = createContext();

function App() {
  const [favorites, setFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToFavorites = (song) => {
    if (!favorites.find(fav => fav.id === song.id)) {
      setFavorites([...favorites, song]);
      console.log('Added to Favorites:', song.title); // Debug log
    }
  };

  const addToPlaylist = (song) => {
    if (!playlist.find(p => p.id === song.id)) {
      setPlaylist([...playlist, song]);
      console.log('Added to Playlist:', song.title); // Debug log
    }
  };

  const removeFromFavorites = (songId) => {
    setFavorites(favorites.filter(fav => fav.id !== songId));
    console.log('Removed from Favorites:', songId); // Debug log
  };

  const removeFromPlaylist = (songId) => {
    setPlaylist(playlist.filter(p => p.id !== songId));
    console.log('Removed from Playlist:', songId); // Debug log
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, playlist, addToPlaylist, removeFromFavorites, removeFromPlaylist }}>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/songs" element={<Songs />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/" element={<Songs />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;