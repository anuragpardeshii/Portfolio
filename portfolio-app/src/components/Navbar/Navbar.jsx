import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { useState, useEffect } from "react";
import Portfolio from "/src/assets/Images/portfolio.png"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/files/Anurag-Pardeshi-Resume.pdf";
    link.download = "Anurag-Pardeshi-Resume.pdf";
    link.click();
  };

  // Function to handle scroll event and update active link
  const handleScroll = () => {
    const sections = ["home", "about", "experience", "skills", "projects"];
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (
        element &&
        scrollY >= element.offsetTop - 100 &&
        scrollY < element.offsetTop + element.offsetHeight - 100
      ) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    // Add event listener on scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []);

  // Function to apply active class based on the current section
  const isActive = (section) =>
    activeSection === section ? "text-blue-700" : "text-gray-900";

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={Portfolio}
            alt="Portfolio_img"
            style={{ height: "2rem", padding: "0 1rem" }}
          />
          Portfolio
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={`block py-2 px-3 md:p-0 ${isActive("home")} rounded`}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`block py-2 px-3 md:p-0 ${isActive(
                  "about"
                )} rounded`}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className={`block py-2 px-3 md:p-0 ${isActive(
                  "experience"
                )} rounded`}
              >
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className={`block py-2 px-3 md:p-0 ${isActive(
                  "skills"
                )} rounded`}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`block py-2 px-3 md:p-0 ${isActive(
                  "projects"
                )} rounded`}
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
