import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection/>
    </>
  );
}

export default App;
