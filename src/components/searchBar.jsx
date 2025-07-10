import react from "react";

function SearchBar({ userName, setUserName }) {
  // insted of having to set it to a varible I can use a function name call serach bar to call and grab both varibles.
  const onChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div className="searchbar">
      <input
        placeholder="searh"
        type="text"
        onChange={(event) => {
          onChange(event);
        }}
        onKeyUP={(event) => {
          onChange(event);
        }}
        onPaste={(event) => {
          onChange(event);
        }}
      />
    </div>
  );
}
export default SearchBar;
