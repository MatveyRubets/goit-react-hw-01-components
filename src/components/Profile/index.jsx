import css from './index.module.css';

import Stats from './Stats';
import Description from './Description';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <div className={css.profile}>
      <Stats
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <Description stats={stats} />
    </div>
  );
};

export default Profile;
