import React, { useState } from "react";
import { useSpotify } from "../../context/spotifyProvider";

export default function SearchInput() {
  const { search } = useSpotify();

  const [keyWord, setKeyWord] = useState(null);

  const handleTermChange = (event) => {
    setKeyWord(event.target.value);
  };
  const handleSearch = () => {
    if (Boolean(keyWord)) search(keyWord);
  };

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        onChange={handleTermChange}
        className="w-full px-10 py-5 text-lg text-black     border-gray-800 focus:border-white transition-border duration-100 outline-none rounded-full"
      />
      <div className="flex justify-center mt-10">
        <button onClick={handleSearch} className="secondary-button ">
          Search
        </button>
      </div>
    </div>
  );
}
