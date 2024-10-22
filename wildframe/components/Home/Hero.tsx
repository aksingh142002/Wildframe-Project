// HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import "./home.css";
import bitcoinImg from '../assets/bitcoin.png';
import ethereumImg from "../assets/ethereum.png";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* <div className="hero-content"> */}
        <h1>Discover Natures Finest Digital Artworks</h1>
        <p>
        Explore the intersection of nature and creativity with WildFrame, a unique platform where rare digital art meets the beauty of the natural world.
        </p>
        <div className="btn-container">
          <button className="btn">Discover More</button>
          <button className="btn secondary">All Collections</button>
        {/* </div> */}
      </div>

      {/* Animated Icons */}
      <div className="animated-icons">
        <Image src={bitcoinImg} alt="Token" className="animated-icon" width={40} height={40} />
        <Image src={ethereumImg} alt="Token" className="animated-icon" width={50} height={50} />
        {/* <Image src={wildlifeIcon} alt="Wildlife Icon" className="animated-icon" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
