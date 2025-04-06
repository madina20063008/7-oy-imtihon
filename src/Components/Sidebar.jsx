import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import home2 from '../assets/home2.png';
import teacher from '../assets/teacher.png';
import bank from '../assets/bank.png';
import settings from '../assets/settings.png';
import chart from '../assets/chart.png';

function Sidebar() {
  const navigate = useNavigate();

  

  const linkStyle = ({ isActive }) =>
    `block py-2 px-4 rounded flex items-center ${
      isActive ? 'bg-[#509CDB]' : 'hover:bg-[#509CDB]'
    }`;

  return (
    <aside className="w-64 bg-[#152259] text-white p-4 min-h-screen">
      <div className="mb-[26px]">
        <img src={logo} alt="Udemy Logo" className="w-[65px] mx-auto" />
        <p className="text-sm mt-[22px] text-center">Udemy Inter. school</p>
      </div>

      <nav className="space-y-1">
        <NavLink to="/dashboard" className={linkStyle}>
          <img src={home2} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Dashboard
        </NavLink>

        <NavLink to="/teachers" className={linkStyle}>
          <img src={home2} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Teachers
        </NavLink>

        <NavLink to="/students" className={linkStyle}>
          <img src={teacher} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Students
        </NavLink>

        <NavLink to="/billing" className={linkStyle}>
          <img src={bank} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Billing
        </NavLink>

        <NavLink to="/settings" className={linkStyle}>
          <img src={settings} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Settings and profile
        </NavLink>

        <NavLink to="/exams" className={linkStyle}>
          <img src={chart} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Exams
        </NavLink>

        <NavLink to="/features" className={`${linkStyle({ isActive: false })}` }>
          <img src={bank} alt="" className="w-[16px] h-[16px] mt-1 mr-2" />
          Features
          <span className="text-xs bg-[#B9D7F1] text-black rounded py-1 px-4 ml-4 rounded-[20px]">
            NEW
          </span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
