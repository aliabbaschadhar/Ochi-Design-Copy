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

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // Consider as tablet and mobile
    }
    //  Check on mount
    checkDevice();

    window.addEventListener("resize", checkDevice); // Whenever resize happens call the checkDevice function

    return () => window.removeEventListener("resize", checkDevice);
  }, [])

  useEffect(() => {
    if (!isMobile) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      return () => {
        scroll.destroy();
      }
    };
  }, [isMobile]);

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