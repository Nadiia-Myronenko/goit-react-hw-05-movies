import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import {
  SearchBar,
  SearchForm,
  SearchButton,
  SearchFormInput,
} from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
  const [keyWord, setKeyword] = useState("");

  const handleKeywordChange = (event) => {
    setKeyword(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (keyWord.trim() === "") {
      toast.warn(" Enter something!");
      return;
    }
    onSubmit(keyWord);
    setKeyword("");
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <HiOutlineSearch style={{ height: "2em", width: "2em" }} />
        </SearchButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          name="keyWord"
          placeholder="Search movies"
          value={keyWord}
          onChange={handleKeywordChange}
        />
      </SearchForm>
    </SearchBar>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
