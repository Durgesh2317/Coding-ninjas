import React, { useState } from "react";

const StoriesSection = () => {
  const tabs = ["Non tech to tech", "Service to product", "Tier 2/3 colleges", "Job Bootcamp", "Upskilling Courses"];
  const stories = [
    {
      name: "Twisam", image: "https://files.codingninjas.com/nttot_twisampati-33030.png",
      role: "Full Stack Developer",
      description:
        "From optimist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!",
      post: "Post: Coding Ninjas",
      company: "Cogent e-Private ltd",
    },
    {
      name: "Onkar Lapote", image: "https://files.codingninjas.com/omkar_nt-to-tech-32743.png",
      role: "SDE 1",
      description:
        "Chose Coding Ninjas for structured, high-quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.",
      post: "Post: Coding Ninjas",
      company: "Bombay Softwares",
    },
    {
      name: "Durgesh Chaubey", image: "https://files.codingninjas.com/nt-to-t_durgesh-33026.png",
      role: "SDE 1",
      description:
        "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.",
      post: "Post: Coding Ninjas",
      company: "Microsoft",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <div className="relative bg-black opacity-90 text-white py-16">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6 mt-4">Stories from people like you</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                activeTab === index ? "bg-orange-500 text-white" : "bg-gray-900 text-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          className="text-orange-500 text-sm font-medium hover:underline bg-transparent border-none cursor-pointer"
          onClick={() => window.location.href = '/success-stories'}
        >
          Read all success stories →
        </button>
      </div>

      {/* Stories Section */}
      <div className="mt-8 flex justify-center space-x-6 px-4">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 w-80"
          >
          <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full mb-4" />
            <div className="flex items-center mb-4">
              <div className="ml-0">
                <h3 className="text-lg font-semibold">{story.name}</h3>
                <p className="text-sm text-orange-400">{story.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">{story.description}</p>
            <p className="text-xs text-gray-500">{story.post}</p>
            {story.company && (
              <p className="text-xs text-orange-400 mt-1">{story.company}</p>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center mb-10">
      <button className="flex ml-auto mr-auto items-center mt-20 mb-40 bg-[#f05537] hover:bg-orange-200 text-white font-bold px-8 py-4 rounded-md shadow-md transition">
          Explore offerings<svg className="fill-white w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>
        </button>
        <div className="mt-8 text-sm text-gray-400">
          <p>1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+ colleges working in top product companies</p>
          <div className="flex justify-center space-x-6 mt-4">
            <div>
              <p className="text-orange-500 font-semibold">4.9 ★</p>
              <p>700+ reviews</p>
            </div>
            <div>
              <p className="text-orange-500 font-semibold">4.7 ★</p>
              <p>2300+ reviews</p>
            </div>
            <div>
              <p className="text-orange-500 font-semibold">4.8 ★</p>
              <p>Course rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="text-white bg-black pl-80 py-16">
      <img src="https://files.codingninjas.com/frame-1000003333-1-32217.svg" alt="icon" className="mr-10 relative right-12 -bottom-8" />
        <h2 className="text-xl font-bold mb-12">Always available when you get stuck</h2>
        <p className="text-3xl py-2 font-bold text-gray-600 mb-10 hover:text-yellow-600 max-w-2xl hover:text-4xl">Resolve doubts any time through chat, voice notes or video calls.</p>
        <p className="text-3xl font-bold text-gray-600 mb-10 hover:text-yellow-600 max-w-2xl hover:text-4xl">500+ dedicated Teaching Assistants to resolve your doubts quickly</p>
        <p className="text-3xl font-bold text-gray-600 hover:text-yellow-600 max-w-2xl hover:text-4xl">5/5 rating for 90% doubt resolutions</p>
      </div>
      </>
  );
};

export default StoriesSection;