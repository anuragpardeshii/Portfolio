import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function About() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/files/Anurag-Pardeshi-Resume.pdf"; // Ensure this is in the public folder
    link.download = "Anurag-Pardeshi-Resume.pdf"; // Name of the file after download
    link.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Show loading indicator or disable the button

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        alert("Email successfully sent!");
        event.target.reset(); // Optionally reset the form
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <div className="pt-6" style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}>
      <div>
        <h1 className="pt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About me <span className="text-blue-600 dark:text-blue-500">.</span>
        </h1>
        <p className="text-lg pb-8 pt-8 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Proficient in developing responsive and dynamic web applications with the MERN stack. Experienced in creating intuitive user
          interfaces, efficient backend solutions, and solving coding challenges, delivering impactful projects that combine innovation,
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
              <LocalPhoneIcon style={{ fontSize: "2rem" }} /> &nbsp; : &nbsp; +91-8435304050
            </p>
            <p className="font-normal p-2 text-gray-700 dark:text-gray-400">
              <EmailIcon style={{ fontSize: "2rem" }} /> &nbsp; : &nbsp; pardeshianurag22@gmail.com
            </p>
            <p className="font-normal p-2 text-gray-700 dark:text-gray-400">
              <LocationOnIcon style={{ fontSize: "2rem" }} /> &nbsp; : &nbsp; Indore
            </p>
          </a>

          <a className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Social Links
            </h5>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <div className="p-1 bg-white border border-gray-200 rounded-lg shadow h-10 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="https://www.linkedin.com/in/pardeshianurag22" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon style={{ fontSize: "2rem", color: "#0A66C2" }} /> Linkedin
                </a>
              </div>
              <div className="p-1 bg-white border border-gray-200 rounded-lg shadow h-10 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="https://github.com/anuragpardeshii" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{ fontSize: "2rem", color: "black" }} /> GitHub
                </a>
              </div>
            </div>
          </a>

          <a className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Resume
            </h5>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-x-8"
                onClick={handleDownload}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
            Feel free to reach out through the form below for any inquiries, collaborations, or opportunities!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="mb-6">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </a>
      </div>
    </div>
  );
}
