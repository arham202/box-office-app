import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map((data) => (
        <div>
          <ShowCard
            key={data.show.id}
            id = {data.show.id}
            name={data.show.name}
            image={
              data.show.image ? data.show.image.medium : "/image_not_found.png"
            }
            summary = {data.show.summary}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowGrid;
