import React from 'react';

const StatisticsItem = stats => {
  const { label, percentage } = stats;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default StatisticsItem;
