import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="lg:max-w-7xl mx-auto mt-7  navbar bg-transparent absolute lg:left-16 lg:right-16 ">
        <div className="flex-1">
          <img src="/public/Logo.png" alt="" className="" />
        </div>
        <div className="flex-none">
          <ul className=" menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="px-12">
              <NavLink to="/donation">Donation</NavLink>
            </li>

            <li>
              <NavLink to="/Statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
