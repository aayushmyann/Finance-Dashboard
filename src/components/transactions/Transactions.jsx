import TransactionItem from "./TransactionItem";

export default function Transactions({ data }) {
  return (
    <div>
      {data.map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </div>
  );
}