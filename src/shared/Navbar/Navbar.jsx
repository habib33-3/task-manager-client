import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },

    {
      title:"Create New Task",
      path:"/addTask"
    },

    {
      title:"Dashboard",
      path:"/dashboard"
    }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("you are logged out");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
                      ? "text-gray-700 bg-purple-400 p-2 font-bold active:scale-95 my-2"
                      : "text-white bg-info active:scale-95 mx-2"
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
                    ? "text-gray-700 bg-purple-400 p-2 font-bold active:scale-95 mx-2"
                    : "text-white bg-info active:scale-95 mx-2"
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-error"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
