import String from './string';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ data }) {
  return (
    <table className={css.history}>
      <thead>
        <tr className={css.tNames}>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <String
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            idx={idx}
          ></String>
        ))}
      </tbody>
    </table>
  );
}
