import Topbar from "../components/layout/Topbar";
import SummaryCards from "../components/dashboard/SummaryCards";
import Insights from "../components/dashboard/Insights";
import Charts from "../components/dashboard/Charts";

export default function Dashboard() {
  return (
    <>
      <Topbar/>
      <SummaryCards/>
      <Insights/>
      <Charts/>
    </>
  );
}