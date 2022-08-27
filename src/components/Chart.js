import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = (props) => {
  // create variable "over" with all the cars whose horsepower is >= 200
  // create variable "under" with all the cars whose horsepower is < 200

  return (
    <div style={{ height: "100%" }}>
      <PieChart
        style={{ width: "200px" }}
        // replace the "value" values with our "over" and "under" variables.
        data={[
          { title: "Over", value: 16, color: "#C13C37" },
          { title: "Under", value: 4, color: "#E38627" },
        ]}
        label={({ dataEntry }) => dataEntry.value}
        labelStyle={{
          fill: "white",
          fontSize: "small",
        }}
      />
      <Legend />
    </div>
  );
};

function Legend() {
  return (
    <h6>
      Horsepower: &nbsp;
      <span style={{ background: "#C13C37" }}>&nbsp; &nbsp; &nbsp;</span>
      &nbsp;
      <span>Over 200</span>
      &nbsp;
      <span style={{ background: "#E38627" }}>&nbsp; &nbsp; &nbsp;</span>
      &nbsp;
      <span>Under 200</span>
    </h6>
  );
}

export default Chart;
