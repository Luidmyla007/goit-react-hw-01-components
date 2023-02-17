import PropTypes from 'prop-types';
import css from './friendlist.module.css';

export const FriendItem = ({friend: {isOnline, avatar, name} }) => {
    return (
        <div className={css.friendItem}>  
            {isOnline ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )}
         <img src={avatar} alt={name} width="48"/>
         <p>{name}</p>
        </div>
    );
};



FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};