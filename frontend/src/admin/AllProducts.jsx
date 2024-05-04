import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllProducts = () => {
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

  const { products, isLoading } = useSelector((state) => state.product);
  // console.log('products', products);

  const handleUpdate = (id) => {
    navigate(`/admin/update_product/${id}`);
    window.scroll(0, 0);
  };

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
          <section>
            <div className="bg-[#E5E5E5] dark:bg-gray-900 mx-auto min-h-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
              {/* HEADER FOR ALL PRODUCT PAGE */}
              <header className="flex justify-between items-center flex-wrap">
                <div className="heading">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
                    All Product Collection
                  </h2>

                  <p className="mt-4 max-w-xl text-gray-500 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque praesentium cumque iure dicta incidunt est ipsam,
                    officia dolor fugit natus?
                  </p>
                </div>

                {/* DROPDOWN FOR SORTING PRODUCTS */}
                <div className="mt-1">
                  <div ref={dropdownRef} className="relative">
                    <button
                      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      id="filterDropdownButton"
                      type="button"
                      onClick={toggleDropdown}
                    >
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 mr-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          fillRule="evenodd"
                        />
                      </svg>
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

                    {isOpen && (
                      <div
                        className="absolute right-0 mt-3 w-48 p-3 bg-white rounded-lg shadow-lg dark:bg-gray-700"
                        id="filterDropdown"
                      >
                        <ul
                          aria-labelledby="filterDropdownButton"
                          className="space-y-2 text-sm"
                        >
                          <li className="flex items-center text-gray-900 dark:text-gray-100 cursor-pointer">
                            Latest (56)
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </header>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products?.map((data) => (
                  <li key={data?._id} onClick={() => handleUpdate(data?._id)}>
                    <div className="group block overflow-hidden cursor-pointer">
                      <img
                        src={data?.image?.secure_url}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {data?.name}
                        </h3>

                        <p className="mt-2">
                          <span className="sr-only"> Regular Price </span>

                          <span className="tracking-wider text-gray-900">
                            {" "}
                            Rs. {data?.price}{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AllProducts;
