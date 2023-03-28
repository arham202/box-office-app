import ActorCard from "./ActorCard";

const ActorGrid = ({actor}) => {
  return (
    <div>
      {actor.map((data) => (
        <div key={data.person.id}>
          <ActorCard
            key={data.person.id}
            name={data.person.name}
            country = {data.person.country ? data.person.country.name : null}
            birthday = {data.person.birthday}
            deathday = {data.person.deathday}
            gender = {data.person.gender}
            image={
              data.person.image ? data.person.image.medium : "/image_not_found.png"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ActorGrid;
