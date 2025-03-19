import { About, Eyes, LandingPage, Marquee, Navbar } from "./components";

export default function App() {
  return (
    <main className="w-full h-screen ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </main>
  )
}