import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const clickHandler = () => {
    fetchData();
  };
  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex items-center  flex-col gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">  Random {tag} Gif</h1>

      {loading ? <Spinner /> : <img src={gif} alt="gif" />}

      <input
        type="text"
        className="bg-white w-10/12 p-2 rounded-lg text-xl mb-[20px] text-center"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button
        onClick={clickHandler}
        className="bg-white w-10/12 p-2 rounded-lg text-xl mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
