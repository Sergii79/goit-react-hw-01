import css from "../FriendList/FriendList.module.css";
import FriendListItem from "../FriendList/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li className={css.list} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
