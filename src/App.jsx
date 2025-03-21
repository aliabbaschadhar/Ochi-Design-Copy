import { useEffect, useState } from "react";
import {
  About,
  BeforeFooter,
  Eyes,
  Featured,
  Footer,
  LandingPage,
  Marquee,
  Navbar,
  Reviews,
  StartProject
}
  from "./components";
import LocomotiveScroll from "locomotive-scroll";


export default function App() {
  const [locomotiveInstance, setLocomotiveInstance] = useState(null);

  useEffect(() => {
    // Function to check if device is desktop (width > 768px)
    const isDesktop = () => window.innerWidth > 768;

    // Initialize or destroy Locomotive Scroll based on screen size
    const handleScrollInstance = () => {
      // If we're on desktop and don't have a locomotive instance
      if (isDesktop() && !locomotiveInstance) {
        const scroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
        setLocomotiveInstance(scroll);
      }
      // If we're on mobile and have a locomotive instance
      else if (!isDesktop() && locomotiveInstance) {
        locomotiveInstance.destroy();
        setLocomotiveInstance(null);
      }
    };

    // Initial check
    handleScrollInstance();

    // Add resize listener to handle device switching
    window.addEventListener('resize', handleScrollInstance);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleScrollInstance);
      if (locomotiveInstance) {
        locomotiveInstance.destroy();
      }
    };
  }, [locomotiveInstance]);

  return (
    <main
      data-scroll-container
      className="w-full min-h-screen "
    >
      <div data-scroll-section>
        <Navbar />
      </div>

      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="-.3"
        >
          <LandingPage />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed='-.1'
        >
          <Marquee />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed='-.02'
        >
          <About />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <Eyes />
      </div>
      <div
        data-scroll-section
      >
        <Featured />
      </div>
      <div
        data-scroll-section
      >
        <Reviews />
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="-0.1">
          <BeforeFooter />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="0.1">
          <StartProject />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="-0.2">
          <Footer />
        </div>
      </div>
    </main>
  )
}