const data = [
    {
      src: "/src/assets/svg/html.svg",
      tag: "HTML",
    },
    {
      src: "/src/assets/svg/css.svg",
      tag: "CSS",
    },
    {
      src: "/src/assets/svg/js.svg",
      tag: "JavaScript",
    },
    {
      src: "/src/assets/svg/Bootstrap.svg",
      tag: "Bootstrap",
    },
    {
      src: "/src/assets/svg/mongodb.svg",
      tag: "MongoDB",
    },
    {
      src: "/src/assets/svg/sql.svg",
      tag: "SQL",
    },
    {
      src: "/src/assets/svg/express.svg",
      tag: "ExpressJS",
    },
    {
      src: "/src/assets/svg/react.svg",
      tag: "ReactJS",
    },
    {
      src: "/src/assets/svg/redux.svg",
      tag: "Redux",
    },
    {
      src: "/src/assets/svg/node-js.svg",
      tag: "NodeJS",
    },
    {
      src: "/src/assets/svg/tailwind.svg",
      tag: "TailwindCSS",
    },
    {
      src: "/src/assets/svg/java.svg",
      tag: "Java",
    },
  ];

export default function Skills() {
  return (
    <>
      <div
        className="pt-6"
        style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}
      >
        <h1 className="mb-4 pt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          My skills
          <span className="text-blue-600 dark:text-blue-500">.</span>{" "}
        </h1>
        
        <p className="text-lg mb-7 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here are some of the key skills I am acquainted with, demonstrating my
          expertise in web development, modern technologies, and building
          impactful applications with the latest tools and frameworks.
        </p>

        <div className="flex p-6 gap-6 flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center flex-col"
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
