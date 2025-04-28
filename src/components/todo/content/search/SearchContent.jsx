import React from "react";
import { SearchInput } from "../../../input/MyInput";
import { CiCirclePlus } from "react-icons/ci";
import "./SearchContent.scss";

const SearchContent = () => {
  return (
    <>
      <div className="search-container">
        <SearchInput />
        <CiCirclePlus />
      </div>
      <hr />
    </>
  );
};

export default SearchContent;
