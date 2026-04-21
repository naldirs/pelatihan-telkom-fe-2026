import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigate('/')
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
      <i title="Login" className="pi pi-user cursor-pointer hover:text-blue-500 transition-all" onClick={() => navigate('/login')}
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