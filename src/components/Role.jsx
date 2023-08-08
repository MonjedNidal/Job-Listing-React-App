import React, { useContext } from "react";
import { FiltersContext } from "../App";
function Role({ text }) {
  const { handleFilterAdded } = useContext(FiltersContext);
  return (
    <span
      className="role"
      onClick={() => {
        handleFilterAdded(text);
      }}
    >
      {text}
    </span>
  );
}

export default Role;
