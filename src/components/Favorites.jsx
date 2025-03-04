import React, { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { AppContext } from '../App';

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(AppContext);

  return (
    <div className="content">
      <h2>Favorites</h2>
      <ul className="song-grid">
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favorites.map(song => (
            <li key={song.id} className="song-card">
              <img src={song.imageUrl} alt={song.title} />
              <div>
                <h3>{song.title}</h3>
                <p>{song.singer} - {song.genre}</p>
                <ReactAudioPlayer
                  src={song.songUrl}
                  controls
                  style={{ width: '100%' }}
                />
                <button onClick={() => removeFromFavorites(song.id)}>Remove from Favorites</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Favorites;