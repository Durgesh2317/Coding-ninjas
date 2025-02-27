import React, { createRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Careers from "./components/Careers";
import WhyUs from "./components/WhyUs";
import StoriesSection from "./components/StoriesSection";
import Sessions from "./components/Sessions";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";

const App = () => {
  const homeRef = createRef();
  const coursesRef = createRef();
  const storiesRef = createRef();
  const whyusRef = createRef();
  const careersRef = createRef();
  const sessionsRef = createRef();
  const spotlightRef = createRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        onNavigate={(section) => {
          if (section === "home") scrollToSection(homeRef);
          if (section === "courses") scrollToSection(coursesRef);
          if (section === "careers") scrollToSection(careersRef);
          if (section === "stories") scrollToSection(storiesRef);
          if (section === "sessions") scrollToSection(sessionsRef);
          if (section === "whyus") scrollToSection(whyusRef);
          if (section === "spotlight") scrollToSection(spotlightRef);
        }}
      />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={coursesRef}>
        <Courses />
      </div>
      <div ref={careersRef}>
        <Careers />
      </div>
      <div ref={whyusRef}>
      <WhyUs /> 
      </div>
      <div ref={storiesRef}>
      <StoriesSection />
      </div>
      <div ref={sessionsRef}>
      <Sessions />
      </div>
      <div ref={spotlightRef}>
      <Spotlight />
      </div>
      <Footer />
    </div>
  );
};

export default App;
