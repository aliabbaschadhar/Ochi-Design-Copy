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
  const [isMobile, setIsMobile] = useState(false);
  const [scrollInstance, setScrollInstance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileView = window.innerWidth < 1024;

      // If device type is changing, show loading state
      if (isMobileView !== isMobile) {
        setIsLoading(true);

        // Remove locomotive scroll if it exists
        if (scrollInstance) {
          scrollInstance.destroy();
          setScrollInstance(null);
        }

        // Short delay to show loading state
        setTimeout(() => {
          setIsMobile(isMobileView);
          setIsLoading(false);
        }, 800);
      }
    }

    // Check on mount
    checkDevice();

    // Add debounced resize handler to avoid performance issues
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkDevice, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    }
  }, [isMobile, scrollInstance]);

  useEffect(() => {
    if (!isMobile && !isLoading) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smartphone: {
          smooth: false
        },
        tablet: {
          smooth: false,
          breakpoint: 1024
        }
      });

      setScrollInstance(scroll);

      return () => {
        if (scroll) scroll.destroy();
      }
    }
  }, [isMobile, isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#004d43]"></div>
      </div>
    );
  }

  return (
    <main
      data-scroll-container
      className="w-full min-h-screen"
    >
      <div data-scroll-section>
        <Navbar />
      </div>

      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed={!isMobile ? "-.3" : "0"}
        >
          <LandingPage />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed={!isMobile ? "-.1" : "0"}
        >
          <Marquee />
        </div>
      </div>
      <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed={!isMobile ? "-0.2" : "0"}
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
      {/* <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="-0.1">
          <BeforeFooter />
        </div>
      </div> */}
      {/* <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="0.1">
          <StartProject />
        </div>
      </div> */}
      {/* <div
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="-0.2">
          <Footer />
        </div>
      </div> */}
    </main>
  )
}