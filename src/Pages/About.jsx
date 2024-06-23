import React, { useState } from 'react';

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="m-10 p-10">
      <div className="mb-10 p-6 rounded-lg bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Company Overview and Values</h1>
        <p className="text-gray-700">
          Purpose And Vision The Shegaon insurance company works with the
          purpose - "To bring every family in the Indian society, especially the
          segments most vulnerable to the financial impacts of the loss of a
          breadwinner, into the safety net of Life Insurance." Operational
          efficiency, integrity and a strong focus on catering to the needs of the
          average Indian, by offering high quality and cost-effective customer
          solutions are the core values that drive the organisation. These values
          have been strongly adhered to over the decades and are now an integral
          part of the organisation’s DNA. Shegaon prides itself on its deep
          understanding of the customer and the ability to develop innovative
          solutions that solve for its customer needs. The company extensively
          uses technology to reach its customers and deliver last mile service to
          families. It has been amongst the first in the Industry to launch and
          adopt various technological initiatives like - customer service
          application “ShriMithra”, salespeople app “Astra” along with facial
          recognition for eKYC authentication, virtual assistant ShriA, and
          Shriram Smart Suraksha Card that provides premium renewal, policy bond
          access and policy purchase seamlessly. True to its purpose over 40% of
          the company’s business is from the Rural segments with the company
          servicing customers efficiently in the urban as well as remote
          locations.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-lg bg-gradient-to-r from-green-200 to-blue-200 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide reliable and comprehensive insurance solutions
          that meet the evolving needs of our customers. We aim to ensure financial
          security and peace of mind for every family in India through innovative
          and accessible products.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-lg bg-gradient-to-r from-yellow-200 to-red-200 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Our Vision</h2>
        <p className="text-gray-700">
          To be the most trusted and customer-centric insurance company in India,
          leveraging technology and human expertise to offer unmatched service and
          value to our customers.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-pink-700">Our Team</h2>
        <p className="text-gray-700">
          Our team consists of dedicated professionals with extensive experience in
          the insurance industry. We are committed to upholding our core values and
          delivering exceptional service to our customers.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-lg bg-gradient-to-r from-gray-200 to-gray-400 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
