import { useState,useEffect} from "react";
import { useSearchStr } from "../lib/useSearchStr";

const SearchForm = ({onSearch}) => {

  const [searchStr, setSeacrhStr] = useSearchStr();
  const [searchOption, setSearchOptions] = useState("shows");

  const onSeacrhInputChange = (ev) => {
    setSeacrhStr(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOptions(ev.target.value);
  };

  const onSubmit = (ev) =>{
    ev.preventDefault();
    
    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };


  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSeacrhInputChange} />

      <label>
        Shows
        <input
          type="radio"
          name="seach-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={onRadioChange}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="seach-option"
          value="actors"
          checked={searchOption === "actors"}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
