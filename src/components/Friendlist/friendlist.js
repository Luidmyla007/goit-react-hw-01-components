import PropTypes from 'prop-types';
import { FriendItem } from './friendItem';




export const Friendlist = ({ friends }) => {
  return(
    <ul>
      {friends.map(friend => (
       <li key={friend.id}>
       <FriendItem friend={friend} />
       </li>
      ))}
    </ul>
  );
 };
                  
                  
  Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

