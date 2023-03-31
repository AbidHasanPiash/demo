import React from "react";

export default function FilterColumn({column}) {
    const {filterValue, setFilter} = column;
  return (
    <span>
      Search 
      <input
        type="text"
        value={filterValue || ""}
        onChange={(e) => {
            setFilter(e.target.value);
        }}
      />
    </span>
  );
}
