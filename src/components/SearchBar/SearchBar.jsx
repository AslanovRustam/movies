import s from "./searchBar.module.css";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter a movie title"
        value={value}
        onChange={onChange}
      />
      <button className={s.btn} type="submit" aria-label="Search"></button>
    </form>
  );
};

export default SearchBar;
