import React, { useEffect, useState, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { AppContext } from '../App';
import { FaHeart, FaList } from 'react-icons/fa'; // Import icons for Favorites and Playlist

function Songs() {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToFavorites, addToPlaylist } = useContext(AppContext);

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const response = await import('../../db/db.json');
        setSongs(response.items);
      } catch (error) {
        console.error('Failed to load songs:', error);
      }
    };
    loadSongs();
  }, []);

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.singer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="content">
      <h2>Songs List</h2>
      <input
        type="text"
        placeholder="Search by title, singer, genre..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul className="song-grid">
        {filteredSongs.length === 0 ? (
          <p>No songs match your search. Check the console for errors or try a different search.</p>
        ) : (
          filteredSongs.map(song => (
            <li key={song.id} className="song-card">
              <img src={song.imageUrl} alt={song.title} />
              <div>
                <h3>{song.title}</h3>
                <p>{song.singer} - {song.genre}</p>
                <ReactAudioPlayer
                  src={song.songUrl}
                  controls
                  className="custom-audio-player"
                />

                <div className="song-card-buttons">
                  <button onClick={() => addToFavorites(song)}>
                    <FaHeart size={20} />
                  </button>
                  <button onClick={() => addToPlaylist(song)}>
                    <FaList size={20} />
                  </button>
                </div>

              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Songs;