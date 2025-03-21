import { useEffect } from "react";
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

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

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
        <BeforeFooter />
      </div>
      <div
        data-scroll-section
      >
        <StartProject />
      </div>
      <div
        data-scroll-section
      >
        <Footer />
      </div>
    </main>
  )
}