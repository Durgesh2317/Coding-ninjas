import React from "react";
import { useState, useRef } from "react";

const WhyUs = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const handleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      } 
    };
    return (
        <>
        <div className="bg-gray-900 text-gray-500 h-full flex flex-col justify-center items-center">
        <div className="h-28 max-w-4xl mt-32 ml-20 text overflow-hidden w-full text-center">
        <h1 className="text-5xl font-bold absolute">
          <img src="https://files.codingninjas.com/why-us2-33889.svg" alt="why us" className="mr-5" />
        </h1>
        </div>
        <div className="flex mb-16 mt-32 mr-96 border border-gray-500 rounded-md backdrop-filter backdrop-blur-md bg-[#2d2d2d] h-90 py-1 w-80 flex-col">
        <video ref={videoRef} src="https://files.codingninjas.com/1-1-doubt-support-with-subtitle-2-33136.mp4" autoPlay loop
          className="w-full h-96 px-3 rounded-xl"></video>
          <button
          onClick={handleMute}
          className="absolute top-12 right-4 bg-gray-800 bg-opacity-75 p-3 rounded-full text-white hover:bg-opacity-100"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
       
          <h2 className="text-xl text-orange-500 font-semibold mt-5 ml-2">Ankush Singla</h2>
        <p className="text-sm font-medium mt-1 ml-2 mb-2 text-white">
          Co-Founder of Coding Ninjas | Mentor
        </p>
        </div>
        <div className="flex flex-col gap-12 text-white font-semibold absolute mt-80 ml-96">
        <div className="flex items-center justify-center w-64 border border-gray-500 rounded-md hover:bg-[#2d2d2d]">
        <img src="https://files.codingninjas.com/live-one-one-doubt-support-32931.png" alt="icon" className="flex w-10 h-10 justify-center" />
          <h2 className="text-sm font-semibold p-4">Fastest 1:1 doubt support</h2>
          </div>
          <div className="flex items-center justify-center w-64 border border-gray-500 rounded-md hover:bg-[#2d2d2d]">
          <img src="https://files.codingninjas.com/stanford-iit-maang-faculty-32934.png" alt="icon" className="flex w-10 h-10 justify-center" />
          <h2 className="text-sm font-semibold px-2 py-4">Stanford/IIT/MAANG faculty</h2>
          </div>
          <div className="flex items-center justify-center w-64 border border-gray-500 rounded-md hover:bg-[#2d2d2d]">
          <img src="https://files.codingninjas.com/placement-assistance-32933.png" alt="icon" className="flex w-10 h-10 justify-center" />
          <h2 className="text-sm font-semibold px-3 py-4 mr-6">Placement assistance</h2>
          </div>
          </div>
          </div>
      

      <div> <img src="https://files.codingninjas.com/coding-ninja-advantage-33059.svg" alt="icon" className="absolute w-full" />
      <div className="relative w-96 px-84 py-6 h-screen m-auto">
      <h2 className="text-center text-lg pt-32 text-[#0047ff] font-bold mb-6">
        The Coding Ninjas advantage
      </h2>
      <div className="relative bg-[transparent] my-16 py-6 border border-gray-700 rounded-xl">
        <table className="table-auto w-full h-96">
          <thead>
            <tr>
              <th className="icon"><img className="w-10 ml-4 h-10" src="https://dmmy6mpbxgeck.cloudfront.net/68b82ab2-3e36-4428-aa21-6e5e2cd407c5/widget/8f96fa5f-3a91-4de7-8881-c62376b37acf" alt="icon" /></th>
              <th className="px-4 py-2">Coding Ninjas</th>
              <th className="px-4 py-2">Other Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-400">
              <td className="px-4 py-2">Structured + Problem Solving Based</td>
              <td className="px-4 py-2 text-center">✔</td>
              <td className="px-4 py-2 text-center">❌</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Fastest 1:1 Doubt Support</td>
              <td className="px-4 py-2 text-center">✔</td>
              <td className="px-4 py-2 text-center">❌</td>
            </tr>
            <tr className="bg-gray-400">
              <td className="px-4 py-2">Integrated Prep Platform</td>
              <td className="px-4 py-2 text-center">✔</td>
              <td className="px-4 py-2 text-center">❌</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Profiles Highlighted on Naukri</td>
              <td className="px-4 py-2 text-center">✔</td>
              <td className="px-4 py-2 text-center">❌</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div className="relative left-0 mt-6">
      <img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="icon" className="absolute left-96" />
        <div className="flex items-center absolute right-10 ml-20">
          <span className="text-sm mr-72 text-orange-700">Your dream role, faster and with confidence! <img src="https://files.codingninjas.com/fi_3649458-32034.svg" alt="icon" className="w-6 ml-4 left-64 relative bottom-5" /></span>
          </div>
            <div className="bg-purple-600 h-2 mt-10 ml-96 mr-auto block w-1/2 absolute"></div>
            <div className="flex items-center text-white relative pt-20 ml-96">Others</div>
          <div className="flex items-center absolute -bottom-3 right-80">
          <span className="text-sm text-gray-500">Average role, under-confident</span>
          </div>
          <div className="bg-gray-600 h-2 mt-5 ml-96 mr-auto block w-1/3 absolute"></div>
        </div>
      </div>
      <div className="relative text-center">
        <button className="flex ml-auto mr-auto items-center mt-40 mb-20 bg-[#f05537] hover:bg-orange-200 text-white font-bold px-8 py-4 rounded-md shadow-md transition">
          Explore offerings<svg className="fill-white w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>
        </button>
      </div>
      
      <CompaniesSection />
      </>
  );
};


const CompaniesSection = () => {
  const companies = [
    { name: "Citibank", image: "https://files.codingninjas.com/ruchika_citi_bank-32691.png", role: "Non-CS/IT" },
    { name: "Optum", image: "https://files.codingninjas.com/naveen_optum-32719.png", role: "Non-CS/IT" },
    { name: "Uber", image: "https://files.codingninjas.com/sonu_uber-32695.png", role: "Tier 2/3 college" },
    { name: "Microsoft", image: "https://files.codingninjas.com/shourya_microsoft-32693.png", role: "CS/IT" },
    { name: "Persistent", image: "https://files.codingninjas.com/pradeep_persistent-32689.png", role: "Tier 2/3 college" },
    { name: "Media.net", image: "https://files.codingninjas.com/tanmay_media-32697.png", role: "Tier 2/3 college" },
    { name: "calsoft", image: "https://files.codingninjas.com/aikansh_calsoft-32725.png", role: "Service to product" },
    { name: "Paypal", image: "https://files.codingninjas.com/amitesh_paypal-32683.png", role: "CS/IT" },
    { name: "Google", image: "https://files.codingninjas.com/kashish_google-32687.png", role: "CS/IT" },
    { name: "aws", image: "https://files.codingninjas.com/yash_aws-32699.png", role: "Service to product" },
  ];

  return (
    <div className="bg-white py-16 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl mt-32 font-semibold text-gray-800">Our Ninjas at top tech companies</h2>
        <button
          className="text-orange-500 text-sm font-medium hover:underline inline-block mt-10 ml-auto"
          onClick={() => { /* handle click event here */ }}
        >
          Download placement report
        </button>
      </div>

      {/* Scrolling Section */}
      <div className="relative overflow-hidden w-full max-w-[800px] mx-auto">
        <div className="flex animate-scroll space-x-2">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white shadow-lg w-40 h-40 rounded-lg p-4 text-center hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-sm font-semibold text-gray-700">{company.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{company.role}</p>
            </div>
          ))}
        </div>
      </div>
      <img src="https://files.codingninjas.com/frame-1000003621-1-32257.webp" alt="icon" className="w-[100%] h-[40%] mt-12" />
    </div>
  );
};

export default WhyUs;