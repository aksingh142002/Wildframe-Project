"use client";
// import { useState } from 'react';
// import { ethers } from 'ethers';
import Link from 'next/link';
import Image from 'next/image';
import { IoWallet } from "react-icons/io5";

const Header = () => {
  // const [walletAddress, setWalletAddress] = useState('');

  // const connectWallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const accounts = await provider.send('eth_requestAccounts', []);
  //       setWalletAddress(accounts[0]);
  //     } catch (error) {
  //       console.log('Connection error:', error);
  //     }
  //   } else {
  //     alert('Install MetaMask');
  //   }
  // };

  return (
    <header className=" text-white py-4 px-8 flex justify-between items-center fixed z-1  w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="wildframeLogo" width={50} height={50} />
        <span className="text-xl font-bold ml-2">WildFrame</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-10">
        <Link href="/" className="link">Home</Link>
        <Link href="/about" className="link">About Us</Link>
        <Link href="/explore" className="link">Explore</Link>
        <Link href="/blog" className="link">Blog</Link>
        <Link href="/contact" className="link">Contact</Link>
      </nav>

      {/* Wallet Connect Button */}
      <button className="button rounded-xl text-black font-semibold flex items-center">
        <span>Wallet Connect</span>
        <IoWallet className="ml-2 w-6 h-6" />
      </button>
    </header>
  );
}

export default Header;