export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            aria-label="Flowbite homepage"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Anurag Pardeshi's Portfolio
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            Developed by &nbsp;
              <a href="www.linkedin.com/in/pardeshianurag22" className="hover:underline mr-4 md:mr-6">
                Anurag Pardeshi
              </a>
            
            
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Resume™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
