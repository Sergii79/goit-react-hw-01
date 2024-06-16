import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.subject}>
        <tr className={css.wrap}>
          <th className={css.subtitle}>Type</th>
          <th className={css.subtitle}>Amount</th>
          <th className={css.subtitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr className={css.wrap} key={transaction.id}>
            <td className={css.text}>{transaction.type}</td>
            <td className={css.text}>{transaction.amount}</td>
            <td className={css.text}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
