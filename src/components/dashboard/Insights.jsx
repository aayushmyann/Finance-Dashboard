import { useApp } from "../../context/AppContext";
import { Card } from "../ui/card";

function Insights() {
  const { transactions } = useApp();

  const expenses = transactions.filter(t => t.type === "expense");
  const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0);

  const categoryMap = {};
  expenses.forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const highest = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0];

  // ✅ THIS WAS MISSING OR BROKEN
  const emiTotal =
    (categoryMap["Bike EMI"] || 0) +
    (categoryMap["Home Loan EMI"] || 0);

  const investmentTotal =
    (categoryMap["SIP Investment"] || 0) +
    (categoryMap["Stock Investment (Upstox)"] || 0);

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-4">
      <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-900 p-4 border border-gray-800">
        <p className="text-gray-400 text-sm">Highest Spending</p>
        <h2 className="text-white font-bold">{highest?.[0]}</h2>
      </Card>

      <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-900 p-4 border border-gray-800">
        <p className="text-gray-400 text-sm">EMI Load</p>
        <h2 className="text-white font-bold">
          {Math.round((emiTotal / totalExpenses) * 100)}%
        </h2>
      </Card>

      <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-900 p-4 border border-gray-800">
        <p className="text-gray-400 text-sm">Investments</p>
        <h2 className="text-white font-bold">₹{investmentTotal}</h2>
      </Card>
    </div>
  );
}
export default Insights;