export const AddChild = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden">
      <div className="relative p-4 w-full max-w-2xl">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm  bg-[radial-gradient(circle,#00CAFF_6%,#0066FF_120%)]">
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 pt-5 rounded-t">
            <h3 className="text-[34px] font-semibold text-gray-900 dark:text-white">
              Add Child
            </h3>

            <button
              type="button"
              className="text-gray-700 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
