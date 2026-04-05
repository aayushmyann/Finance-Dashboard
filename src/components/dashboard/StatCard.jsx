import { Card, CardContent } from "../ui/card";
export default function StatCard({ icon, label, value }) {
  return (
    <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gray-900 border border-gray-800">
      <CardContent className="flex gap-3 p-4">
        {icon}
        <div>
          <p className="text-gray-400">{label}</p>
          <h2 className="text-white font-bold">₹{value}</h2>
        </div>
      </CardContent>
    </Card>
  );
}