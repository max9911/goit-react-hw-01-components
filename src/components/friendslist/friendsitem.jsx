import css from './item.module.css';

export default function Item({ id, avatar, name, isOnline }) {
  return (
    <li key={id} className={css.item}>
      {isOnline === true ? (
        <span className={css.statusOn}></span>
      ) : (
        <span className={css.statusOff}></span>
      )}
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="100"
        height="100"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}
