import css from './string.module.css';

export default function String(props) {
  return (
    <tr className={props.idx % 2 ? css.white : css.blue}>
      <td className={css.cell}>{props.type}</td>
      <td className={css.cell}>{props.amount}</td>
      <td className={css.cell}>{props.currency}</td>
    </tr>
  );
}
