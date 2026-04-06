import { useApp } from "../../context/AppContext";
import { Card, CardContent } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#6366f1","#22c55e","#f59e0b","#ef4444"];

export default function Charts() {
  const { transactions } = useApp();

  const trend = transactions.map((t,i)=>({name:i,value:t.amount}));

  const expenses = transactions.filter(t=>t.type==="expense");

  const map = {};
  expenses.forEach(t => map[t.category]=(map[t.category]||0)+t.amount);

  const pie = Object.keys(map).map(k=>({name:k,value:map[k]}));

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4 items-start">
      <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-900 border border-gray-800">
        <CardContent className="p-6 flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">
            Spending Trend
          </h2>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line dataKey="value" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-900 border border-gray-800">
        <CardContent className="p-6 flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">
            Category Breakdown
          </h2>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pie} dataKey="value" outerRadius={70}>
                  {pie.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}