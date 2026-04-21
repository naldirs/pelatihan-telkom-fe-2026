import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

function Topbar() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleAuthClick = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
  ];

  const start = (
    <div className="flex align-items-center gap-2">
      <i className="pi pi-shop text-xl"></i>
      <span className="font-bold text-lg">MyStore</span>
    </div>
  );

  const end = (
    <div className="flex align-items-center gap-3">
      {user && (
        <span className="text-sm">Hi, {user.firstName || user.username}</span>
      )}

      <i
        title={user ? "Logout" : "Login"}
        className={`pi ${user ? "pi-sign-out" : "pi-user"} cursor-pointer`}
        onClick={handleAuthClick}
      ></i>
    </div>
  );

  return (
    <div className="shadow-2">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}

export default Topbar;
