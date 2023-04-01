import styled from "styled-components";

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>Seasons in Total : {seasons.length} </p>
      <p>
        Episodes in total :{" "}
        {seasons.reduce((sum, seasons) => sum + seasons.episodeOrder, 0)}
      </p>
      <SeasonList>
        {seasons.map((seasons) => (
          <div key={seasons.id} className="season-item">
            <div className="left">
            <p>Season: {seasons.number}</p>
            <p>Episodes: {seasons.episodeOrder} </p>
            </div>
            <div className="right">
              Aired: <strong>{seasons.premiereDate} - {seasons.endDate}</strong> 
            </div>
          </div>
        ))}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
