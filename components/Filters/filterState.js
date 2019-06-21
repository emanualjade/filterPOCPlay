import React, { createContext } from "react";
import Router, { withRouter } from "next/router";
import { defaultFilterState } from "./constants";
export const FilterContext = createContext({});


const setFilterState = filterItemData => {
  const query = {
    ...defaultFilterState,
    ...Router.router.query,
    ...filterItemData
  };

  // TODO: Remove empty values
  Router.push({
    pathname: "/search",
    query
  });
};

const FilterProvider = props => {
  const activeFilterState = { ...defaultFilterState, ...props.router.query };
  return (
    <FilterContext.Provider value={[activeFilterState, setFilterState]}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default withRouter(FilterProvider);
