import { Link, NavLink } from "react-router-dom";


const MainNavbar = () => {
  return (
    <nav className="py-3 bg-[#845ef7]">
      <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-3xl font-bold text-white">Main</Link>
          </div>
          <div>
            <ul className="flex gap-5">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 text-base font-bold border-b-2 border-red-600" : "text-base font-bold text-white"}>Home</NavLink></li>
              <li><NavLink to="/users" className={({ isActive }) => isActive ? "text-red-600 text-base font-bold border-b-2 border-red-600" : "text-base font-bold text-white"}>Users</NavLink></li>
              <li><NavLink to="/allcountries" className={({ isActive }) => isActive ? "text-red-600 text-base font-bold border-b-2 border-red-600" : "text-base font-bold text-white"}>Allcountries</NavLink></li>
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
