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


export default function App() {
  return (
    <main className="w-full h-screen ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <BeforeFooter />
      <StartProject />
      <Footer />
    </main>
  )
}