import css from '../index.module.css';
import PropTypes from 'prop-types';

const Stats = ({ username, location, tag, avatar }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Stats.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Stats;
