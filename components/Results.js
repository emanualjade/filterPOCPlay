import React, { useContext } from "react";
import { FilterContext } from "./Filters/filterState";
import { jobData } from "../jobData";

const Results = () => {
  const [filterData] = useContext(FilterContext);

  const byKeyword = data => {
    return data.title.toLowerCase().includes(filterData.keyword.toLowerCase());
  };
  const byAddress = data => {
    return data.address
      .toLowerCase()
      .includes(filterData.address.toLowerCase());
  };
  const byCategory = data => {
    if (filterData.category === "ALL") return true;
    return data.category
      .toLowerCase()
      .includes(filterData.category.toLowerCase());
  };

  const byDistance = data => {
    if (filterData.distance === "ANY_DISTANCE") return true;
    if (filterData.distance === "50_MILES") return true;
    return data.distance
      .toLowerCase()
      .includes(filterData.distance.toLowerCase());
  };

  const filteredJobs = jobData
    .filter(byKeyword)
    .filter(byAddress)
    .filter(byCategory)
    .filter(byDistance);

  return (
    <div>
      <h3>Found {filteredJobs.length} Jobs</h3>

      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0"
        }}
      >
        {filteredJobs.map(job => (
          <li
            key={job.title}
            style={{
              borderBottom: "1px solid #efefef",
              paddingBottom: "15px"
            }}
          >
            <h3 style={{ marginBottom: "0" }}>{job.title}</h3>
            <p style={{ marginTop: "4px", marginBottom: "4px" }}>
              Location: {job.address}
            </p>
            <p style={{ marginTop: "4px", marginBottom: "4px" }}>
              Distance: {job.distance}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
