import React, { useContext } from "react";

import { FilterContext } from "./filterState";
import { TempFilterContext } from "./tempFilterState";

const Search = () => {
  const [filterData, setFilterState] = useContext(FilterContext);
  const [tempFilterState, setTempFilterState, submitTempFilters] = useContext(
    TempFilterContext
  );

  return (
    <div className="search">
      <input
        className="search__keyword-input"
        type="text"
        placeholder="Keyword search"
        onChange={e => setTempFilterState({ keyword: e.currentTarget.value })}
        value={tempFilterState.keyword}
      />

      <input
        className="search__address-input"
        type="text"
        placeholder="Address"
        onChange={e => setFilterState({ address: e.currentTarget.value })}
        value={filterData.address}
      />

      <button onClick={submitTempFilters} className="search__submit">
        Search
      </button>
    </div>
  );
};

export default Search;
