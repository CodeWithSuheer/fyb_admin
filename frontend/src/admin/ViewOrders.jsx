import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    name: "Suheer",
    userId: "8923023",
    phone: "03123516584",
    amount: "6650",
    order_progress: "Dispatach",
  },
  {
    name: "Haris",
    userId: "8923023",
    phone: "03123516584",
    amount: "6650",
    order_progress: "Dispatach",
  },
  {
    name: "Umer",
    userId: "8923023",
    phone: "03123516584",
    amount: "6650",
    order_progress: "Dispatach",
  },
  {
    name: "Suheer",
    userId: "8923023",
    phone: "03123516584",
    amount: "6650",
    order_progress: "Dispatach",
  },
];

const ViewOrders = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOrderDetails = (id) => {
    navigate(`/admin/orderDetail/${id}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="bg-[#E5E5E5] dark:bg-gray-900 min-h-screen py-8 sm:py-10">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-200">
            View Orders
          </h2>

          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label className="sr-only" htmlFor="simple-search">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      id="simple-search"
                      placeholder="Search"
                      required
                      type="text"
                    />
                  </div>
                </form>
              </div>

              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                {/* DROPDOWN */}
                <div ref={dropdownRef} className="relative">
                  <button
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    id="filterDropdownButton"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    Sort By
                    <svg
                      aria-hidden="true"
                      className={`-mr-1 ml-1.5 w-5 h-5 transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div
                      className="absolute right-0 mt-3 w-48 py-3 bg-white rounded-lg shadow-lg dark:bg-gray-700"
                      id="filterDropdown"
                    >
                      <ul
                        aria-labelledby="filterDropdownButton"
                        className="text-sm"
                      >
                        <li className="px-3 py-2.5 flex items-center text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer">
                          Pending
                        </li>
                        <li className="px-3 py-2.5 flex items-center text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer">
                          Dispatched
                        </li>
                        <li className="px-3 py-2.5 flex items-center text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer">
                          Deliverd
                        </li>
                        <li className="px-3 py-2.5 flex items-center text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer">
                          Cancelled
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* TABLES */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-7 py-3" scope="col">
                      Sr #
                    </th>
                    <th className="px-7 py-3" scope="col">
                      Name
                    </th>
                    <th className="px-7 py-3" scope="col">
                      UserId
                    </th>
                    <th className="px-7 py-3" scope="col">
                      Phone
                    </th>
                    <th className="px-7 py-3" scope="col">
                      Amount
                    </th>
                    <th className="px-7 py-3" scope="col">
                      Order Progress
                    </th>
                    <th className="px-7 py-3" scope="col">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => (
                    <tr
                      key={index}
                      onClick={() => handleOrderDetails(index + 1)}
                      className="border-b dark:border-gray-700 cursor-pointer"
                    >
                      <th
                        className="px-7 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        scope="row"
                      >
                        {index + 1}
                      </th>
                      <td className="px-7 py-3">{data.name}</td>
                      <td className="px-7 py-3">{data.userId}</td>
                      <td className="px-7 py-3">{data.phone}</td>
                      <td className="px-7 py-3">{data.amount}</td>
                      <td className="px-7 py-3">{data.order_progress}</td>
                      <td className="px-7 py-3 flex items-center justify-end">
                        <button
                          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                          data-dropdown-toggle="playstation-5-dropdown"
                          id="playstation-5-dropdown-button"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                        <div
                          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          id="playstation-5-dropdown"
                        >
                          <ul
                            aria-labelledby="playstation-5-dropdown-button"
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          >
                            <li>
                              <a
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                href="#"
                              >
                                Show
                              </a>
                            </li>
                            <li>
                              <a
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                href="#"
                              >
                                Edit
                              </a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a
                              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <nav
              aria-label="Table navigation"
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewOrders;
