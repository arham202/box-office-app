const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in Total : {seasons.length} </p>
      <p>
        Episodes in total :{" "}
        {seasons.reduce((sum, seasons) => sum + seasons.episodeOrder, 0)}
      </p>
      <div>
        {seasons.map((seasons) => (
          <div key={seasons.id}>
            <p>Season: {seasons.number}</p>
            <p>Episodes: {seasons.episodeOrder} </p>
            <div>
              Aired : {seasons.premiereDate} - {seasons.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
