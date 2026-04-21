import { Outlet, Link } from "react-router-dom";
import Topbar from "../components/Topbar";

export default function MainLayout() {
  return (
    <div className="flex">
      {/* CONTENT */}
      <div className="flex-1">
        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
