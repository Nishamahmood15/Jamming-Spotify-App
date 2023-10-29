import React from "react";

const Tracks = ({ track, isRemoval, action = () => null }) => {
  return (
    <div class="Track p-2 bg-opacity-40 text-black shadow-xl grid grid-cols-2 gap-4 ">
      <div class="Track-information ">
        <h3 class="text-lg font-semibold text-white">{track?.name}</h3>
        <p class="text-sm text-white">
          {track?.artist} | {track?.album}
        </p>
      </div>
      <button
        onClick={action.bind(this, track)}
        class="Track-action text-white text-right"
      >
        {isRemoval && "-"}
        {!isRemoval && "+"}
      </button>
    </div>
  );
};

export default Tracks;
