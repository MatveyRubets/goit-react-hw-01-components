import PropTypes from 'prop-types';
import css from '../index.module.css';

const StatisticsItem = stats => {
  const { label, percentage } = stats;
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
