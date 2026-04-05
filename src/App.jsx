import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import TransactionsPage from "./pages/TransactionsPage";
import { useState } from "react";

function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-gray-800 min-h-screen">
      <Sidebar open={open} toggleSidebar={()=>setOpen(!open)} />
      <div className="flex-1 p-6 space-y-6">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/transactions" element={<TransactionsPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </AppProvider>
  );
}