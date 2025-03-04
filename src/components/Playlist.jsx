import React, { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { AppContext } from '../App';

function Playlist() {
  const { playlist, removeFromPlaylist } = useContext(AppContext);

  return (
    <div className="content">
      <h2>Playlist</h2>
      {playlist.length === 0 ? (
        <p>No songs in playlist yet</p>
      ) : (
        playlist.map(song => (
          <div key={song.id} className="song-card">
            <img src={song.imageUrl} alt={song.title} />
            <div>
              <h3>{song.title}</h3>
              <p>{song.singer} - {song.genre}</p>
              <ReactAudioPlayer
                src={song.songUrl}
                controls
                style={{ width: '100%' }}
              />
              <button onClick={() => removeFromPlaylist(song.id)}>Remove from Playlist</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Playlist;