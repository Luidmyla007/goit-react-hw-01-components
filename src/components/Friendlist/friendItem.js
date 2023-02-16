

export const FriendItem = ({friend: {avatar, name} }) => {
    return (
        <div>        
         <img src={avatar} alt={name} width="48"/>
         <p>{name}</p>
        </div>
    );
};