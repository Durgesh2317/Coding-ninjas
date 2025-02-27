import React, { useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="bg-black -z-10 opacity-90 py-3 px-4 min-h-screen text-center text-white">
      <div className="flex justify-center items-center pt-36">
        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent animate-ShineAnimation">
          Restricted by Opportunities?
        </h2>
      </div>
      <h1 className="text-white inline-block w-74 px-56 text-8xl font-bold mb-7">Get the tech career you deserve. Faster.</h1>
      <p className="text-lg text-gray-400 mb-10">Structured coding courses that get you there faster with confidence.</p>
      <button className="flex ml-auto mr-auto items-center mb-20 bg-[#f05537] hover:bg-orange-200 text-white font-bold px-8 py-4 rounded-md shadow-md transition">Explore offerings <svg className="fill-white w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></button>
      <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative overflow-hidden border border-gray-900 w-2/3 h-2/3 object-cover rounded-lg md:w-2/3 lg:w-1/2">
        <video
          ref={videoRef}
          className="w-full h-full"
          src="https://files.codingninjas.com/hotstar-promo-1712578725.mp4" autoPlay loop
        />
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 p-4 rounded-full text-white hover:bg-opacity-100"
        >
          {isPlaying ? "⏸" : "▶️"}
        </button>
        {/* Volume Button */}
        <button
          onClick={handleMute}
          className="absolute top-12 right-4 bg-gray-800 bg-opacity-75 p-3 rounded-full text-white hover:bg-opacity-100"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Hero;