const data = [
  {
    src: "/src/assets/svg/react.svg",
    tag: "ReactJS",
  },
  {
    src: "/src/assets/svg/mongodb.svg",
    tag: "MongoDB",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
  {
    src: "/src/assets/svg/html.svg",
    tag: "HTML",
  },
];

export default function About() {
  return (
    <>
      <div
        className="pt-6"
        style={{ margin: "auto", height: "100vh", maxWidth: "70rem" }}
      >
        <div>
          <h1 className="mb-4 pt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            About me
            <span class="text-blue-600 dark:text-blue-500">.</span>{" "}
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Proficient in developing responsive and dynamic web applications
            with the MERN stack. Experienced in creating intuitive user
            interfaces, efficient backend solutions, and solving coding
            challenges, delivering impactful projects that combine innovation,
            scalability, and exceptional user experiences.
          </p>
        </div>
        <h1 className="mb-4 pt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          My Skills
          <span class="text-blue-600 dark:text-blue-500">.</span>{" "}
        </h1>
        <p className="text-lg mb-7 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here are some of the key skills I am acquainted with, demonstrating my
          expertise in web development, modern technologies, and building
          impactful applications with the latest tools and frameworks.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center flex-col"
              style={{ width: "14rem" }}
            >
              <img src={item.src} alt={item.tag} style={{ width: "8rem" }} />
              <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.tag}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
