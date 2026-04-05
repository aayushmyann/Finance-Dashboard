import { useApp } from "../../context/AppContext";
import StatCard from "./StatCard";
import { DollarSign, TrendingUp, CreditCard } from "lucide-react";

export default function SummaryCards() {
  const { transactions } = useApp();

  const income = transactions.filter(t => t.type === "income")
    .reduce((a,b)=>a+b.amount,0);

  const expenses = transactions.filter(t => t.type === "expense")
    .reduce((a,b)=>a+b.amount,0);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StatCard icon={<DollarSign />} label="Balance" value={income-expenses}/>
      <StatCard icon={<TrendingUp />} label="Income" value={income}/>
      <StatCard icon={<CreditCard />} label="Expenses" value={expenses}/>
    </div>
  );
}