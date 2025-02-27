import React from "react";

const Careers = () => {
    return (
        <div className=" bg-gray-900 text-gray-500 h-full flex flex-col justify-center items-center">
        <div className="h-28 max-w-4xl mt-40 ml-28 text overflow-hidden w-full text-center">
        <h1 className="text-5xl font-bold absolute scale-100 transition-transform duration-200 ease-in-out hover:text-white hover:scale-110">
          9 years of shaping tech careers
        </h1>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <h2 className="text-4xl font-semibold mt-28 mr-4 transition-all duration-200 ease-in-out hover:text-5xl">1.5 Lac+ learners</h2>
        <p className="text-2xl mt-4 max-w-4xl text-gray-600 text-center transition-all duration-200 ease-in-out">
          cracked dream roles at top tech companies
        </p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <h2 className="text-4xl font-semibold mt-28 mr-4 transition-all duration-200 ease-in-out hover:text-5xl">1,400 Alumni in MAANG</h2>
        <p className="text-2xl mt-4 max-w-4xl text-gray-600 text-center transition-all duration-200 ease-in-out">
          & more in 103/111 Unicorns
        </p>
        </div>
        <div className="flex flex-col items-center mt-28 hover:text-white">
          <h2 className="text-4xl font-semibold mr-4 transition-all duration-200 ease-in-out hover:text-5xl">1 Cr+ highest CTC</h2>
        <p className="text-2xl mt-4 max-w-4xl text-gray-600 text-center transition-all duration-200 ease-in-out">
          after completing the course
        </p>
        </div>
        <div className="flex flex-col items-center mt-28 hover:text-white">
          <h2 className="text-4xl font-semibold mr-4 transition-all duration-200 ease-in-out hover:text-5xl">128% average hike</h2>
        <p className="text-2xl mt-4 max-w-4xl text-gray-600 text-center transition-all duration-200 ease-in-out">
          via our placement cell
        </p>
        </div>
     <button className="flex ml-auto mr-auto items-center mt-10 mb-20 bg-[#f05537] hover:bg-orange-200 text-white font-bold px-8 py-4 rounded-md shadow-md transition">Explore offerings <svg className="fill-white w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg></button>
      </div>
    );
}
export default Careers;