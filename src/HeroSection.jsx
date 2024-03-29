import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function HeroSection() {
  return (
    <div className="text-center hero_section d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-white">WELCOME</h1>
        <h1 className="text-white">
          TO <span className="text-white span1">CHAINTECH</span>
        </h1>
        <div className="text-white">
          <section>
            <p className="hero_p mt-3">
              From square one to engineering excellence! PixelPlex assists in
              full-cycle software <br /> development, jumps in to take it over,
              or brings dedicated top-demanded skills.
            </p>
          </section>
        </div>

        <button className="hero_btn mt-3">
          <span style={{ marginRight: 20 }}>Get started</span>
          <IoIosArrowRoundForward className="hero_arrow" />{" "}
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
