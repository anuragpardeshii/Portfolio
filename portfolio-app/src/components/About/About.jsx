import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";  // Import axios

export default function About() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/files/Anurag-Pardeshi-Resume.pdf"; // Ensure this is in the public folder
    link.download = "Anurag-Pardeshi-Resume.pdf";
    link.click();
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    axios.post("https://portfolio-api-alpha-six.vercel.app/api/send", formData)
      .then(result => {
        console.log(result);
        setIsSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="pt-6" style={{ margin: "auto", maxWidth: "75rem", marginBottom: "10vh" }}>
      <h1 className="pt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        About me <span className="text-blue-600 dark:text-blue-500">.</span>
      </h1>
      <p className="text-lg pb-8 pt-8 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Proficient in developing responsive and dynamic web applications with the MERN stack. Experienced in creating intuitive user interfaces,
        efficient backend solutions, and solving coding challenges, delivering impactful projects that combine innovation, scalability, and
        exceptional user experiences.
      </p>

      <div className="flex flex-row gap-4 flex-wrap pt-8 pb-8 justify-center">
        <div className="flex flex-col gap-4">
          <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Info</h5>
            <p className="font-normal p-2 text-gray-700 dark:text-gray-400"><LocalPhoneIcon style={{ fontSize: "2rem" }} /> &nbsp; : &nbsp; +91-8435304050</p>
            <p className="font-normal p-2 text-gray-700 dark:text-gray-400"><EmailIcon style={{ fontSize: "2rem" }} /> &nbsp; : &nbsp; pardeshianurag22@gmail.com</p>
            <p className="font-normal p-2 text-gray-700 dark:text-gray-400"><LocationOnIcon style={{ fontSize: "2rem" }} /> &nbsp; : &nbsp; Indore</p>
          </div>

          <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Links</h5>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/pardeshianurag22" target="_blank" rel="noopener noreferrer"
                 className="p-1 bg-white border border-gray-200 rounded-lg shadow h-10 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <LinkedInIcon style={{ fontSize: "2rem", color: "#0A66C2" }} /> LinkedIn
              </a>
              <a href="https://github.com/anuragpardeshii" target="_blank" rel="noopener noreferrer"
                 className="p-1 bg-white border border-gray-200 rounded-lg shadow h-10 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <GitHubIcon style={{ fontSize: "2rem", color: "black" }} /> GitHub
              </a>
            </div>
          </div>

          <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resume</h5>
            <div className="flex items-center justify-center">
              <button onClick={handleDownload}
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-x-8">
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect with me</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Feel free to reach out through the form below for any inquiries, collaborations, or opportunities!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" name="email"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="name@company.com"
                     value={formData.email}
                     onChange={handleChange}
                     required/>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
              <input type="text" id="subject" name="subject"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Let us know how we can help you"
                     value={formData.subject}
                     onChange={handleChange}
                     required/>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" name="message" rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
