import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ChillPlaylist } from './pages/Playlists/ChillPlaylist/ChillPlaylist';
import { RapPlaylist } from './pages/Playlists/RapPlaylist/RapPlaylist';
import { RockPlaylist } from './pages/Playlists/RockPlaylist/RockPlaylist';
import { Playlist } from './pages/MyMusic/Playlist/Playlist';
import { Recently } from './pages/MyMusic/Recently/Recently';
import { Favourite } from './pages/MyMusic/Favourite/Favourite';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Playlist" element={<Playlist />} />
          <Route path="/RecentlyPlayed" element={<Recently />} />
          <Route path="/Favourite" element={<Favourite />} />

          <Route path="/Playlist/Chill" element={<ChillPlaylist />} />
          <Route path="/Playlist/Rap" element={<RapPlaylist />} />
          <Route path="/Playlist/Rock" element={<RockPlaylist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
