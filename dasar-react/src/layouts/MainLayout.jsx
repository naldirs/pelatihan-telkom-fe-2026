import { Outlet, Link, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";

export default function MainLayout() {
  const navigate = useNavigate();

  // Definisi struktur menu
  const items = [
    { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
    { label: "Page 1", icon: "pi pi-file", command: () => navigate("/page1") },
    { label: "Page 2", icon: "pi pi-file", command: () => navigate("/page2") },
    {
      label: "Page 3",
      icon: "pi pi-users",
      command: () => navigate("/page3/123/nama"),
    },
    {
      label: "Page 4",
      icon: "pi pi-cog",
      command: () => navigate("/page4?name=Denny&role=admin"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <Menubar model={items} />

      {/* PAGE CONTENT */}
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
