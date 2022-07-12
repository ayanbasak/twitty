import React from "react";
import { SSearch, SSearchIcon } from "../../styles/home/SearchBox.styles";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <SSearch>
      <SSearchIcon>
        <FiSearch />
      </SSearchIcon>
      <input placeholder="Search Twitty" />
    </SSearch>
  );
};

export default SearchBox;
