import React from "react";
import SearchInput from "../components/SearchInput";
import { ResultComponent } from "../components/Results/resultComponent";
import Playlist from "../components/playlist/playlist";
import { SpotifyProvider } from "../context/spotifyProvider";

export default function Home() {
  return (
    <SpotifyProvider>
      <section className="app-container ">
        <div className="mt-32 w-10/12 m-auto tablet:w-3/12 ">
          <SearchInput placeholder="Sreach for Song" />
        </div>

        <div className="max-w-4xl w-full m-auto pt-32">
          <div className="flex flex-col tablet:flex-row gap-10">
            <div className="w-full tablet:w-[50%]">
              <ResultComponent />
            </div>
            <div className="w-full tablet:w-[50%]">
              <Playlist />
            </div>
          </div>
        </div>
      </section>
    </SpotifyProvider>
  );
}
