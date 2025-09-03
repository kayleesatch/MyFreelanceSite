import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 bg-[length:200%_200%] opacity-90 animate-gradient-x text-white">
      <Nav />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
      </main>

      <Footer />
    </div>
  )
}

export default App