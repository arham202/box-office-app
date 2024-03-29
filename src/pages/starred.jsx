import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowByID, getShowByIDs } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import { TextCenter } from "../components/common/TextCenter";

const Starred = () => {
  const [starredshowsIds] = useStarredShows();

  const { data: starredshows, error: starredshowsError } = useQuery({
    queryKey: ["starred", starredshowsIds],
    queryFn: () =>
      getShowByIDs(starredshowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if(starredshows?.length === 0){
    return <TextCenter>No shows were starred</TextCenter>
  }

  if (starredshows?.length > 0) {
    return <ShowGrid shows={starredshows} />;
  }

  if(starredshowsError){
    return <div>Error Occured: {starredshowsError.message}</div>
  }

  return <div>Shows are still loading....</div>;
};

export default Starred;
