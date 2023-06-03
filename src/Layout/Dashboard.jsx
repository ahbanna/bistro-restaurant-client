import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO
  const isAdmin = true;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#d39f54]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaUtensils></FaUtensils> Add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    {" "}
                    <FaWallet></FaWallet> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendarAlt></FaCalendarAlt>Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart
                    <span className="badge badge-secondary">
                      {cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
