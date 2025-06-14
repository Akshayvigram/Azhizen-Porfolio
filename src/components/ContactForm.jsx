import React, { useState } from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import { db, realtimeDb } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, push, set } from 'firebase/database';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData);
  
    try {
      // 1. Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), {
        ...formData,
        timestamp: new Date(),
      });
      console.log('Document written with ID:', docRef.id);
      alert("Message Sent Successfully!");
      console.log('Document written with ID (Firestore):', docRef.id);
  
      // 2. Realtime Database
      const contactFormRef = ref(realtimeDb, 'contactForms');
    
      // Push data to Realtime DB
      const newContactFormRef = push(contactFormRef);
      await push(newContactFormRef, {
        ...formData,
        timestamp: new Date().toISOString(), // Add timestamp
      });
  
      console.log('Data pushed to Realtime Database with key:', newContactFormRef.key);
      alert('Message Sent Successfully!');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Error adding document:', error.message, error.code);
      alert('Submission Failed: ' + error.message);
    }
  };

  return (
    <div className="bg-white">
      {/* SYSTEM VIEW (Desktop) */}
      <div className="hidden md:block p-8 lg:p-12 2xl:p-16 pt-16 2xl:pt-20 mt-20 2xl:mt-24 max-w-7xl 2xl:max-w-[1920px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 2xl:mb-12">
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-poppins font-bold text-black">
            Contact our <span style={{ color: "#00B4D9" }}>Team</span>
          </h1>
          <p className="text-gray-500 mt-8 2xl:mt-10 text-base lg:text-lg 2xl:text-xl">
            Any questions or remarks? Just leave a message!
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-center items-start">
          {/* Form */}
          <div className="md:w-2/ p-4">
            <form className="mt-4 space-y-3 2xl:space-y-5" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="flex space-x-8">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm lg:text-base 2xl:text-lg mb-2 font-bold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-1.5 lg:p-2 2xl:p-2.5 border border-gray-900 rounded text-sm lg:text-base 2xl:text-lg"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm lg:text-base 2xl:text-lg mb-2 font-bold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-1.5 lg:p-2 2xl:p-2.5 border border-gray-900 rounded text-sm lg:text-base 2xl:text-lg"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm lg:text-base 2xl:text-lg mb-2 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1.5 lg:p-2 2xl:p-2.5 border border-gray-900 rounded text-sm lg:text-base 2xl:text-lg"
                  required
                />
              </div>

              {/* Country & Phone */}
              <div className="w-full">
                <label className="block text-gray-700 text-sm lg:text-base 2xl:text-lg mb-2 font-bold">Country & Phone Number</label>
                <div className="flex space-x-3">
                  <div className="w-1/4">
                    <select className="w-full p-1.5 lg:p-2 2xl:p-2.5 border border-gray-900 rounded text-sm lg:text-base 2xl:text-lg">
                      <option>IND</option>
                    </select>
                  </div>
                  <div className="w-3/4">
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full p-1.5 lg:p-2 2xl:p-2.5 border border-gray-900 rounded text-sm lg:text-base 2xl:text-lg"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm lg:text-base 2xl:text-lg mb-2 font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message"
                  className="w-full p-1.5 lg:p-2 2xl:p-2.5 border border-gray-900 rounded h-24 2xl:h-32 text-sm lg:text-base 2xl:text-lg"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-1.5 lg:p-2 2xl:p-2.5 text-white rounded text-sm lg:text-base 2xl:text-lg"
                style={{ background: "linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)" }}
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="ml-20 flex justify-end p-4">
            <div className="md:w-full">
              <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">Chat with us</h2>
              <p className="text-gray-500 mt-2 2xl:mt-3 text-sm lg:text-base 2xl:text-lg">
                Speak to our friendly team via live chat
              </p>
              <ul className="mt-4 2xl:mt-6 space-y-2 2xl:space-y-3">
                {/*
<li className="flex items-center">
  <img src={icon1} alt="Chat Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
  <span className="underline text-sm lg:text-base 2xl:text-lg">Start a live chat</span>
</li>
*/}

                <li className="flex items-center">
                  <img src={icon2} alt="Email Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                  <a href="mailto:azhizensolutions@gmail.com" className="underline text-sm lg:text-base 2xl:text-lg">Shoot us on Email</a>
                </li>
                <li className="flex items-center">
                  <img src={icon3} alt="LinkedIn Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                  <a href="https://www.linkedin.com/company/azhizensolutions/" target="_blank" rel="noopener noreferrer" className="underline text-sm lg:text-base 2xl:text-lg">Message us on LinkedIn</a>
                </li>
                <li className="flex items-center">
                  <img src={icon4} alt="Instagram Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                  <a href="https://www.instagram.com/azhizensolutions" target="_blank" rel="noopener noreferrer" className="underline text-sm lg:text-base 2xl:text-lg">Message us on Instagram</a>
                </li>
              </ul>

              <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-6 2xl:mt-8">Call us</h2>
              <p className="text-gray-500 mt-2 2xl:mt-3 text-sm lg:text-base 2xl:text-lg">
                Call our team Mon - Fri from 8 AM to 6 PM
              </p>
              <li className="flex items-center mt-2 2xl:mt-3">
                <img src={icon6} alt="Phone Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                <a href="tel:+919750603988" className="underline text-sm lg:text-base 2xl:text-lg">+91 9750603988</a>
              </li>
               <li className="flex items-center mt-2 2xl:mt-3">
                <img src={icon6} alt="Phone Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                <a href="tel:+919750603988" className="underline text-sm lg:text-base 2xl:text-lg">+91 7010682506</a>
              </li>

              <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-6 2xl:mt-8">Visit us</h2>
              <p className="text-gray-500 mt-2 2xl:mt-3 text-sm lg:text-base 2xl:text-lg">
                Chat to us in person at our company
              </p>
              <li className="flex items-center mt-2 2xl:mt-3">
                <img src={icon5} alt="Location Icon" className="mr-2 w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6" />
                <a
                  href="https://www.google.com/maps/place/Azhizen+Solutions+Pvt+Ltd.,/@11.3591653,77.8266921,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba965003111cd9d:0xade9181c8a953dcf!8m2!3d11.3591653!4d77.8266921!16s%2Fg%2F11x5__hc3_?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sm lg:text-base 2xl:text-lg"
                >
                  Tiruchengode, Namakkal
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW - FORM ONLY */}
      <div className="block md:hidden p-4 xs:p-4 sm:p-6 bg-white rounded-lg shadow mt-30 sm:mt-32 w-full overflow-visible mx-auto max-w-sm sm:max-w-md">
        <div className="max-w-sm sm:max-w-md mx-auto w-full px-2">
          <h2 className="text-lg xs:text-base sm:text-xl font-bold text-black mb-6 sm:mb-8 text-center">
            Contact Our <span style={{ color: "#00B4D9" }}>Team</span>
          </h2>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-bold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-1.5 sm:p-2 border border-gray-900 rounded text-xs sm:text-sm"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-bold">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-1.5 sm:p-2 border border-gray-900 rounded text-xs sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1.5 sm:p-2 border border-gray-900 rounded text-xs sm:text-sm"
                required
              />
            </div>

            {/* Country & Phone */}
            <div className="w-full">
              <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-bold">Country & Phone Number</label>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                <div className="w-full sm:w-1/4">
                  <select className="w-full p-1.5 sm:p-2 border border-gray-900 rounded text-xs sm:text-sm">
                    <option>IND</option>
                  </select>
                </div>
                <div className="w-full sm:w-3/4">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-900 rounded text-xs sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-bold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a message"
                className="w-full p-1.5 sm:p-2 border border-gray-900 rounded h-24 sm:h-28 text-xs sm:text-sm"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-1.5 sm:p-2 text-white rounded text-xs sm:text-sm"
              style={{ background: "linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)" }}
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;