import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function About() {
  return (
    <>
      <div className="pt-6" style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}>
        <div>
          <h1 className="pt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            About me
            <span className="text-blue-600 dark:text-blue-500">.</span>{" "}
          </h1>
          <p className="text-lg pb-8 pt-8 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Proficient in developing responsive and dynamic web applications
            with the MERN stack. Experienced in creating intuitive user
            interfaces, efficient backend solutions, and solving coding
            challenges, delivering impactful projects that combine innovation,
            scalability, and exceptional user experiences.
          </p>
        </div>

        <div className="flex flex-row gap-4 flex-wrap pt-8 pb-8 justify-center">
          <div className="flex flex-col gap-4">
            <a className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contact Info
              </h5>
              <p className="font-normal p-2 text-gray-700 dark:text-gray-400">
              <LocalPhoneIcon
                      style={{ fontSize: "2rem" }}
                    /> &nbsp; : &nbsp; +91-8435304050
              </p>
              <p className="font-normal p-2 text-gray-700 dark:text-gray-400">
              <EmailIcon
                      style={{ fontSize: "2rem" }}
                    /> &nbsp; : &nbsp; pardeshianurag22@gmail.com
              </p>
              <p className="font-normal p-2 text-gray-700 dark:text-gray-400">
              <LocationOnIcon
                      style={{ fontSize: "2rem" }}
                    /> &nbsp; : &nbsp; Indore
              </p>
            </a>

            <a className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Social Links
              </h5>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div
                  class="p-1 bg-white border border-gray-200 rounded-lg shadow h-10 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      style={{ fontSize: "2rem", color: "#0A66C2" }}
                    />{" "}
                    Linkedin
                  </a>
                </div>
                <div
                  class="p-1 bg-white border border-gray-200 rounded-lg shadow h-10 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon style={{ fontSize: "2rem", color: "black" }} />{" "}
                    GitHub
                  </a>
                </div>
              </div>
            </a>
            
            <a className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Resume
              </h5>
              <div className="flex items-center justify-center ">
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
            </div>
              
            </a>


          </div>
          <a className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Connect with me
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Feel free to reach out through the form below for any inquiries,
              collaborations, or opportunities!
            </p>
            <form className="mb-6">
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
              >
                Send message
              </button>
            </form>
          </a>
        </div>

        <h1 className="mb-4 mt-6 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Goals or{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            {" "}
            Vision
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          My goal is to create impactful web applications that solve real-world
          problems and provide seamless user experiences. I aim to continuously
          grow as a developer, embracing innovative technologies to build
          scalable, user-centric solutions that make a difference.
        </p>

        <h1 className="mb-4 mt-6 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Work{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            {" "}
            Ethic
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          I believe in writing clean, maintainable code and strive for
          excellence in every project I undertake. Collaboration and continuous
          learning are at the core of my work ethic, ensuring that I deliver
          reliable and efficient solutions while adapting to evolving
          technologies.
        </p>

        <h1 className="mb-4 mt-6 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          My{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            {" "}
            Journey
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          My journey into web development began with a fascination for creating
          interactive websites using HTML and CSS. Over time, I honed my skills
          in JavaScript and embraced the MERN stack to build full-stack
          applications. From solving coding challenges to developing real-world
          projects, each step has been a rewarding experience. Today, I focus on
          crafting responsive, dynamic, and scalable web solutions, continuously
          learning and growing with every new challenge.
        </p>
      </div>
    </>
  );
}
