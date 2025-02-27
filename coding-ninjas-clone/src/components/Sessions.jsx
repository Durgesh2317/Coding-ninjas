import React from 'react';


function Sessions() {
    const sessions = [
        {
            name: "Ankush Singla", img: "https://files.codingninjas.com/ankush-33190.webp",
            title: "Co-Founder & Instructor",
            expertise: [
              "Basics of C++ with DSA",
              "Data Science & Machine Learning",
              "Competitive Programming"
            ],
            linkedinProfile: "https://www.linkedin.com/in/ankush-singla-b772a191/" 
          },
          {
            name: "Parikh Jain", img: "https://files.codingninjas.com/parekh-33195.webp",
            title: "Instructor & Founding Member",
            expertise: [
              "Basics of Python with DSA",
              "Competitive Programming"
            ],
            linkedinProfile: "https://www.linkedin.com/in/parikh-jain-123/" // Replace with actual URL
          },
          {
            name: "Nidhi Agarwal", img: "https://files.codingninjas.com/nidhi-33194.webp",
            title: "Founding Member & Product Manager",
            expertise: [
              "Data Science & Machine Learning",
              "Data Analytics Course"
            ],
            linkedinProfile: "https://www.linkedin.com/in/nidhi-agarwal-123/" // Replace with actual URL
          },
          {
            name: "Manisha Khattar", img: "https://files.codingninjas.com/manisha-33193.webp",
            title: "Instructor& Founding Member at Coding Ninjas",
            expertise: [
              "Basics of Java with DSA Product Companies Interview Prep",
              "Data Analytics Course"
            ],
            linkedinProfile: "https://www.linkedin.com/in/Manisha-Khattar-123/" // Replace with actual URL
          },
          {
            name: "Soham Mukherjee", img: "https://files.codingninjas.com/soham-33196.webp",
            title: "Instructor",
            expertise: [
              "Competitive Programming Basics of Python with DSA",
              "Data Analytics Course"
            ],
            linkedinProfile: "https://www.linkedin.com/in/soham-mukherjee-123/" // Replace with actual URL
          },
          {
            name: "Falak Chandani", img: "https://files.codingninjas.com/falak-33192.webp",
            title: "Instructor",
            expertise: [
              "Mern Stack",
              "Advanced Front-End Web Development Course - React.js"
            ],
            linkedinProfile: "https://www.linkedin.com/in/Falak-Chandani-123/" // Replace with actual URL
          },
          {
            name: "Dheeraj Kumar", img: "https://files.codingninjas.com/dheeraj-33191.webp",
            title: "Instructor",
            expertise: [
              "Mern Stack",
              "Advanced Front-End Web Development Course - React.js"
            ],
            linkedinProfile: "https://www.linkedin.com/in/Dheeraj-Kumar-123/" // Replace with actual URL
          },
          {
            name: "Rudraksh Goyal", img: "https://files.codingninjas.com/news_ted-33207.webp",
            title: "Instructor",
            expertise: [
              "Mern Stack",
              "Advanced Front-End Web Development Course - React.js"
            ],
            linkedinProfile: "https://www.linkedin.com/in/Rudraksh-Goyal-123/" // Replace with actual URL
          }
        ];
  return (
    <section className="max-w-4xl m-auto p-8">
    <img src="https://files.codingninjas.com/frame-1000003333-5-32272.svg" alt="icon" className='relative -bottom-9 right-12' />
      <h2 className="text-2xl font-bold mb-4">1:1 Mentorship sessions</h2>
      <p className="text-lg text-gray-600 mb-12">Personalized guidance to prepare you for your interview needs</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-0 rounded-lg shadow">
        <img src="https://files.codingninjas.com/mock-interview-32171.webp" alt="icon" />
        <div className='pl-2 mb-3'>
          <h3 className="text-xl font-semibold mt-3 mb-4">Mock Interview</h3>
          <p className='mb-4'>Nail coding assessments and technical challenges.</p>
          <p>Gain insights into problem-solving and algorithmic thinking.</p>
          </div>
        </div>

        <div className="bg-white p-0 rounded-lg shadow">
        <img src="https://files.codingninjas.com/profile-review-32172.webp" alt="icon" />
        <div className='pl-2 mb-3'>
          <h3 className="text-xl font-semibold mt-3 mb-4">Profile Review</h3>
          <p className='mb-4'>Get your profile & resume reviewed by industry leaders.</p>
          <p>Focus on different aspects of your job search.</p>
          </div>
        </div>

        <div className="bg-white p-0 rounded-lg shadow">
        <img src="https://files.codingninjas.com/project-guidance-32173.webp" alt="icon" />
        <div className='pl-2 mb-3'>
          <h3 className="text-xl font-semibold mt-1 mb-4">Project Guidance</h3>
          <p className='mb-4'>Career counseling with industry experts.</p>
          <p>Get assistance on how to build real-time projects.</p>
          </div>
        </div>
      </div>

      <section className="mt-12 p-8 overflow-x-auto">
      <img src="https://files.codingninjas.com/frame-1000003333-7-32274.svg" alt="icon" className='relative -bottom-9 right-12' />
      <h2 className="text-2xl font-bold mb-28">Faculty that brings out the best in you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sessions.map(member => (
          <div key={member.name} className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <img src={member.img} alt={member.name} className='w-20 h-20 rounded-full mb-3 flex flex-col items-center' />
            <h3 className="text-xl font-semibold mb-2 flex flex-col items-center">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-4 flex flex-col items-center">{member.title}</p>
            <ul className="list-disc list-inside">
              {member.expertise.map(expertise => (
                <li key={expertise}>{expertise}</li>
              ))}
            </ul>
            <a href={member.linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-3 flex flex-col items-center hover:underline">
              Linkedin profile →
            </a>
          </div>
        ))}
      </div>
    </section>      
    </section>
  );
}

export default Sessions;