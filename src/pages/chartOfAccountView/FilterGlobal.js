import React from "react";

export default function FilterGlobal({filter, setFilter}) {
  return (
    <span>
      Search 
      <input
        type="text"
        value={filter || ""}
        onChange={(e) => {
            setFilter(e.target.value);
        }}
      />
    </span>
  );
}
