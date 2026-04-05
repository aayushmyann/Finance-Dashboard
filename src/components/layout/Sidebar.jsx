import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar({ open, toggleSidebar }) {
  return (
    <div className={`${open ? "w-60" : "w-16"} transition-all duration-300 min-h-screen bg-gray-900 p-4 border-r border-gray-800`}>
      <div className={`flex items-center mb-6 ${open ? "justify-between" : "justify-center"}`}>
        {open && <h2 className="text-white font-bold">Finance</h2>}
        <button onClick={toggleSidebar} className="text-white">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        <NavItem to="/" label="Dashboard" open={open} />
        <NavItem to="/transactions" label="Transactions" open={open} />
      </nav>
    </div>
  );
}

function NavItem({ to, label, open }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
      }
    >
      {open ? label : label.charAt(0)}
    </NavLink>
  );
}