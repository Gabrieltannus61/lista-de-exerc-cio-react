import { useState, useRef, useEffect } from "react";
import "./App.css";

/* --- 1. DADOS (Mock) --- */
const songsData = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://placehold.co/150/1a1a1a/FFF?text=Queen",
  },
  {
    id: 2,
    title: "Hotel California",
    artist: "Eagles",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://placehold.co/150/1a1a1a/FFF?text=Eagles",
  },
  {
    id: 3,
    title: "Imagine",
    artist: "John Lennon",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://placehold.co/150/1a1a1a/FFF?text=Lennon",
  },
  {
    id: 4,
    title: "Billie Jean",
    artist: "Michael Jackson",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://placehold.co/150/1a1a1a/FFF?text=MJ",
  },
];

/* --- 2. COMPONENTES --- */

const Sidebar = ({ playlists, onCreatePlaylist }) => {
  const [newPlaylist, setNewPlaylist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPlaylist) return;
    onCreatePlaylist(newPlaylist);
    setNewPlaylist("");
  };

  return (
    <aside className="sidebar">
      <div className="logo">Spotify Clone</div>
      <nav>
        {/* Usando Emojis como ícones */}
        <a href="#" className="nav-item active">
          <span className="icon">🏠</span> Início
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📚</span> Sua Biblioteca
        </a>
      </nav>

      <div className="playlists-section">
        <div className="playlist-header">
          <span className="section-title">PLAYLISTS</span>
          <form onSubmit={handleSubmit} className="playlist-form">
            <span className="icon-plus">+</span>
            <input
              type="text"
              placeholder="Criar playlist"
              value={newPlaylist}
              onChange={(e) => setNewPlaylist(e.target.value)}
            />
          </form>
        </div>
        <ul className="playlist-list">
          {playlists.map((pl, idx) => (
            <li key={idx} className="playlist-item">
              {pl}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const Header = ({ onSearch }) => {
  return (
    <header className="top-bar">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="O que você quer ouvir?"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="user-controls">
        <button className="pill-btn">Instalar aplicativo</button>
        <span className="icon-bell">🔔</span>
        <div className="avatar">
          <span>👤</span>
        </div>
      </div>
    </header>
  );
};

const ListaMusicas = ({
  songs,
  onPlay,
  currentSong,
  isPlaying,
  favorites,
  onToggleFavorite,
}) => {
  return (
    <div className="song-list-container">
      <h2>Tocadas Recentemente</h2>
      <div className="grid-songs">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <div className="cover-wrapper">
              <img src={song.cover} alt={song.title} />
              <button className="play-btn-card" onClick={() => onPlay(song)}>
                {/* Condicional de Play/Pause com Unicode */}
                {currentSong?.id === song.id && isPlaying ? "⏸" : "▶"}
              </button>
            </div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button
              className={`fav-btn ${
                favorites.includes(song.id) ? "active" : ""
              }`}
              onClick={() => onToggleFavorite(song.id)}
            >
              {/* Coração preenchido ou vazio */}
              {favorites.includes(song.id) ? "❤️" : "♡"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Player = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  volume,
  setVolume,
  audioRef,
}) => {
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      if (total) setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const seekTime = (audioRef.current.duration / 100) * e.target.value;
      audioRef.current.currentTime = seekTime;
      setProgress(e.target.value);
    }
  };

  return (
    <footer className="player-footer">
      <div className="player-left">
        {currentSong && (
          <>
            <img src={currentSong.cover} alt="" className="mini-cover" />
            <div className="mini-info">
              <h4>{currentSong.title}</h4>
              <span>{currentSong.artist}</span>
            </div>
          </>
        )}
      </div>

      <div className="player-center">
        <div className="controls-buttons">
          <button className="control-btn" title="Anterior">
            ⏮
          </button>
          <button
            className="play-circle"
            onClick={onTogglePlay}
            disabled={!currentSong}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className="control-btn" title="Próximo">
            ⏭
          </button>
        </div>
        <div className="progress-bar-wrapper">
          <input
            type="range"
            min="0"
            max="100"
            value={progress || 0}
            onChange={handleSeek}
            disabled={!currentSong}
          />
        </div>
        <audio
          ref={audioRef}
          src={currentSong?.url}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>

      <div className="player-right">
        <span className="vol-icon">🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="volume-slider"
        />
      </div>
    </footer>
  );
};

/* --- 3. APP PRINCIPAL --- */
export default function App() {
  const [songs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [favorites, setFavorites] = useState([]);
  const [playlists, setPlaylists] = useState(["Rock Clássico", "Relax"]);
  const [searchTerm, setSearchTerm] = useState("");

  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.error("Erro playback:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      togglePlay();
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const addPlaylist = (name) => {
    if (name) setPlaylists([...playlists, name]);
  };

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Sidebar playlists={playlists} onCreatePlaylist={addPlaylist} />

      <main className="main-content">
        <Header onSearch={setSearchTerm} />
        <div className="content-scroll">
          <ListaMusicas
            songs={filteredSongs}
            onPlay={playSong}
            currentSong={currentSong}
            isPlaying={isPlaying}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </main>

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        volume={volume}
        setVolume={setVolume}
        audioRef={audioRef}
      />
    </div>
  );
}
