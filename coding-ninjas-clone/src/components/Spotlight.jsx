import React from "react";

const Spotlight = () => {
        return (
            <div className="bg-pink-100 min-h-screen">
            <img src="https://files.codingninjas.com/frame-1000003333-2-32237.svg" alt="icon" className="relative -bottom-12 ml-80 items-center" />
            <h2 className="text-xl font-bold ml-96 mb-10 p-4">Coding Ninjas in Spotlight</h2>
        
              {/* Middle Section with Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                {/* Article 1 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <img src="https://files.codingninjas.com/cxo-33141.png" alt="CXO Today Logo" className="w-20 h-8" />
                  <h3 className="text-xl font-bold mb-2">Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase</h3>
                  <p className="text-gray-600">
                    This article discusses the success of Coding Ninjas in upskilling 1 lakh students and the significant salary increase they achieved.
                  </p>
                </div>
        
                {/* Article 2 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <img src="https://files.codingninjas.com/hindustan-times-33144.png" alt="Hindustan Times Logo" className="w-20 h-8" />
                  <h3 className="text-xl font-bold mb-2">Sustainable development through upskilling: India's engineering renaissance</h3>
                  <p className="text-gray-600">
                    This article explores the role of upskilling in sustainable development and its impact on India's engineering sector.
                  </p>
                </div>
        
                {/* Article 3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <img src="https://files.codingninjas.com/the-hindu-33146.png" alt="The Hindu Logo" className="w-20 h-8" />
                  <h3 className="text-xl font-bold mb-2">Women in tech earn 7% more than men on average but men snag the highest salaries</h3>
                  <p className="text-gray-600">
                    This article highlights the gender pay gap in the tech industry, emphasizing the need for equal opportunities.
                  </p>
                </div>
        
                {/* Article 4 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <img src="https://files.codingninjas.com/economic-times-33143.png" alt="icon" className="w-20 h-8" />
                  <h3 className="text-xl font-bold mb-2">Tech grads sign up for bootcamps' to be more employable</h3>
                  <p className="text-gray-600">
                    This article discusses the increasing trend of tech graduates enrolling in bootcamps to enhance their employability.
                  </p>
                </div>
        
                {/* Article 5 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <img src="https://files.codingninjas.com/the-times-of-india-33147.png" alt="icon" className="w-20 h-8" />
                  <h3 className="text-xl font-bold mb-2">Young professionals must embrace continuous upskilling in the age of AI</h3>
                  <p className="text-gray-600">
                    This article emphasizes the importance of continuous learning and upskilling in the era of artificial intelligence.
                  </p>
                </div>
        
                {/* Article 6 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                <img src="https://files.codingninjas.com/money-control-33145.png" alt="icon" className="w-20 h-8" />
                  <h3 className="text-xl font-bold mb-2">Generative AI courses in high demand as more Indians flock to upskilling platforms</h3>
                  <p className="text-gray-600">
                    This article highlights the growing demand for generative AI courses as more Indians seek to upskill in this emerging field.
                  </p>
                </div>
                <div className="w-full relative bottom-0 mt-20 left-96 ml-44 cursor-pointer">
                    <img src="https://files.codingninjas.com/news_ted-33207.webp" alt="icon" />
                </div>
              </div>
                <div className="relative bottom-28 border border-gray-300 flex flex-row items-center gap-20 mt-80 ml-32 mr-32 p-8 rounded-xl">
        <img src="https://files.codingninjas.com/10920-sunrise-mentors-private-limited-coding-ninjas-_11zon-1714543245.webp" alt="icon" className="w-80 rounded-lg" />
        <p>We are an approved training partner of NSDC under their scheme for market led fee-based services </p>
    </div>
            </div>
          );
        };

export default Spotlight;