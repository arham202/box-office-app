const BASE_URL = "https://api.tvmaze.com";

const apiGet = async (queryString) => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();

  return body;
};

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);

export const getShowByID = (showid) =>
  apiGet(`/shows/${showid}?embed[]=seasons&embed[]=cast`);

export const getShowByIDs = async (showids) => {
  const promises = showids.map((showid) => apiGet(`/shows/${showid}`));
  const result = await Promise.all(promises);

  return result;

};
