import { useParams } from "react-router-dom";
import { getShowByID } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";

const Show = () => {
  const { showid } = useParams();

  const {data:showData,error:showError} = useQuery({
    queryKey: ["show", showid],
    queryFn: () => getShowByID(showid),
  });


  if (showError) {
    return <div>We have an error:{showError}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is Loading.....</div>;
};

export default Show;
