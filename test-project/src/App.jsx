import React from "react"
import HeroSection from "./components/HeroSection.jsx"
import Navbar from "./components/Navbar.jsx"
import Dishes from "./components/Dishes.jsx"
import About from "./components/about.jsx"
import Mission from "./components/Mission.jsx"
import Experties from "./components/Experties.jsx"
import Review from "./components/Review.jsx"
import ContatSection from "./components/ContactSection.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Dishes />
      <About/>
      <Mission />
      <Experties />
      <Review />
      <ContatSection />
      <Footer />
    </main>
  )
}