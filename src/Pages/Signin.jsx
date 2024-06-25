import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('signupData'));

    if (storedData && storedData.email === formData.email && storedData.password === formData.password) {
      alert('Login successfully');
      navigate('/');  
    } else {
      alert('Invalid email or password');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">E-mail</label>
            <input
              type="text"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              name="email"
              placeholder="Enter Your E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>


          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>


            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">


            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >

              Sign In
            </button>

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
