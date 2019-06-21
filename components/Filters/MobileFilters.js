import React, { useContext } from "react";
import { TempFilterContext } from "./tempFilterState";

import { categoryFilters, distanceFilters } from "./constants";

const MobileFilters = () => {
  const [
    tempFilterState,
    setTempFilterState,
    submitTempFilters,
    cancelTempFilters,
    resetTempFilters
  ] = useContext(TempFilterContext);

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
                checked={tempFilterState[item.name] === item.value}
                value={item.value}
                onChange={e => {
                  setTempFilterState({ [item.name]: e.currentTarget.value });
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
                checked={tempFilterState[item.name] === item.value}
                value={item.value}
                onChange={e => {
                  setTempFilterState({ [item.name]: e.currentTarget.value });
                }}
              />
              {item.label}
            </label>
          );
        })}
      </div>
      <div>
        <button onClick={submitTempFilters}>Submit</button>
        <button onClick={cancelTempFilters}>Cancel</button>
        <button onClick={resetTempFilters}>Reset</button>
      </div>
    </>
  );
};

export default MobileFilters;
