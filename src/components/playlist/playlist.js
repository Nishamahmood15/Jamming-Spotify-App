import React from "react";
import Tracks from "../tracks/Tracks";
import { useSpotify } from "../../context/spotifyProvider";

const Playlist = () => {
  const {
    playlistTracks,
    playlistName,
    removeTrack,
    updatePlayListName,
    savePlayList,
  } = useSpotify();

  const onPlaylistNameChange = (event) => {
    updatePlayListName(event.target.value);
  };

  const onSaveToSpotify = () => {
    if (playlistTracks.length > 0) 
    savePlayList();
  };
  return (
    <div class=" h-[600px] overflow-y-scroll w-[inhert] bg-custom bg-opacity-60 shadow-2xl rounded-md p-4">
      <div className="min-h-[200px] h-full w-full">
        <input
          onChange={onPlaylistNameChange}
          value={playlistName}
          className="w-full border-0 outline-none bg-transparent border-b-1 border-gray-700 font-poppins text-xl text-white"
        />

        {playlistTracks.map((track) => (
          <React.Fragment key={track.id}>
            <Tracks track={track} isRemoval action={removeTrack} />
            <div class="border-t border-white w-full" />
          </React.Fragment>
        ))}
        <button className="primary-button" onClick={onSaveToSpotify}>
          SAVE TO SPOTIFY
        </button>
      </div>
    </div>
  );
};
export default Playlist;
