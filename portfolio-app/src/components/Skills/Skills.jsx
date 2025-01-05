import HTML from "/src/assets/svg/html.svg";
import CSS from "/src/assets/svg/css.svg";
import JavaScript from "/src/assets/svg/js.svg";
import Bootstrap from "/src/assets/svg/bootstrap.svg";
import MongoDB from "/src/assets/svg/mongodb.svg";
import SQL from "/src/assets/svg/sql.svg";
import Express from "/src/assets/svg/express.svg";
import ReactImg from "/src/assets/svg/react.svg";
import Node from "/src/assets/svg/node-js.svg";
import Redux from "/src/assets/svg/redux.svg";
import Tailwind from "/src/assets/svg/tailwind.svg";
import Java from "/src/assets/svg/java.svg";

const data = [
  {
    src: HTML,
    tag: "HTML",
  },
  {
    src: CSS,
    tag: "CSS",
  },
  {
    src: JavaScript,
    tag: "JavaScript",
  },
  {
    src: Bootstrap,
    tag: "Bootstrap",
  },
  {
    src: MongoDB,
    tag: "MongoDB",
  },
  {
    src: SQL,
    tag: "SQL",
  },
  {
    src: Express,
    tag: "ExpressJS",
  },
  {
    src: ReactImg,
    tag: "ReactJS",
  },
  {
    src: Redux,
    tag: "Redux",
  },
  {
    src: Node,
    tag: "NodeJS",
  },
  {
    src: Tailwind,
    tag: "TailwindCSS",
  },
  {
    src: Java,
    tag: "Java",
  },
];

export default function Skills() {
  return (
    <>
      <div
        className="pt-6 px-8"
        style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}
      >
        <h1 className="mb-4 pt-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
          My skills
          <span className="text-blue-600 dark:text-blue-500">.</span>{" "}
        </h1>

        <p className="text-lg mb-7 font-normal text-gray-500 sm:text-base lg:text-xl dark:text-gray-400">
          Here are some of the key skills I am acquainted with, demonstrating my
          expertise in web development, modern technologies, and building
          impactful applications with the latest tools and frameworks.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center flex-col sm:w-32 md:w-48 lg:w-56"
            >
              <img
                src={item.src}
                alt={item.tag}
                className="w-16 sm:w-26 md:w-28 lg:w-34"
              />
              <h5 className="mb-2 mt-4 text-sm sm:text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {item.tag}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
