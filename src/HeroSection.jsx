import React from "react";

function HeroSection() {
  return (
    <div className="text-center hero_section d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-white">WELCOME</h1>
        <h1>
          <span className="text-white">TO</span> CHAINTECH
        </h1>
        <div className="text-white">
          <p className="hero_p">
            From square one to engineering excellence! PixelPlex assists in
            full-cycle software <br /> development, jumps in to take it over, or
            brings dedicated top-demanded skills
          </p>
        </div>

        <button className="hero_btn">Get started </button>
      </div>
    </div>
  );
}

export default HeroSection;
