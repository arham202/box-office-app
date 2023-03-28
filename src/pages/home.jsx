import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmaze";
import ActorGrid from "../components/actors/ActorGrid";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";

const Home = () => {
  const [apiData, setapiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setapiDataError(null);

      let result;

      if (searchOption === "shows") {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setapiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actor={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );

};

export default Home;
