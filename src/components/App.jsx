import user from './Profile/user';
import { Profile } from './Profile/profile';
import data from './Statistics/data';
import { Statistics } from './Statistics/statistics';
import { Friendlist } from './Friendlist/friendlist';
import friends from './Friendlist/friends';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
   <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    <Statistics title="Upload stats" stats={data}/>
    <Friendlist friends={friends}/>
    </div>
      );
};
