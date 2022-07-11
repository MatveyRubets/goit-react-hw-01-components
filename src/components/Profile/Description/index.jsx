import css from '../index.module.css';
import PropTypes from 'prop-types';

const Description = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}> {stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}> {stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}> {stats.likes}</span>
      </li>
    </ul>
  );
};

Description.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Description;
