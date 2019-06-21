import React, { createContext, useState, useEffect, useRef } from "react";
import Router, { withRouter } from "next/router";
import isEqual from "lodash/isEqual";
import { defaultFilterState } from "./constants";

export const TempFilterContext = createContext({});

const TempFilterProvider = props => {
  const activeFilterState = { ...defaultFilterState, ...props.router.query };
  const [tempFilterState, setTheTempFilterState] = useState(activeFilterState);

  useEffect(() => {
    if (isEqual(previousActiveFilterState.current, activeFilterState)) {
      return;
    }
    setTempFilterState(activeFilterState);
  });

  const previousActiveFilterState = useRef();
  useEffect(() => {
    previousActiveFilterState.current = activeFilterState;
  });

  const setTempFilterState = partialState =>
    setTheTempFilterState({ ...tempFilterState, ...partialState });

  const submitTempFilters = () => {
    Router.push({
      pathname: "/search",
      query: tempFilterState
    });
  };

  const cancelTempFilters = () => {
    setTempFilterState(activeFilterState);
  };

  const resetTempFilters = () => {
    setTempFilterState(defaultFilterState);
    Router.push({
      pathname: "/search",
      query: defaultFilterState
    });
  };

  return (
    <TempFilterContext.Provider
      value={[
        tempFilterState,
        setTempFilterState,
        submitTempFilters,
        cancelTempFilters,
        resetTempFilters
      ]}
    >
      {props.children}
    </TempFilterContext.Provider>
  );
};

export default withRouter(TempFilterProvider);
