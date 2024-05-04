import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync, reset } from "../features/authSlice";
// import { getProductAsync } from "../features/productSlice";

const AdminBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }

  //   // dispatch(getProductAsync());
  // }, [user, dispatch, navigate]);

  const handleLogout = async () => {
    if (user && user.token) {
      dispatch(logoutUserAsync());
      dispatch(reset());
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (event) => {
    if (
      !menuRef.current.contains(event.target) &&
      event.target !== menuButtonRef.current
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        {/* ---------------- NAVBAR ---------------- */}
        <nav className="bg-white border-b border-gray-200 shadow-md px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            {/* ---------------- NAVBAR - LEFT ---------------- */}
            <div className="flex justify-start items-center">
              <button
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleSidebar}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    fillRule="evenodd"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>

              <Link
                to="/admin"
                className="hidden sm:flex items-center justify-between mr-4"
              >
                <img
                  className="w-10 mr-3 rounded-full"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/WhatsApp_Image_2024-04-27_at_12.11.46_AM.jpg?v=1714497650"
                  alt=""
                />
                <span className="playfair self-center text-2xl tracking-wide font-semibold whitespace-nowrap dark:text-white">
                  For Your Beauty
                </span>
              </Link>
            </div>

            {/* ---------------- NAVBAR - RIGHT ---------------- */}
            <div className="flex items-center gap-2 lg:order-2">
              <button
                onClick={handleThemeChange}
                className=" text-gray-800 dark:text-white px-3 py-2.5 rounded-lg"
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button>

              <div className="relative inline-block text-left">
                <div>
                  <button
                    aria-expanded={isMenuOpen}
                    aria-haspopup="true"
                    className="inline-flex justify-center items-center gap-x-1.5 rounded-full bg-gray-100 h-9 w-9 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 capitalize"
                    id="menu-button"
                    type="button"
                    onClick={toggleMenu}
                    ref={menuButtonRef}
                  >
                    {user?.name[0]}
                  </button>
                </div>
                <div
                  aria-labelledby="menu-button"
                  aria-orientation="vertical"
                  className={`${
                    isMenuOpen ? "" : "hidden"
                  } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  tabIndex="-1"
                  ref={menuRef}
                >
                  <div className="py-1" role="none">
                    <form action="#" method="POST" role="none">
                      <button
                        onClick={handleLogout}
                        to="/"
                        className="text-red-700 block w-full px-4 py-2 text-left text-sm"
                        id="menu-item-3"
                        role="menuitem"
                        tabIndex="-1"
                        type="submit"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* ---------------- SIDEBAR ---------------- */}
        <aside
          aria-label="Sidenav"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="overflow-y-auto py-5 px-0 h-full bg-white dark:bg-gray-800">
            <ul className=" mt-7">
              {/* DASHBOARD */}
              <li>
                <Link
                  to="/admin"
                  className={`h-14 pl-4 flex items-center p-2 text-base font-medium ${
                    location.pathname === "/admin"
                      ? "bg-[#EC72AF] text-white dark:bg-gray-600 dark:text-gray-100 "
                      : "bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-100"
                  } group`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group_2.png?v=1714764665"
                      alt="side_bar_img"
                    />
                  ) : (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group_2_f53d1e2b-c0e9-479b-91de-4a7452aaa325.png?v=1714764984"
                      alt="side_bar_img"
                    />
                  )}
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              {/* ALL PRODUCTS */}
              <li>
                <Link
                  to="/admin/all_product"
                  className={`h-14 pl-4 border-t flex items-center p-2 text-base font-medium ${
                    location.pathname === "/admin/all_product"
                      ? "bg-[#EC72AF] text-white dark:bg-gray-600 dark:text-gray-100 dark:border-gray-400"
                      : "bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100"
                  } group`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group-2.png?v=1714764664"
                      alt="side_bar_img"
                    />
                  ) : (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/image_2.png?v=1714764984"
                      alt="side_bar_img"
                    />
                  )}
                  <span className="ml-3">All Products</span>
                </Link>
              </li>

              {/* ADD PRODUCTS */}
              <li>
                <Link
                  to="/admin/create_product"
                  className={`h-14 pl-4 border-t flex items-center p-2 text-base font-medium ${
                    location.pathname === "/admin/create_product"
                      ? "bg-[#EC72AF] text-white dark:bg-gray-600 dark:text-gray-100 dark:border-gray-400"
                      : "bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100"
                  } group`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group-3.png?v=1714764665"
                      alt="side_bar_img"
                    />
                  ) : (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/image_3.png?v=1714764984"
                      alt="side_bar_img"
                    />
                  )}
                  <span className="ml-3">Add Product</span>
                </Link>
              </li>

              {/* VIEW ORDER */}
              <li>
                <Link
                  to="/admin/view_orders"
                  className={`h-14 pl-4 border-t flex items-center p-2 text-base font-medium ${
                    location.pathname === "/admin/view_orders"
                      ? "bg-[#EC72AF] text-white dark:bg-gray-600 dark:text-gray-100 dark:border-gray-400"
                      : "bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100"
                  } group`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group-1.png?v=1714764665"
                      alt="side_bar_img"
                    />
                  ) : (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/image_4.png?v=1714764984"
                      alt="side_bar_img"
                    />
                  )}
                  <span className="ml-3">View Orders</span>
                </Link>
              </li>

              {/* CREATE COUPON */}
              <li>
                <Link
                  to="/admin/create_coupon"
                  className={`h-14 pl-4 border-t flex items-center p-2 text-base font-medium ${
                    location.pathname === "/admin/create_coupon"
                      ? "bg-[#EC72AF] text-white dark:bg-gray-600 dark:text-gray-100 dark:border-gray-400"
                      : "bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100"
                  } group`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group_c04055e3-0578-40f8-87cc-8b38533fe552.png?v=1714764665"
                      alt="side_bar_img"
                    />
                  ) : (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/image_5.png?v=1714764984"
                      alt="side_bar_img"
                    />
                  )}
                  <span className="ml-3">Create Coupon</span>
                </Link>
              </li>

              {/* REVIEWS */}
              <li>
                <Link
                  to="/admin/reviews"
                  className={`h-14 pl-4 border-t flex items-center p-2 text-base font-medium ${
                    location.pathname === "/admin/reviews"
                      ? "bg-[#EC72AF] text-white dark:bg-gray-600 dark:text-gray-100 dark:border-gray-400"
                      : "bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100"
                  } group`}
                >
                  {theme === "dark" ? (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Mask_group_c04055e3-0578-40f8-87cc-8b38533fe552.png?v=1714764665"
                      alt="side_bar_img"
                    />
                  ) : (
                    <img
                      className="w-5"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/image_5.png?v=1714764984"
                      alt="side_bar_img"
                    />
                  )}
                  <span className="ml-3">Reviews</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
            <a
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </aside>
        {/* ---------------- DASHBOARD ---------------- */}
        <main className="md:ml-64 h-auto pt-[4.0rem] bg-gray-200 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminBody;
