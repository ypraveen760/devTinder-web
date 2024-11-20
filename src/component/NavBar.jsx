import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TraderCircle</a>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <p className="mr-2">
            Welcome, {user.firstName[0].toUpperCase() + user.firstName.slice(1)}
          </p>
          <div className="dropdown dropdown-end mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img alt="Tailwind CSS Navbar component" src={user.photo} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
