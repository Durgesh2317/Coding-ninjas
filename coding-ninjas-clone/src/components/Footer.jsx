import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 m-auto text-white px-96 py-20">
      <div className="container mx-auto grid grid-cols-1 pl-2 md:grid-cols-4 gap-16">
        <div>
          <img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="Coding Ninjas Logo" className="w-32" />
          <h3 className="text-md font-semibold mt-4 cursor-pointer">Contact us</h3>
          <img src="https://files.codingninjas.com/phone-31845.svg" alt="icon" className='w-5 relative -bottom-6 right-6' />
          <p className='hover:text-gray-600 cursor-pointer'>1800-123-3598</p>
          <img src="https://files.codingninjas.com/email-fill-31846.svg" alt="icon" className='w-5 relative -bottom-6 right-6' />
          <a href="mailto:contact@codingninjas.com" className="text-blue-500 hover:text-gray-600 cursor-pointer">
            contact@codingninjas.com
          </a>
          <h3 className="text-md font-semibold mt-4">Our offerings</h3>
          <div className="flex space-x-4 mt-2 cursor-pointer">
            <img src="https://files.codingninjas.in/new-cn-logos-4-31848.svg" alt="Coding Ninjas Job Bootcamp Logo" className="w-32" />
            <img src="https://files.codingninjas.com/new_cn_logos_4x-1710497457.webp" alt="Code 360 Logo" className="w-28 relative top-12 right-28" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Coding Ninjas</h3>
          <ul className="list-none mt-4">
            <li><a href="/careers" className="hover:text-blue-500">Careers</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-blue-500">Terms & conditions</a></li>
            <li><a href="/pricing-refund-policy" className="hover:text-blue-500">Pricing & refund policy</a></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Bug bounty</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Review</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Press release</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Products</h3>
          <ul className="list-none mt-4">
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Job Bootcamp</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Code 360</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer w-12">Professional Certifications</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer w-12">Student Certifications</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Community</h3>
          <ul className="list-none mt-4">
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">10X Club</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Student Chapters</button></li>
            <li><button className="hover:text-blue-500 bg-transparent border-none cursor-pointer p-0">Hire from us</button></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex items-center mt-32">
        <p>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex ml-64 space-x-4">
        <a href="https://www.facebook.com" className="text-white hover:text-blue-500">
        <img src="https://files.codingninjas.com/app-facebook-1-31841.svg" alt="icon" />
        </a>
          <a href="https://www.instagram.com" className="text-white hover:text-blue-500">
        <img src="https://files.codingninjas.com/group-48095591-31840.svg" alt="icon" />
          </a>
          <a href="https://www.linkedin.com" className="text-white hover:text-blue-500">
            <img src="https://files.codingninjas.in/group-48095609-31842.svg" alt="icon" />
          </a>
          <a href="https://www.youtube.com" className="text-white hover:text-blue-500">
            <img src="https://files.codingninjas.in/youtube-fill-31843.svg" alt="icon" />
          </a>
          <a href="https://www.twitter.com" className="text-white hover:text-blue-500">
           <img src="https://files.codingninjas.in/app-twiter-31844.svg" alt="icon" /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;