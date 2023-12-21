import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
  ];

  return (
    <div className="navbar bg-sky-200 max-w-7xl mx-auto rounded-2xl shadow-xl my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <CiMenuBurger />
          </button>
          <ul
            // tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((nav) => (
              <li key={nav.path}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-700 bg-purple-400 p-2 font-bold active:scale-95"
                      : "text-white bg-info active:scale-95"
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <p className="btn btn-ghost text-xl">TaskManager</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((nav) => (
            <li key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-700 bg-purple-400 p-2 font-bold active:scale-95"
                    : "text-white bg-info active:scale-95"
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-secondary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;