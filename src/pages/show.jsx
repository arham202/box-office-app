import { useParams } from "react-router-dom";
import { getShowByID } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";

const Show = () => {

  const { showid } = useParams();
  const { data: showData, error} = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getShowByID(showid),
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.log("Error has been caught");
    return <div>We have an error: {error.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons}/>
        </div>
        <div>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast}/>
        </div>
      </div>
    );
  }

  return <div>Data is Loading</div>;

};

export default Show;
