import React, { useContext } from "react";
import { FilterContext } from "./filterState";

import { categoryFilters, distanceFilters } from "./constants";

const DesktopFilters = () => {
  const [filterData, setFilterState] = useContext(FilterContext);

  return (
    <>
      <h3>Desktop filters</h3>
      <div className="filterCard">
        <p>Category</p>
        {categoryFilters.map(item => {
          return (
            <label key={item.label}>
              <input
                type="radio"
                checked={filterData[item.name] === item.value}
                value={item.value}
                onChange={e => {
                  setFilterState({ [item.name]: e.currentTarget.value });
                }}
              />
              {item.label}
            </label>
          );
        })}

        <p>Distance</p>
        {distanceFilters.map(item => {
          return (
            <label key={item.label}>
              <input
                type="radio"
                checked={filterData[item.name] === item.value}
                value={item.value}
                onChange={e => {
                  setFilterState({ [item.name]: e.currentTarget.value });
                }}
              />
              {item.label}
            </label>
          );
        })}
      </div>
    </>
  );
};

export default DesktopFilters;
