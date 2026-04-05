import { useState } from "react";
import { useApp } from "../context/AppContext";
import { categorizeTransaction } from "../utils/helpers";
import Transactions from "../components/transactions/Transactions";

export default function TransactionsPage() {
  const { transactions } = useApp();
  const [filter, setFilter] = useState("all");

  const categorize = (t) => {
    if (t.type==="income") return "income";
    if (["Netflix","Amazon Prime","Spotify"].includes(t.category)) return "entertainment";
    if (["Bike EMI","Home Loan EMI"].includes(t.category)) return "emis";
    if (["SIP Investment","Stock Investment (Upstox)"].includes(t.category)) return "investments";
    if (["Groceries","Dining"].includes(t.category)) return "lifestyle";
    return "misc";
  };

  const filtered = transactions.filter(t=>filter==="all" || categorize(t)===filter);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {["all","entertainment","investments","emis","lifestyle","misc"].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} className="bg-gray-700 text-white px-2">
            {f}
          </button>
        ))}
      </div>

      <Transactions data={filtered} />
    </div>
  );
}