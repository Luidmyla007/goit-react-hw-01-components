import PropTypes from 'prop-types';
import css from "./profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profileBox}>
            <div className={css.profileDescription}>
                <img className={css.profileImage}
                    src={avatar}
                    alt={tag}
                    width="330"                    
                />
                <p className={css.userName}>{username}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.userList}>
                <li >
                    <span className={css.userPublicity}>Followers</span>
                    <span className={css.userPublicityCalc}>{stats.followers}</span>
                </li>
                <li >
                    <span className={css.userPublicity}>Views</span>
                    <span className={css.userPublicityCalc}>{stats.views}</span>
                </li>
                <li >
                    <span className={css.userPublicity}>Likes</span>
                    <span className={css.userPublicityCalc}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

