import React from "react";
import Videos from "./Videos";

const Workouts: React.FC = () => {
  return (
    <div>
      <h1>Workouts</h1>
      <div className="workouts-page">
        <Videos />
      </div>
    </div>
  );
};

export default Workouts;
