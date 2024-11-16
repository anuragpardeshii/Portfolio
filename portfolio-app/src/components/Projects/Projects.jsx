export default function Projects() {
  return (
    <>
      <div
        className="pt-6"
        style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}
      >
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Projects<span className="text-blue-600 dark:text-blue-500">.</span>
        </h1>

        <p className="text-lg pb-8 mb-5 pt-8 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          The Projects section highlights diverse web applications, showcasing
          expertise in MERN stack, responsive design, real-time features, and
          innovative functionalities tailored to user-centric experiences.
        </p>

        <div className="project" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/Images/wwa.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  School Website
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Developed Widom World Academy's website using the MERN stack,
                implementing features for dynamic content, real-time
                interactions, and efficient management of student-related
                information
              </p>
              <a
                href="https://github.com/anuragpardeshii/wwa"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                GitHub
                <img
                  src="/src/assets/svg/github-w.svg"
                  alt=""
                  style={{ width: "1.5rem", marginLeft: "1rem" }}
                />
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/Images/wanderlust.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Wanderlust
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Wanderlust is a travel-focused web application built with MERN
                stack, featuring dynamic itineraries, user reviews,
                location-based services, and an intuitive interface for
                exploring and planning unforgettable travel experiences.
              </p>
              <a
                href="https://github.com/anuragpardeshii/Wanderlust"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                GitHub
                <img
                  src="/src/assets/svg/github-w.svg"
                  alt=""
                  style={{ width: "1.5rem", marginLeft: "1rem" }}
                />
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/src/assets/Images/Bagiya.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bagiya
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Bagiya is an interactive MERN stack application promoting focus
                through timers, tab-locking, and streaks. Users earn virtual
                coins for tasks, redeemable for planting real trees, encouraging
                productivity and environmental impact.
              </p>
              <a
                href="https://github.com/anuragpardeshii/Bagiya-React"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                GitHub
                <img
                  src="/src/assets/svg/github-w.svg"
                  alt=""
                  style={{ width: "1.5rem", marginLeft: "1rem" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center p-6 items-center"
          style={{ margin: "auto" }}
        >
            <a href="https://github.com/anuragpardeshii?tab=repositories">
          <button
            type="button"
            class="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            See more
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
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
