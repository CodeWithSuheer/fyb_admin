import { useSelector } from "react-redux";
// import product from "./ProductData";
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

const CreateCoupon = () => {
  const { isLoading } = useSelector((state) => state.product);

  const [isOpen, setIsOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsOpen(false);
  };

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

  return (
    <>
      {isLoading ? (
        <>
          <div
            className="mx-auto flex justify-center items-center h-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
            role="status"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <>
          <section className="bg-[#E5E5E5] dark:bg-gray-900 py-8 sm:py-10 mx-auto max-w-screen-xl px-4 lg:px-10">
            <h2 className="playfair text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Create Coupon
            </h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-2 lg:gap-4">
              {/* NAME */}
              <div className="">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  type="text"
                  //   value={formdata.name}
                  //   onChange={(e) =>
                  //     setFormdata({ ...formdata, name: e.target.value })
                  //   }
                  required
                />
              </div>

              {/* NAME */}
              <div className="">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  type="text"
                  //   value={formdata.name}
                  //   onChange={(e) =>
                  //     setFormdata({ ...formdata, name: e.target.value })
                  //   }
                  required
                />
              </div>

              {/* NAME */}
              <div className="">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  type="text"
                  //   value={formdata.name}
                  //   onChange={(e) =>
                  //     setFormdata({ ...formdata, name: e.target.value })
                  //   }
                  required
                />
              </div>

              {/* NAME */}
              <div className="">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  type="text"
                  //   value={formdata.name}
                  //   onChange={(e) =>
                  //     setFormdata({ ...formdata, name: e.target.value })
                  //   }
                  required
                />
              </div>

              {/* DROPDOWN FOR SORTING PRODUCTS */}
              <div className="mt-1">
                <div ref={dropdownRef} className="relative">
                  <button
                    className={`w-[100%] text-start flex items-center justify-start py-3 px-4 text-sm font-medium text-gray-600 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
                      isCheckboxChecked ? "pointer-events-none opacity-50" : ""
                    }`}
                    id="filterDropdownButton"
                    type="button"
                    onClick={toggleDropdown}
                    disabled={isCheckboxChecked}
                  >
                    Filter
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

                  {isOpen && !isCheckboxChecked && (
                    <div
                      className="w-full absolute right-0 mt-3 py-3 bg-white rounded-lg shadow-lg dark:bg-gray-700"
                      id="filterDropdown"
                    >
                      <ul
                        aria-labelledby="filterDropdownButton"
                        className="text-sm"
                      >
                        <li className="px-4 py-2.5 flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 cursor-pointer">
                          Skincare
                        </li>
                        <li className="px-4 py-2.5 flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 cursor-pointer">
                          Body Care
                        </li>
                        <li className="px-4 py-2.5 flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 cursor-pointer">
                          Haircare
                        </li>
                        <li className="px-4 py-2.5 flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 cursor-pointer">
                          Cosmetics
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <fieldset className="px-10 flex justify-between items-center gap-4">
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-2"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300"
                      id="Option1"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div>
                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                      All Product
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-2"
                >
                  <div className="flex items-center">
                    &#8203;
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300"
                      id="Option3"
                      checked
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900 dark:text-gray-100">
                      Is Active{" "}
                    </strong>
                  </div>
                </label>
              </fieldset>
            </div>

            <button className="mt-7 flex justify-center items-center mx-auto px-6 py-2.5 bg-[#EC72AF] text-white">
              Create Now
            </button>
          </section>

          <section className="bg-[#E5E5E5] dark:bg-gray-900 py-8 sm:py-10 mx-auto max-w-screen-xl px-4 lg:px-10">
            <h2 className="playfair text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              All Coupon
            </h2>
            {/* TABLES */}
            <div className="mt-4 overflow-x-auto ">
              <table className="w-full text-sm text-left bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
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
          </section>
        </>
      )}
    </>
  );
};

export default CreateCoupon;
