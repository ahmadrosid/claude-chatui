export function ChatPanel() {
    return (

        <div className="flex h-[99.5vh] w-full flex-col">
          {/* Prompt Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-200 text-sm leading-6 text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-300 sm:text-base sm:leading-7">
            <div className="flex flex-row px-4 py-8 sm:px-6">
              <img
                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                src="https://dummyimage.com/256x256/363536/ffffff&text=U"
              />

              <div className="flex max-w-3xl items-center">
                <p>Explain quantum computing in simple terms</p>
              </div>
            </div>

            <div className="flex bg-gray-50 px-4 py-8 dark:bg-gray-900 sm:px-6">
              <img
                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
              />

              <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between">
                <p className="max-w-3xl">
                  Certainly! Quantum computing is a new type of computing that
                  relies on the principles of quantum physics. Traditional
                  computers, like the one you might be using right now, use bits
                  to store and process information. These bits can represent
                  either a 0 or a 1. In contrast, quantum computers use quantum
                  bits, or qubits.
                  <br />
                  <br />
                  Unlike bits, qubits can represent not only a 0 or a 1 but also
                  a superposition of both states simultaneously. This means that
                  a qubit can be in multiple states at once, which allows
                  quantum computers to perform certain calculations much faster
                  and more efficiently.
                </p>
                <div className="mt-4 flex flex-row justify-start gap-x-2 text-gray-500 lg:mt-0">
                  <button className="hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                    </svg>
                  </button>
                  <button className="hover:text-blue-600" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                    </svg>
                  </button>
                  <button className="hover:text-blue-600" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-8 sm:px-6">
              <img
                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                src="https://dummyimage.com/256x256/363536/ffffff&text=U"
              />

              <div className="flex max-w-3xl items-center">
                <p>What are three great applications of quantum computing?</p>
              </div>
            </div>

            <div className="flex bg-gray-50 px-4 py-8 dark:bg-gray-900 sm:px-6">
              <img
                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
              />

              <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between">
                <p className="max-w-3xl">
                  Three great applications of quantum computing are:
                  Optimization of complex problems, Drug Discovery and
                  Cryptography.
                </p>
                <div className="mt-4 flex flex-row gap-x-2 text-gray-500 lg:mt-0">
                  <button className="hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                    </svg>
                  </button>
                  <button className="hover:text-blue-600" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                    </svg>
                  </button>
                  <button className="hover:text-blue-600" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt message input */}
          <form className="flex w-full items-center border-t border-gray-300 bg-gray-200 p-2 dark:border-gray-700 dark:bg-gray-900 pt-4">
            <label htmlFor="chat" className="sr-only">
              Enter your prompt
            </label>
            <div>
              <button
                className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-600 sm:p-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
                <span className="sr-only">Add</span>
              </button>
            </div>
            <textarea
              id="chat-input"
              rows={1}
              className="mx-2 flex min-h-full w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
              placeholder="Enter your prompt"
            ></textarea>
            <div>
              <button
                className="inline-flex hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-600 sm:p-2"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
    );
}