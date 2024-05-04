import { useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

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

const Reviews = () => {
  const { isLoading } = useSelector((state) => state.product);

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
          <section className="bg-[#E5E5E5] dark:bg-gray-900 py-8 sm:py-10 mx-auto min-h-screen max-w-screen-xl px-4 lg:px-8">
            <div className="bg-white py-8 antialiased dark:bg-gray-800 md:py-16 rounded-lg">
              <div className="mx-auto px-6 2xl:px-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Reviews
                  </h2>
                  <div className="mt-2 flex items-center gap-2 sm:mt-0">
                    <div className="flex items-center gap-0.5">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                      (4.6)
                    </p>
                    <a
                      className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                      href="#"
                    >
                      {' '}645 Reviews{' '}
                    </a>
                  </div>
                </div>
                <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
                  <div className="shrink-0 space-y-4">
                    <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                      4.65 out of 5
                    </p>
                    <button
                      className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      data-modal-target="review-modal"
                      data-modal-toggle="review-modal"
                      type="button"
                    >
                      Write a review
                    </button>
                  </div>
                  <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                        5
                      </p>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{
                            width: '20%'
                          }}
                        />
                      </div>
                      <a
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                        href="#"
                      >
                        239{' '}
                        <span className="hidden sm:inline">
                          reviews
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                        4
                      </p>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{
                            width: '60%'
                          }}
                        />
                      </div>
                      <a
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                        href="#"
                      >
                        432{' '}
                        <span className="hidden sm:inline">
                          reviews
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                        3
                      </p>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{
                            width: '15%'
                          }}
                        />
                      </div>
                      <a
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                        href="#"
                      >
                        53{' '}
                        <span className="hidden sm:inline">
                          reviews
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                        2
                      </p>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{
                            width: '5%'
                          }}
                        />
                      </div>
                      <a
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                        href="#"
                      >
                        32{' '}
                        <span className="hidden sm:inline">
                          reviews
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                        1
                      </p>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1.5 rounded-full bg-yellow-300"
                          style={{
                            width: '0%'
                          }}
                        />
                      </div>
                      <a
                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                        href="#"
                      >
                        13{' '}
                        <span className="hidden sm:inline">
                          reviews
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="gap-3 pb-6 sm:flex sm:items-start">
                    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                      <div className="flex items-center gap-0.5">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          Micheal Gough
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          November 18 2023 at 15:35
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-700 dark:text-primary-500"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                            fillRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Verified purchase
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Was it helpful to you?
                        </p>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-1"
                            name="reviews-radio"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-1"
                          >
                            {' '}Yes: 3{' '}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-2"
                            name="reviews-radio"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-2"
                          >
                            No: 0{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-3 py-6 sm:flex sm:items-start">
                    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                      <div className="flex items-center gap-0.5">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          Jese Leos
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          November 18 2023 at 15:35
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-700 dark:text-primary-500"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                            fillRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Verified purchase
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!
                      </p>
                      <div className="flex gap-2">
                        <img
                          alt=""
                          className="h-32 w-20 rounded-lg object-cover"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg"
                        />
                        <img
                          alt=""
                          className="h-32 w-20 rounded-lg object-cover"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Was it helpful to you?
                        </p>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-3"
                            name="reviews-radio-2"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-3"
                          >
                            {' '}Yes: 1{' '}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-4"
                            name="reviews-radio-2"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-4"
                          >
                            No: 0{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-3 py-6 sm:flex sm:items-start">
                    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                      <div className="flex items-center gap-0.5">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          November 18 2023 at 15:35
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-700 dark:text-primary-500"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                            fillRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Verified purchase
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Was it helpful to you?
                        </p>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-5"
                            name="reviews-radio-3"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-5"
                          >
                            {' '}Yes: 0{' '}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-6"
                            name="reviews-radio-3"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-6"
                          >
                            No: 0{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-3 py-6 sm:flex sm:items-start">
                    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                      <div className="flex items-center gap-0.5">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          Roberta Casas
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          November 18 2023 at 15:35
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-700 dark:text-primary-500"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                            fillRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Verified purchase
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        I have used earlier Mac computers in my university work for a number of years and found them easy to use.The iMac 2021 is no exception. It works straight out of the box giving superb definition from the HD screen.
                      </p>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Basic tools such as a browser (Safari) and a mail client are included in the system. Microsoft Office apps can be downloaded from the App Store though they may only work in read-only mode unless you take out a subscription. The instruction manual that comes with it is the size of a piece of toilet paper but the proper user guide is on-line.
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Was it helpful to you?
                        </p>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-7"
                            name="reviews-radio-4"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-7"
                          >
                            {' '}Yes: 1{' '}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-8"
                            name="reviews-radio-4"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-8"
                          >
                            No: 0{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-3 py-6 sm:flex sm:items-start">
                    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                      <div className="flex items-center gap-0.5">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-yellow-300"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          Neil Sims
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          November 18 2023 at 15:35
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-700 dark:text-primary-500"
                          fill="currentColor"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                            fillRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Verified purchase
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        I replaced my 11 year old iMac with the new M1 Apple. I wanted to remain with Apple as my old one is still working perfectly and all Apple products are so reliable. Setting up was simple and fast and transferring everything from my previous iMac worked perfectly.
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Was it helpful to you?
                        </p>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-9"
                            name="reviews-radio-5"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-9"
                          >
                            {' '}Yes: 1{' '}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="reviews-radio-10"
                            name="reviews-radio-5"
                            type="radio"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="reviews-radio-10"
                          >
                            No: 0{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    type="button"
                  >
                    View more reviews
                  </button>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased"
              id="review-modal"
              tabIndex="-1"
            >
              <div className="relative max-h-full w-full max-w-2xl p-4">
                <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                  <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Add a review for:
                      </h3>
                      <a
                        className="font-medium text-primary-700 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD
                      </a>
                    </div>
                    <button
                      className="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="review-modal"
                      type="button"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="sr-only">
                        Close modal
                      </span>
                    </button>
                  </div>
                  <form className="p-4 md:p-5">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="h-6 w-6 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="ms-2 h-6 w-6 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="ms-2 h-6 w-6 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
                            3.0 out of 5
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="title"
                        >
                          Review title
                        </label>
                        <input
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          id="title"
                          name="title"
                          required
                          type="text"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="description"
                        >
                          Review description
                        </label>
                        <textarea
                          className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          id="description"
                          required
                          rows="6"
                        />
                        <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                          Problems with the product or delivery?{' '}
                          <a
                            className="text-primary-600 hover:underline dark:text-primary-500"
                            href="#"
                          >
                            Send a report
                          </a>
                          .
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Add real photos of the product to help other customers{' '}
                          <span className="text-gray-500 dark:text-gray-400">
                            (Optional)
                          </span>
                        </p>
                        <div className="flex w-full items-center justify-center">
                          <label
                            className="dark:hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            htmlFor="dropzone-file"
                          >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                              <svg
                                aria-hidden="true"
                                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                fill="none"
                                viewBox="0 0 20 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>
                                {' '}or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              className="hidden"
                              id="dropzone-file"
                              type="file"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            defaultValue=""
                            id="review-checkbox"
                            type="checkbox"
                          />
                          <label
                            className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                            htmlFor="review-checkbox"
                          >
                            By publishing this review you agree with the{' '}
                            <a
                              className="text-primary-600 hover:underline dark:text-primary-500"
                              href="#"
                            >
                              terms and conditions
                            </a>
                            .
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                      <button
                        className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        type="submit"
                      >
                        Add review
                      </button>
                      <button
                        className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        data-modal-toggle="review-modal"
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Reviews;
