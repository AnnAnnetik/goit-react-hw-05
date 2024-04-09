const SearchBar = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    handleSubmit(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
