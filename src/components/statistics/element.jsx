import css from './element.module.css';

export default function Element({ id, label, percentage }) {
  return (
    <li key={id} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}
