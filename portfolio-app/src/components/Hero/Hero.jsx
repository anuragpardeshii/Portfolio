export default function Hero() {
  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{ height: "85vh" }}
      >
        <div className="flex justify-center items-center p-6">
          <div className="max-w-2xl">
          <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
              I am Anurag Pardeshi,
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-500">Full Stack </span>  Developer
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
              I am a Full Stack Developer based in Indore.
              Skilled in the MERN stack, I build dynamic, user-friendly web
              applications and strive to deliver innovative, clean, and
              efficient solutions.
            </p>
            <div className="flex" style={{gap: "1rem"}}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-x-8"
            >
              Download Resume
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-x-8"
            >
              Contact Info
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
              </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-6">
          <img
            className="rounded-full w-96 h-96"
            src="/src/assets/Images/img.jpg"
            alt="image description"
          />
        </div>
      </div>
    </>
  );
}
