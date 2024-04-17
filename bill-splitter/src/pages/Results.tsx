import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { people, itemAssignments } = location.state as {
    people: { id: number; name: string }[];
    itemAssignments: { [key: number]: number };
  };

  // Here you can render the results based on the people and itemAssignments
  return (
    <div>
      <h1>Bill Results</h1>
      {/* Render the results here */}
    </div>
  );
};

export default Results;
