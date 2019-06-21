export const defaultFilterState = {
  keyword: "",
  address: "",
  category: "ALL",
  distance: "25_MILES"
};

export const categoryFilters = [
  {
    name: "category",
    value: "ALL",
    label: "All"
  },
  {
    name: "category",
    value: "PROGRAMMING",
    label: "Programming"
  },
  {
    name: "category",
    value: "DRIVING",
    label: "Driving"
  }
];

export const distanceFilters = [
  {
    name: "distance",
    value: "ANY_DISTANCE",
    label: "Any distance"
  },
  {
    name: "distance",
    value: "25_MILES",
    label: "Within 25 miles"
  },
  {
    name: "distance",
    value: "50_MILES",
    label: "Within 50 miles"
  }
];
