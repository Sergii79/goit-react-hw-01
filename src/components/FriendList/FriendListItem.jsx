const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="148" />
      <p>{name}</p>
      <p>{isOnline === true ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
