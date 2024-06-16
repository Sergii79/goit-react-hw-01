import css from "../FriendList/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = [css.desc];
  if (isOnline) {
    statusClasses.push(css.online);
  } else {
    statusClasses.push(css.offline);
  }
  return (
    <div>
      <img src={avatar} alt="Avatar" width="148" />
      <p className={css.subject}>{name}</p>
      <p className={statusClasses.join(" ")}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
