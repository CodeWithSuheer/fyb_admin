import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderDetailPage = () => {
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

  const handleMoveBack = () => {
    navigate(`/admin/view_orders`);
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="bg-[#E5E5E5] py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-between item-start space-y-2 flex-col xl:flex-row">
          <div className="order_data flex gap-x-8">
            <div className="data">
              <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Order #13432
              </h1>
              <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                21st Mart 2021 at 10:34 PM
              </p>
            </div>

            <div ref={dropdownRef} className="relative">
              <button
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                id="filterDropdownButton"
                type="button"
                onClick={toggleDropdown}
              >
                Update Order Status
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

          {/* BACK TO ORDER PAGE BUTTON */}
          <div className="button">
            <button
              onClick={handleMoveBack}
              className="px-6 py-2 flex items-center gap-2 rounded-lg text-gray-800 dark:text-gray-300 hover:underline hover:underline-offset-4"
            >
              <ChevronLeft size={20} /> Back
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            {/* PRODUCTS BOX */}
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>

              {/* PRODUCTS 1 */}
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    alt="dress"
                    className="w-full hidden md:block"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  />
                  <img
                    alt="dress"
                    className="w-full md:hidden"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      Premium Quaility Dress
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Style:{" "}
                        </span>{" "}
                        Italic Minimal Design
                      </p>
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Size:{" "}
                        </span>{" "}
                        Small
                      </p>
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Color:{" "}
                        </span>{" "}
                        Light Blue
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base dark:text-white xl:text-lg leading-6">
                      $36.00{" "}
                      <span className="text-red-300 line-through"> $45.00</span>
                    </p>
                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                      $36.00
                    </p>
                  </div>
                </div>
              </div>

              {/* PRODUCTS 2 */}
              <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                <div className="w-full md:w-40">
                  <img
                    alt="dress"
                    className="w-full hidden md:block"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  />
                  <img
                    alt="dress"
                    className="w-full md:hidden"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Rectangle_3953.png?v=1714511393"
                  />
                </div>
                <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      High Quaility Italic Dress
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Style:{" "}
                        </span>{" "}
                        Italic Minimal Design
                      </p>
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Size:{" "}
                        </span>{" "}
                        Small
                      </p>
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Color:{" "}
                        </span>{" "}
                        Light Blue
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base dark:text-white xl:text-lg leading-6">
                      $20.00{" "}
                      <span className="text-red-300 line-through"> $30.00</span>
                    </p>
                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                      $20.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      $56.00
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      $8.00
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    $36.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CUSTOMER DETAILS */}
          <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    alt="avatar"
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                  />
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                      David Kent
                    </p>
                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                      10 Previous Orders
                    </p>
                  </div>
                </div>
                <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 ">
                    david89@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                      Billing Address
                    </p>
                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                </div>
                {/* <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                    Edit Details
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailPage;
