import React from "react";

const Offerings = () => {
  return (
    <div className="bg-gray-50 mx-auto text-gray-300 py-12 font-sans">
      <div className="container px-4">
        {/* Title */}
        <h1 className="text-7xl font-bold text-center text-gray-300 mb-16">
          OUR OFFERINGS
        </h1>
      
        {/* Job Bootcamp Section */}
        <div className="mb-16 ml-96">
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-3xl font-semibold text-black">Job Bootcamp</h2>
            <span className="text-sm bg-blue-100 font-medium text-black px-4 py-1 rounded-r-lg">
              For graduates
            </span>
          </div>
          <div className="flex gap-8">
            {/* Card 1 */}
            <div className="p-0 max-w-md shadow-md rounded-2xl border border-gray-100">
            <div className="px-9 py-9 flex items-center bg-blue-50">
              <img
                src="https://files.codingninjas.com/layer-1-1734090969.svg"
                alt="Full Stack Development"
                className="flex w-16 h-16 rounded-full bg-white px-3 py-2"
              />
              <h3 className="flex px-3 py-2 text-xl font-bold text-gray-800 mb-3">
                Full Stack Web Development with GenAI
              </h3>
              </div>
              <div className="bg-white flex px-4 items-center pt-4">
              <ul className="text-sm flex gap-12 text-black mb-5">
                <li>140+ hrs of content</li>
                <li>600+ Problems</li>
                <li>10k+ Learners</li>
              </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-0 max-w-md shadow-md rounded-2xl border border-gray-100">
            <div className="px-9 py-9 flex items-center bg-blue-50">
              <img
                src="https://files.codingninjas.com/data-analytics-1-1734090968.svg"
                alt="Data Analytics"
                className="flex w-16 h-16 rounded-full bg-white px-3 py-2"
              />
              <h3 className="flex px-5 py-5 text-xl font-bold text-gray-800 mb-3">
                Data Analytics with GenAI
              </h3>
              </div>
              <div className="bg-white flex px-4 items-center pt-4">
              <ul className="text-sm flex gap-12 text-black mb-5">
                <li>100+ hrs of content</li>
                <li>300+ Problems</li>
                <li>2000+ Learners</li>
              </ul>
              </div>
            </div>
          </div>
        </div>

        {/* IT Certifications Section */}
        <div>
          <div className="flex items-center ml-96 space-x-4 mb-6">
            <h2 className="text-3xl mb-4 font-semibold text-gray-800">
              IIT Certifications
            </h2>
          </div>
            <span className="text-sm font-semibold px-4 py-1 bg-red-900 text-white rounded-full ml-96">
            For graduates
            </span>
          <div className="flex justify-center mt-4 mb-10 mr-32 gap-5 md:grid-cols-2">
            {/* Card 1 */}
            <div className="p-6 w-72 h-96 mt-3 bg-white shadow-md rounded-lg border border-gray-400">
              <img src="https://files.codingninjas.in/frame-2087323803-1731448120.svg" alt="Pg logo"
              className="bg-white mt-28 ml-2 w-15 absolute px-1 py-1 object-cover rounded-md border border-gray-200" />
              <img
                src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                alt="PG Certification"
                className="w-full h-36 object-cover rounded-md"
              />
              <h3 className="text-sm font-bold mt-5 text-gray-800 mb-4">
                PG Certification in Data Analytics with GenAI
              </h3>
              <p className="text-sm mt-9 mb-2 text-gray-600">
                E&ICT Academy, IIT Guwahati
              </p>
              <div className="border-b mt-6"></div>
              <div className="flex items-center mt-7">
                <img src="https://files.codingninjas.com/chatgpt-home-page-v3-1733408297.webp" className="w-5" alt="chatgpt" />
                <img src="https://files.codingninjas.com/home-page-v3-app-1733395395.svg" className="w-5 ml-1" alt="meta" />
                <img src="https://files.codingninjas.com/google-analytics-1733395394.svg" className="w-5 ml-1" alt="analytics" />
                <p className="text-sm font-medium ml-24 text-gray-700">6 months</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-6 w-72 h-96 mt-3 bg-white shadow-md rounded-lg border border-gray-400">
              <img src="https://files.codingninjas.in/frame-1437253617-1736850284.webp" alt="web dev"
              className="bg-white mt-28 ml-2 absolute w-10 px-1 py-1 object-cover rounded-md border border-gray-200" />
              <img
                src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                alt="Advanced DSA"
                className="w-full h-36 object-cover rounded-md"
              />
              <h3 className="text-sm font-bold mt-5 text-gray-800 mb-4">
              PG Certification in Full Stack Web Development with Generative AI
              </h3>
              <p className="text-sm mt-9 mb-2 text-gray-600">IITM Pravartak</p>
              <div className="border-b mt-6"></div>
              <div className="flex items-center mt-6">
                <img src="https://files.codingninjas.com/image-7-1733478713.webp" className="w-5" alt="icon" />
                <img src="https://files.codingninjas.com/image-8-1733478712.webp" className="w-5 ml-2" alt="icon" />
                <img src="https://files.codingninjas.com/image-9-1733478711.webp" className="w-5 ml-2" alt="icon" />
                <img src="https://files.codingninjas.com/image-591-1733478709.webp" className="w-5 ml-2" alt="icon" />
                <p className="text-sm font-medium ml-16 text-gray-700">9 months</p>
              </div>
            </div>
           </div>
        
            <span className="text-sm font-semibold px-4 py-1 bg-red-900 text-white rounded-full ml-96">
            For college students
            </span>
          <div className="flex justify-center mt-6 ml-44 mb-10 gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <div className="p-6 w-72 h-96 bg-white shadow-md rounded-lg border border-gray-400">
              <img src="https://files.codingninjas.in/frame-2087323803-1731448120.svg" alt="Pg logo"
              className="bg-white mt-28 ml-2 absolute w-15 px-1 py-1 object-cover rounded-md border border-gray-200" />
              <img
                src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                alt="PG Certification"
                className="w-full h-36 object-cover rounded-md"
              />
              <h3 className="text-sm mt-5 font-bold text-gray-800 mb-4">
              Training and Internship Certification in Advanced DSA
              </h3>
              <p className="text-sm mt-9 mb-2 text-gray-600">
                IITM Pravartak
              </p>
              <div className="border-b mt-6"></div>
              <div className="flex items-center mt-6">
              <img src="https://files.codingninjas.com/image-7-1733478713.webp" className="w-5" alt="icon" />
                <img src="https://files.codingninjas.com/image-8-1733478712.webp" className="w-5 ml-2" alt="icon" />
                <img src="https://files.codingninjas.com/image-9-1733478711.webp" className="w-5 ml-2" alt="icon" />
                <img src="https://files.codingninjas.com/image-591-1733478709.webp" className="w-5 ml-2" alt="icon" />
                <p className="text-sm ml-16 font-medium text-gray-700">4 months</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-6 w-72 h-96 bg-white shadow-md rounded-lg border border-gray-400">
              <img src="https://files.codingninjas.in/frame-1437253617-1736850284.webp" alt="analytics"
              className="bg-white mt-28 ml-2 absolute w-10 px-1 py-1 object-cover rounded-md border border-gray-200" />
              <img
                src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                alt="Data Analytics"
                className="w-full h-36 object-cover rounded-md"
              />
              <h3 className="text-sm font-bold mt-5 text-gray-800 mb-4">
                Training and Internship Certification in Data Analytics
              </h3>
              <p className="text-sm mt-9 mb-2 text-gray-600">E&ICT Academy, IIT Guwahati</p>
              <div className="border-b mt-6"></div>
              <div className="flex items-center mt-6">
                <img src="https://files.codingninjas.com/microsoft-excel-1727278090.webp" className="w-5" alt="excel" />
                <img src="https://files.codingninjas.com/mysql-1727278092.webp" className="w-5 ml-2" alt="sql" />
                <img src="https://files.codingninjas.com/python-1727278094.webp" className="w-5 ml-2" alt="python" />
                <img src="https://files.codingninjas.com/power-bi-1727278093.webp" className="w-5 ml-2" alt="power" />
                <p className="text-sm ml-16 font-medium text-gray-700">6 months</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-6 w-72 h-96 bg-white shadow-md rounded-lg border border-gray-400">
              <img src="https://files.codingninjas.in/frame-1437253617-1736850284.webp" alt="web dev" 
              className="bg-white mt-28 ml-2 absolute w-10 px-1 py-1 object-cover rounded-md border border-gray-200" />
              <img
                src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                alt="Full Stack Web Development"
                className="w-full h-36 object-cover rounded-md"
              />
              <h3 className="text-sm font-bold mt-4 text-gray-800 mb-4">
                Training and Internship Certification in Full Stack Web Development
              </h3>
              <p className="text-sm mt-5 mb-2 text-gray-600">IITM Pravartak</p>
              <div className="border-b mt-6"></div>
              <div className="flex items-center mt-6">
              <img src="https://files.codingninjas.com/image-7-1733478713.webp" className="w-5" alt="icon" />
                <img src="https://files.codingninjas.com/image-8-1733478712.webp" className="w-5 ml-2" alt="icon" />
                <img src="https://files.codingninjas.com/image-9-1733478711.webp" className="w-5 ml-2" alt="icon" />
                <img src="https://files.codingninjas.com/image-591-1733478709.webp" className="w-5 ml-2" alt="icon" />
                <p className="text-sm ml-16 font-medium text-gray-700">6 months</p>
              </div>
            </div>
          </div>
              <div className="w-full h-36 object-cover rounded-md">
                <img src="https://files.codingninjas.com/mask-group-from-home-page-v3-1733399273.webp" alt="bg" />
              </div>
        </div>
      </div>
    </div>
  );
  
};

export default Offerings;