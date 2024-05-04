import { useNavigate } from "react-router-dom";
// import product from "./ProductData";
import { useSelector } from "react-redux";

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

const AllProducts = () => {
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.product);
  // console.log('products', products);

  //   const handleUpdate = (id) => {
  //     navigate(`/admin/update_product/${id}`);
  //     window.scroll(0, 0);
  //   };

  const handleOrderPage = () => {
    navigate(`/admin/view_orders`);
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
          <section className="bg-[#E5E5E5] dark:bg-gray-900 min-h-screen py-8 sm:py-10 mx-auto max-w-screen-xl px-4 lg:px-10">
            {/* ------------ FIRST STATS BAR ------------*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-4 lg:gap-4">
              {/* FIRST BOX */}
              <div className="px-5 h-36 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex justify-between items-center">
                <div className="img">
                  <img
                    className="w-20"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_230.png?v=1714765888"
                    alt=""
                  />
                </div>

                <div className="stat_data">
                  <h3 className="text-gray-900 dark:text-gray-100 mt-1.5 text-md font-normal">
                    Total Sale
                  </h3>
                  <h2 className="text-gray-900 dark:text-gray-100 mt-1.5 text-2xl font-semibold">
                    232,789
                  </h2>
                  <p className="text-gray-900 mt-1.5 bg-[#FDEDF5] text-sm px-3 py-1 w-16 rounded-lg">
                    +1.5k
                  </p>
                </div>
              </div>
              {/* SECOND BOX */}
              <div className="px-5 h-36 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex justify-between items-center">
                <div className="img">
                  <img
                    className="w-20"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_230.png?v=1714765888"
                    alt=""
                  />
                </div>

                <div className="stat_data">
                  <h3 className="text-gray-900 dark:text-gray-100 mt-1.5 text-md font-normal">
                    Total Sale
                  </h3>
                  <h2 className="text-gray-900 dark:text-gray-100 mt-1.5 text-2xl font-semibold">
                    232,789
                  </h2>
                  <p className="text-gray-900 mt-1.5 bg-[#FDEDF5] text-sm px-3 py-1 w-16 rounded-lg">
                    +1.5k
                  </p>
                </div>
              </div>
              {/* THIRD BOX */}
              <div className="px-5 h-36 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex justify-between items-center">
                <div className="img">
                  <img
                    className="w-20"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_72065.png?v=1714765889"
                    alt=""
                  />
                </div>

                <div className="stat_data">
                  <h3 className="text-gray-900 dark:text-gray-100 mt-1.5 text-md font-normal">
                    Total Sale
                  </h3>
                  <h2 className="text-gray-900 dark:text-gray-100 mt-1.5 text-2xl font-semibold">
                    232,789
                  </h2>
                  <p className="text-gray-900 mt-1.5 bg-[#FDEDF5] text-sm px-3 py-1 w-16 rounded-lg">
                    +1.5k
                  </p>
                </div>
              </div>
              {/* FORTH BOX */}
              <div className="px-5 h-36 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex justify-between items-center">
                <div className="img">
                  <img
                    className="w-20"
                    src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_72066.png?v=1714765889"
                    alt=""
                  />
                </div>

                <div className="stat_data">
                  <h3 className="text-gray-900 dark:text-gray-100 mt-1.5 text-md font-normal">
                    Total Sale
                  </h3>
                  <h2 className="text-gray-900 dark:text-gray-100 mt-1.5 text-2xl font-semibold">
                    232,789
                  </h2>
                  <p className="text-gray-900 mt-1.5 bg-[#FDEDF5] text-sm px-3 py-1 w-16 rounded-lg">
                    +1.5k
                  </p>
                </div>
              </div>
            </div>

            {/* ------------ SECOND STATS BAR ------------*/}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
              <div className="rounded-lg md:col-span-1 lg:col-span-4 xl:col-span-3">
                {/* BAR CHARTS */}
                <div className="h-72 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 w-full p-4">
                  Bar Chart
                </div>
              </div>

              {/* SALES BY LOCATION */}
              <div className="px-4 pt-5 lg:col-span-4 xl:col-span-1 pb-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg border border-gray-400 dark:border-gray-700">
                <h2 className="mb-3 font-medium text-lg">Customer Reviews</h2>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Commodi tenetur aliquam obcaecati molestiae, debitis dolores
                  quae quasi exercitationem iusto, sequi hic? Veniam,
                  consequatur nihil impedit cumque non magnam hic.
                </p>
              </div>
            </div>

            {/* TABLES */}
            <div className="mt-5 overflow-x-auto">
              <h2 className="playfair mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                New Orders
              </h2>
              <table
                onClick={handleOrderPage}
                className="w-full text-sm text-left bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400"
              >
                <thead className="text-xs text-gray-700 uppercase border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tbody className="">
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
                      {/* <td className="px-7 py-3 flex items-center justify-end">
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
                      </td> */}
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

export default AllProducts;
