import React from 'react';
import { FaFacebookF, FaTwitter, FaDiscord, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-white p-10 fixed bottom-0 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">WildFrame</h2>
          <p>Explore the beauty of nature through unique NFTs.</p>
        </div>

        {/* Marketplace */}
        <div>
          <h3 className="font-bold mb-3">Marketplace</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">All NFTs</a></li>
            <li><a href="#" className="hover:text-gray-400">Photography</a></li>
            <li><a href="#" className="hover:text-gray-400">Nature</a></li>
            <li><a href="#" className="hover:text-gray-400">Wildlife</a></li>
          </ul>
        </div>

        {/* Resource */}
        <div>
          <h3 className="font-bold mb-3">Resource</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Partners</a></li>
            <li><a href="#" className="hover:text-gray-400">Platform Status</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-bold mb-3">Account</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">My Profile</a></li>
            <li><a href="#" className="hover:text-gray-400">My Collection</a></li>
            <li><a href="#" className="hover:text-gray-400">Create Collection</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Join the Community</a></li>
          </ul>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebookF className="hover:text-gray-400" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-400" /></a>
            <a href="#"><FaDiscord className="hover:text-gray-400" /></a>
            <a href="#"><FaTiktok className="hover:text-gray-400" /></a>
            <a href="#"><FaYoutube className="hover:text-gray-400" /></a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500">
        <p>&copy; 2024 WildFrame. All rights reserved. <a href="#" className="hover:text-gray-400">Privacy Policy</a> | <a href="#" className="hover:text-gray-400">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
