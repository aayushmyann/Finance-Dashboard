import { useApp } from "../../context/AppContext";

export default function Topbar() {
  const { role, setRole } = useApp();

  return (
    <div className="flex justify-between mb-4">
      <h1 className="text-white text-xl">Dashboard</h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-gray-800 text-white"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}