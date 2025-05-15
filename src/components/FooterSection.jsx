import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foot1 from "../assets/foot1.png";
import foot2 from "../assets/foot2.png";
import foot3 from "../assets/foot3.png";
import foot4 from "../assets/foot4.png";
import logofoot from "../assets/logofoot.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube } from 'react-icons/fa';

const FooterSection = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({
    "Quick Links": false,
    Products: false,
    Services: false,
    Policies: false,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  const sectionLinks = {
    "Quick Links": [
      { label: "Home", href: "/" },
      { label: "About", href: "/about-us" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/contact-us" },
    ],
    Products: [
      { label: "Ease Milk", href: "#" },
      { label: "Soil Tester", href: "#" },
      { label: "Milk Tester", href: "#" },
    ],
    Services: [
      { label: "Research & Development", href: "#" },
      { label: "Smart Hardware Solutions", href: "#" },
      { label: "SoftEdge Innovations", href: "#" },
    ],
    Policies: [
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white px-6 sm:px-8 lg:px-12 2xl:px-16 py-10 sm:py-12 lg:py-16 2xl:py-20">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-6 gap-6 lg:gap-8 2xl:gap-12 text-left text-sm 2xl:text-base mb-10 2xl:mb-16 max-w-7xl 2xl:max-w-[1920px] mx-auto">
        {/* Logo and Description */}
        <div>
          <img
            src={logofoot}
            className="w-full h-10 2xl:h-14 mb-4 2xl:mb-6 rounded-lg mt-1 -ml-2"
            alt="Azhizen Logo"
          />
          <p className="text-gray-400 text-sm md:text-xs 2xl:text-base">
            3rd Floor, Mercury Block <br />KSRCE, Tiruchengode, Namakkal, Tamil Nadu
          </p>
         <div className="flex justify-center space-x-4 2xl:space-x-6 mt-10 2xl:mt-12 mr-10">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/azhizensolutions"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#f2f4f8]" // Facebook Blue (optional)
  >
    <FaFacebookF className="w-6 h-6 2xl:w-8 2xl:h-8" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/azhizensolutions?igsh=dDhmeDc4OTNobjk4"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white-500" // Optional color
  >
    <FaInstagram className="w-6 h-6 2xl:w-8 2xl:h-8" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/azhizensolutions/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#f6f8fa]" // LinkedIn Blue (optional)
  >
    <FaLinkedinIn className="w-6 h-6 2xl:w-8 2xl:h-8" />
  </a>
  {/* YouTube */}
  <a
    href="https://www.youtube.com/@azhizensolutions" // Replace with your actual YouTube URL
    target="_blank"
    rel="noopener noreferrer"
    className="text-white-600"
  >
    <FaYoutube className="w-6 h-6 2xl:w-8 2xl:h-8" />
  </a>
</div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg md:text-base 2xl:text-xl font-semibold mb-3 2xl:mb-4">Quick Links</h4>
          <ul className="space-y-1 2xl:space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg md:text-base 2xl:text-xl font-semibold mb-3 2xl:mb-4">Products</h4>
          <ul className="space-y-1 2xl:space-y-2 text-gray-400">
            <li>
              <a className="hover:text-white">
                Ease Milk
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                Soil Tester
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                Milk Tester
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg md:text-base 2xl:text-xl font-semibold mb-3 2xl:mb-4">Services</h4>
          <ul className="space-y-1 2xl:space-y-2 text-gray-400">
            <li>
              <a className="hover:text-white">
                Research & Development
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                Smart Hardware Solutions
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                SoftEdge Innovations
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg md:text-base 2xl:text-xl font-semibold mb-3 2xl:mb-4">Policies</h4>
          <ul className="space-y-1 2xl:space-y-2 text-gray-400">
            <li>
              <a className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                Refund Policy
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:text-left">
  <h4 className="text-lg md:text-base 2xl:text-xl font-semibold mb-3 2xl:mb-4">Contact Us</h4>
  <p className="text-gray-400 mb-4 text-sm md:text-xs 2xl:text-base">
    azhizensolutions@gmail.com
    <br />
    Phone: +91 9750603988
  </p>
  <button
    className="text-white px-6 2xl:px-8 py-3 2xl:py-4 rounded-full transition-all hover:brightness-110 w-[150px] 2xl:w-[180px] text-sm md:text-xs 2xl:text-base"
    style={{ background: "linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)" }}
    onClick={handleContactClick}
    aria-label="Contact us"
  >
    Contact us
  </button>
</div>
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-1 md:hidden gap-8 sm:gap-10 text-sm 2xl:text-base">
        {["Quick Links", "Products", "Services", "Policies"].map((title, i) => (
          <div key={i} className="text-left">
            <h4
              className="text-lg sm:text-xl font-semibold mb-3 flex items-center cursor-pointer"
              onClick={() => toggleSection(title)}
            >
              {title}
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  openSections[title] ? "rotate-90" : "rotate-0"
                }`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </h4>
            <div className="border-b-2 border-white mb-3" />
            <ul
              className={`space-y-1 sm:space-y-2 text-white ${
                openSections[title] ? "block" : "hidden"
              }`}
            >
              {sectionLinks[title].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-gray-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div className="text-left">
          <h4 className="text-lg sm:text-xl font-semibold mb-3">Contact Us</h4>
          <p className="text-white mb-1 text-sm sm:text-base">azhizensolutions@gmail.com</p>
          <p className="text-white mb-1 text-sm sm:text-base">+91 97506 03988</p>
          <p className="text-white mb-4 text-sm sm:text-base">
            K.S.R College of Engineering Tiruchengode, Namakkal, Tamil Nadu
          </p>
          <div className="flex justify-center">
            <img
              src={logofoot}
              className="w-40 h-10 sm:w-48 sm:h-12 mb-4 sm:mb-6 rounded-lg mt-10 sm:mt-12"
              alt="Azhizen Logo"
            />
          </div>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-10 sm:mt-12">
            <a href="https://link1.com" target="_blank" rel="noopener noreferrer">
              <img src={foot1} className="w-6 h-6 sm:w-8 sm:h-8" alt="Social 1" />
            </a>
            <a
              href="https://www.instagram.com/azhizensolutions?igsh=dDhmeDc4OTNobjk4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foot2} className="w-6 h-6 sm:w-8 sm:h-8" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/azhizensolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foot3} className="w-6 h-6 sm:w-8 sm:h-8" alt="LinkedIn" />
            </a>
            <a href="https://link4.com" target="_blank" rel="noopener noreferrer">
              <img src={foot4} className="w-6 h-6 sm:w-8 sm:h-8" alt="Social 4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-screen px-0 mx-[-1.5rem] sm:mx-[-2rem] lg:mx-[-3rem] 2xl:mx-[-4rem] mt-10 sm:mt-12 2xl:mt-16">
        <hr className="border-t border-white" />
      </div>
      <div className="text-center text-gray-500 mt-4 sm:mt-6 text-sm md:text-xs 2xl:text-base">
        © 2025 Azhizen Solution. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;