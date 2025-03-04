import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Rhythmic Tunes</h2>
      <nav>
        <Link to="/songs">Songs</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/playlist">Playlist</Link>
      </nav>
    </div>
  );
}

export default Sidebar;