import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { selectUser, userLogout } from "../../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [links, setLinks] = useState([
    {
      name: "Home",
      link: "/",
      id: 1,
    },
    {
      name: "Login",
      link: "/auth/login",
      id: 2,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const { cartList = [] } = useSelector((state) => state.cart);
  const userData = useSelector(selectUser);
  const handleLogout = (link) => {
    if (link.name !== "Logout") {
      return;
    }
    dispatch(userLogout());
  };
  useEffect(() => {
    if (userData.email) {
      setLinks([
        {
          name: "Home",
          link: "/",
          id: 1,
        },
        {
          name: "Logout",
          link: "/",
          id: 2,
        },
      ]);
    }
    if (!userData.email) {
      setLinks([
        {
          name: "Home",
          link: "/",
          id: 1,
        },
        {
          name: "Login",
          link: "/auth/login",
          id: 2,
        },
      ]);
    }
  }, [userData]);

  const totalCartCount = cartList.reduce(
    (acc, value) => (acc += value.count),
    0
  );

  return (
    <section className="shadow-md w-full left-0">
      <header className="bg-black md:px-10  py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <h1 className="text-white font-semibold text-2xl">Baggit</h1>
        </div>

        <div
          className="w-7 h-7 text-white absolute right-8 top-6 md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12 bg-black" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => handleLogout(link)}
              className="font-semibold my-7 md:my-0 md:ml-8"
            >
              <Link className="text-white" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
          <Link to={"/user/cartPage"}>
            {" "}
            <button className="py-1 px-3 md:ml-8 md:static">
              <i
                className="fa-solid fa-cart-shopping fa-lg"
                style={{ color: "white" }}
              ></i>
              <span className="text-white items-center font-semibold ml-1">
                {totalCartCount}
              </span>
            </button>
          </Link>
        </ul>
      </header>
    </section>
  );
};

export default Header;
