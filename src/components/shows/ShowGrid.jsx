import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";
import { FlexGrid } from "../common/FlexGrid";



const ShowGrid = ({ shows }) => {
  
  const [starredshows,dispatchStarred] = useStarredShows();

  console.log(starredshows);

  const onStarMeClick = (showid) => {
    const isStarred = starredshows.includes(showid);

    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showid });
    } else {
      dispatchStarred({ type: "STAR", showid });
    }
  };

  return (
    <FlexGrid>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : "/image_not_found.png"
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredshows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
