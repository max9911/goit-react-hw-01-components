import FriendListItem from './friendsitem';
import css from './friendslist.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
}
