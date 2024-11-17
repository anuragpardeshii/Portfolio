// Importing images
import WWAImage from "/src/assets/Images/wwa.png";
import WanderlustImage from "/src/assets/Images/wanderlust.png";
import BagiyaImage from "/src/assets/Images/Bagiya.png";
import GitHubIcon from "/src/assets/svg/github-w.svg";

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

        <div
          className="project"
          style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
        >
          {/* Project 1 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={WWAImage} alt="Widom World Academy" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  School Website
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Developed Widom World Academy's website using the MERN stack,
                implementing features for dynamic content, real-time interactions,
                and efficient management of student-related information.
              </p>
              <a
                href="https://github.com/anuragpardeshii/wwa"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                GitHub
                <img src={GitHubIcon} alt="GitHub" style={{ width: "1.5rem", marginLeft: "1rem" }} />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={WanderlustImage} alt="Wanderlust" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Wanderlust
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Wanderlust is a travel-focused web application built with MERN stack,
                featuring dynamic itineraries, user reviews, location-based services,
                and an intuitive interface for exploring and planning unforgettable
                travel experiences.
              </p>
              <a
                href="https://github.com/anuragpardeshii/Wanderlust"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                GitHub
                <img src={GitHubIcon} alt="GitHub" style={{ width: "1.5rem", marginLeft: "1rem" }} />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={BagiyaImage} alt="Bagiya" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bagiya
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Bagiya is an interactive MERN stack application promoting focus
                through timers, tab-locking, and streaks. Users earn virtual coins for
                tasks, redeemable for planting real trees, encouraging productivity
                and environmental impact.
              </p>
              <a
                href="https://github.com/anuragpardeshii/Bagiya-React"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                GitHub
                <img src={GitHubIcon} alt="GitHub" style={{ width: "1.5rem", marginLeft: "1rem" }} />
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
              className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
