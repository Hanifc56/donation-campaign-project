import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="lg:max-w-7xl mx-auto mt-7  navbar bg-transparent absolute lg:left-16 lg:right-16 ">
        <div className="flex-1">
          <img src="/public/Logo.png" alt="" className="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/donation">
              <li>
                <a>Donation</a>
              </li>
            </NavLink>
            <NavLink to="/Statistics">
              <li>
                <a>Statistics</a>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
