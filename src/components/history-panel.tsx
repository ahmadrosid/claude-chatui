export function HistoryPanel() {
    return (

        <div className="h-screen w-[400px] overflow-y-auto bg-gray-50 border-r border-gray-300 py-8 dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-start">
            <h2 className="inline px-5 text-lg font-medium text-gray-800 dark:text-gray-200">
              Chats
            </h2>
            <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-gray-200">
              24
            </span>
          </div>

          <div className="mx-2 mt-8 space-y-4">
            <form>
              <label htmlFor="chat-input" className="sr-only">
                Search chats
              </label>
              <div className="relative">
                <input
                  id="search-chats"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                  placeholder="Search chats"
                  required
                />
                <button
                  type="submit"
                  className="absolute bottom-2 right-2.5 rounded-lg p-2 text-sm text-gray-500 hover:text-blue-700 focus:outline-none sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h5"></path>
                    <path d="M11.008 19.195l-3.008 1.805v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"></path>
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M20.2 20.2l1.8 1.8"></path>
                  </svg>
                  <span className="sr-only">Search chats</span>
                </button>
              </div>
            </form>

            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-800">
              <h1 className="text-sm font-medium capitalize text-gray-700 dark:text-gray-200">
                Tailwind Classes
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                12 Mar
              </p>
            </button>

            <button className="flex w-full flex-col gap-y-2 rounded-lg bg-gray-200 px-3 py-2 text-left transition-colors duration-200 focus:outline-none dark:bg-gray-800">
              <h1 className="text-sm font-medium capitalize text-gray-700 dark:text-gray-200">
                explain quantum computing
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                10 Feb
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-800">
              <h1 className="text-sm font-medium capitalize text-gray-700 dark:text-gray-200">
                How to create ERP Diagram
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                22 Jan
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-800">
              <h1 className="text-sm font-medium capitalize text-gray-700 dark:text-gray-200">
                API Scaling Strategies
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                1 Jan
              </p>
            </button>
          </div>
        </div>
    )
}
