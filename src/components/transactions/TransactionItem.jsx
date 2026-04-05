export default function TransactionItem({ transaction }) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-2 text-white">
      <span>{transaction.category}</span>
      <span>₹{transaction.amount}</span>
    </div>
  );
}