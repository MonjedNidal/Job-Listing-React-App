import ClosableFilter from "./ClosableFilter";

function FiltersSection({ filtersArray, handleClearFilters }) {
  return (
    <div className="filtersSection d-flex justify-content-between ">
      <div className="filters row gap-2">
        {filtersArray.map((filter) => (
          <ClosableFilter filterName={filter} />
        ))}
      </div>
      {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          className="align-self-center"
          onClick={() => {
            handleClearFilters();
          }}
        >
          Clear
        </a>
      }
    </div>
  );
}

export default FiltersSection;
