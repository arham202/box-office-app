import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShowByID } from "../api/tvmaze";

const useShowID = (showid) => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getShowByID(showid);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchdata();
  }, [showid]);

  return { showData, showError };
};

const Show = () => {
  const { showid } = useParams();

  const { showData, showError } = useShowID(showid);

  if (showError) {
    return <div>We have an error:{showError}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is Loading.....</div>;
};

export default Show;
