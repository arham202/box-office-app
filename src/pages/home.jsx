import { useState } from "react";

const Home = () => {
  const [seacrhStr, setSeacrhStr] = useState("");

  const onSeacrhInputChange = (ev) => {
    setSeacrhStr(ev.target.value);
  };

  const onSeacrh = async (ev) => {
    ev.preventDefault();
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${seacrhStr}`
    );
    const body = await response.json();

  };

  // https://api.tvmaze.com/search/shows?q=girls

  return (
    <div>
      <form onSubmit={onSeacrh}>
        <input type="text" value={seacrhStr} onChange={onSeacrhInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
