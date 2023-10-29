import { createContext, useContext, useState } from "react";
import Spotify from "../util/Spotify";

const SpotifyContext = createContext({
  addTrack: () => {},
  removeTrack: () => {},
  updatePlayListName: () => {},
  savePlayList: () => {},
  search: () => {},
  searchResults: [],
  playlistName: "New PlayList",
  playlistTracks: [],
});

export const SpotifyProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New PlayList");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // will add tracks the playlist
  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) return;

    setPlaylistTracks((prev) => [...prev, track]);
  };

  // will remove tracks from playlist
  const removeTrack = (track) => {
    const newPlaylist = playlistTracks.filter(
      (listTrack) => listTrack.id !== track.id
    );

    setPlaylistTracks(newPlaylist);
  };

  const updatePlayListName = (name) => {
    setPlaylistName(name);
  };

  const savePlayList = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  const search = (term) => {
    Spotify.search(term).then((searchResults) => {
      setSearchResults(searchResults);
    });
  };
  return (
    <SpotifyContext.Provider
      value={{
        searchResults,
        playlistName,
        playlistTracks,
        addTrack,
        removeTrack,
        updatePlayListName,
        savePlayList,
        search,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotify = () => useContext(SpotifyContext);
