import { useContext } from "react";
import RemoveSVG from "../images/icon-remove.svg";
import { FiltersContext } from "../App";

function ClosableFilter({ filterName }) {
  const { handleFilterRemoved } = useContext(FiltersContext);

  return (
    <div className="closableFilter d-flex col">
      <div className="closableFilterText">{filterName}</div>
      <div
        onClick={() => {
          handleFilterRemoved(filterName);
        }}
        className="removeIcon d-flex justify-content-center align-items-center"
      >
        <img src={RemoveSVG} alt="" />
      </div>
    </div>
  );
}

export default ClosableFilter;
