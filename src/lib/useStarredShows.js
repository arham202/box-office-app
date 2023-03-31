import { useEffect, useReducer } from "react";

const usePresistentReducer = (reducer, initialState, localStorageKey) => {
    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
      const presistedValue = localStorage.getItem(localStorageKey);
      return presistedValue ? JSON.parse(presistedValue) : initial;
    });
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);
  
    return [state, dispatch];
  };
  
  const starredShowsReducer = (currentStarred, action) => {
    switch (action.type) {
      case "STAR":
        return currentStarred.concat(action.showid);
      case "UNSTAR":
        return currentStarred.filter((showid) => showid !== action.showid);
      default:
        return currentStarred;
    }
  };

  export const useStarredShows= ()=>{
    return usePresistentReducer(
        starredShowsReducer,
        [],
        "starredshows"
      );
  }