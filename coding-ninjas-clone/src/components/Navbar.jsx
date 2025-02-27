import React from "react";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-white text-white fixed top-0 left-0 pl-72 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex py-6 justify-evenly items-center h-16">
        <img
          src="https://files.codingninjas.com/new-cn-logos-1-1733819445.svg"
          alt="Coding Ninjas Logo"
          className="mr-4"
        />
        <div className="group">
          <button className="dropdown-toggle px-4 py-2 ml-2 text-blue-950 font-bold rounded-md flex items-center hover:bg-gray-200 transition duration-300">
            Job Bootcamp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4 h-4 ml-2"
            >
              <path
                fill="currentColor"
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </button>

          <div className="absolute bg-white border border-gray-200 shadow-lg rounded-b-2xl mt-3 w-[450px] z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="px-7 py-3 ">
              <div className="px-2 py-4 text-lg text-gray-500">
                For graduates
              </div>
              <div className="pb-2 py-2 rounded-lg hover:bg-gray-100">
                <div className="flex px-4">
                  <img
                    src="https://files.codingninjas.com/layer-1-1734090969.svg"
                    alt="img"
                    className="shadow-lg w-14 h-14 mt-1 ml-1 px-2 py-1 rounded-lg"
                  />
                  <button
                    className="w-full text-left font-medium text-lg text-black px-6 py-0 hover:bg-gray-100"
                    onClick={() => onNavigate("Full Stack Development")}
                  >
                    Full Stack Web Development
                    <div className="px-0 pt-2 pb-5 text-sm text-blue-800">
                      Certified by Coding Ninjas
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-b"></div>
            <div className="px-7 py-2">
              <div className="py-0 rounded-lg hover:bg-gray-100">
                <div className="flex px-4">
                  <img
                    src="https://files.codingninjas.com/data-analytics-1-1734090968.svg"
                    alt="img"
                    className="shadow-lg w-14 h-14 ml-1 mt-1 px-2 py-1 rounded-lg"
                  />
                  <button
                    className="w-full text-left font-medium text-lg text-black px-6 py-1 hover:bg-gray-100"
                    onClick={() => onNavigate("Data Analytics")}
                  >
                    Data Analytics
                    <div className="px-0 pt-2 pb-6 text-sm text-blue-800">
                      Certified by Coding Ninjas
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group mr-80 relative">
          <button className="dropdown-toggle px-4 ml-10 py-2 text-blue-950 font-bold rounded-md flex items-center hover:bg-gray-200 transition duration-300">
            IIT Certifications
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4 h-4 ml-2"
            >
              <path
                fill="currentColor"
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </button>

          <div className="absolute flex flex-col bg-white border border-gray-200 shadow-lg rounded-2xl mt-3 w-screen h-[500px] invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="px-8 py-5 w-96 font-medium text-lg text-black">
              Category
            </div>
            <div className="space-y-2 group">
              <button type="button" className="w-50 flex text-left text-lg text-black px-8 py-3 rounded-md hover:bg-gray-200" data-bs-toggle="dropdown" aria-expanded="false">
                For graduates
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-3 h-3 mt-2 ml-20"
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              
              <div className="flex flex-row space-x-4 px-7 py-2">
              <div className="py-0 w-64 rounded-lg">
                <div className="flex px-4 hover:bg-gray-100 rounded-lg">
                  <img
                    src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                    alt="img"
                    className="shadow-lg w-10 h-10 ml-1 mt-5 px-2 py-1 rounded-lg"
                  />
                  <h className="text-left font-medium rounded-lg text-sm text-blue-800 px-6 py-3">
                    E&ICT Academy, IIT Guwahati
                    <p className="px-0 w-40 flex pt-2 pb-1 text-sm text-gray-700">
                      PG Certification in Data Analytics with GenAI
                    </p>
                  </h>
                </div>
              </div>
              
              <div className="w-64 py-0 rounded-lg">
                <div className="flex px-4 hover:bg-gray-100 rounded-lg">
                  <img
                    src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                    alt="img"
                    className="shadow-lg w-10 h-10 ml-1 mt-5 px-2 py-1 rounded-lg"
                  />
                  <h className="text-left font-medium rounded-lg text-sm text-blue-800 px-6 py-3">
                    E&ICT Academy, IIT Guwahati
                    <p className="w-40 px-0 flex pt-2 pb-1 text-sm text-gray-700">
                      PG Certification in Full Stack Web Development with GenAI
                    </p>
                  </h>
                </div>
              </div>
             
              <div className="w-64 py-0 rounded-lg">
                <div className="flex px-4 hover:bg-gray-100 rounded-lg">
                  <img
                    src="https://files.codingninjas.in/frame-1437253617-1736850284.webp"
                    alt="img"
                    className="shadow-lg w-10 h-10 ml-1 mt-5 px-2 py-1 rounded-lg"
                  />
                  <h className="text-left font-medium rounded-lg text-sm text-blue-800 px-6 py-3">
                     IITM Pravartak, TIH IIT Madras
                    <p className="w-40 px-0 flex pt-2 pb-1 text-sm text-gray-700">
                      Professional Certificate in Full Stack Web Development with GenAI
                    </p>
                  </h>
                </div>
              </div>
            </div> 
            </div>     

            <div className="space-y-2 dropend btn-group">
              <button type="button" className="w-50 flex text-left text-lg text-black px-8 py-3 rounded-md hover:bg-gray-200" data-bs-toggle="dropdown" aria-expanded="false">
                For college students
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-3 h-3 mt-2 ml-8"
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
             
              <div className="flex flex-row space-x-4 px-7 py-2">
              <div className="w-64 py-0 rounded-lg">
                <div className="flex px-4 hover:bg-gray-100 rounded-lg">
                  <img
                    src="https://files.codingninjas.in/frame-1437253617-1736850284.webp"
                    alt="img"
                    className="shadow-lg w-10 h-10 ml-1 mt-5 px-2 py-1 rounded-lg"
                  />
                  <h className="text-left font-medium rounded-lg text-sm text-blue-800 px-6 py-3">
                    IITM Pravartak, TIH IIT Madras
                    <p className="w-40 px-0 flex pt-1 pb-1 text-sm text-gray-700">
                    Training and Internship Certification in Advanced DSA
                    </p>
                  </h>
                </div>
              </div>
              
              <div className="w-64 py-0 rounded-lg">
                <div className="flex px-4 hover:bg-gray-100 rounded-lg">
                  <img
                    src="https://files.codingninjas.in/frame-1437253617-1736850284.webp"
                    alt="img"
                    className="shadow-lg w-10 h-10 ml-1 mt-5 px-2 py-1 rounded-lg"
                  />
                  <h className="text-left font-medium rounded-lg text-sm text-blue-800 px-6 py-3">
                    IITM Pravartak, TIH IIT Madras
                    <p className="w-40 px-0 flex pt-1 pb-1 text-sm text-gray-700">
                    Training and Internship Certification in Full Stack Web Development 
                    </p>
                  </h>
                </div>
              </div>
             
              <div className="w-64 py-0 rounded-lg">
                <div className="flex px-4 hover:bg-gray-100 rounded-lg">
                  <img
                    src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                    alt="img"
                    className="shadow-lg w-10 h-10 ml-1 mt-5 px-2 py-1 rounded-lg"
                  />
                  <h className="text-left font-medium rounded-lg text-sm text-blue-800 px-6 py-3">
                    E&ICT Academy, IIT Guwahati
                    <p className="w-40 px-0 flex pt-1 pb-1 text-sm text-gray-700">
                      Training and Internship Certification in Data Analytics
                    </p>
                  </h>
                </div>
              </div>
            </div>
              </div>

            
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => onNavigate("login")}
            className="cursor-pointer bg-[#f05537] hover:bg-orange-200 px-4 py-2 mr-52 rounded-lg transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
