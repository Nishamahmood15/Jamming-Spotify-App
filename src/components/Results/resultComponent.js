import React from "react";
import Tracks from "../tracks/Tracks";
import { useSpotify } from "../../context/spotifyProvider";

export const ResultComponent = () => {
  const { searchResults, addTrack } = useSpotify();
  return (
    <div class=" h-[600px] overflow-y-scroll w-[inhert] bg-custom bg-opacity-60 shadow-2xl rounded-md p-4">
      <h2 class="text-white text-xl font-bold">Results</h2>

      {searchResults.map((track) => (
        <React.Fragment key={track.id}>
          <Tracks track={track} isRemoval={false} action={addTrack} />
          <div class="border-t border-white w-full" />
        </React.Fragment>
      ))}
    </div>
  );
};
