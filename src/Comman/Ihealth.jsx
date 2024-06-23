import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ihealth = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [premium, setPremium] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const calculatePremium = () => {
    let calculatedPremium;
    const ageInt = parseInt(age);

    if (ageInt >= 0 && ageInt <= 30) {
      calculatedPremium = 5000;
    } else if (ageInt > 30 && ageInt <= 50) {
      calculatedPremium = 10000;
    } else if (ageInt > 50 && ageInt <= 80) {
      calculatedPremium = 20000;
    } else {
      alert('You are not eligible for this health insurance.');
      return;
    }

    setPremium(calculatedPremium);
  };

  const handleProceedToPayment = () => {
    localStorage.setItem('healthInsuranceData', JSON.stringify({ name, age, premium }));
    navigate('/HealthPayment');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-11 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden" style={{ width: '100%', height: '100vh' }}>
        {/* Left Section */}
        <div className="p-6 w-2/3">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Health Insurance Plans for Family</h2>
          <p className="text-gray-700 mb-6">The financial security of your family is essential to afford medical care today. Family health insurance... <a href="#" className="text-blue-600">Read More</a></p>
          <ul>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">📍</span>
              <span>30 minutes claim support<sup>##</sup> (In 120+ cities)</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">👨‍💼</span>
              <span>Relationship manager for every customer</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">⏰</span>
              <span>24*7 claims assistance in 30 mins. guaranteed<sup>*</sup></span>
            </li>
            <li className="flex items-center mb-4">
              <span className="bg-blue-200 text-blue-900 rounded-full h-8 w-8 flex items-center justify-center mr-4">📄</span>
              <span>Instant policy issuance, no medical tests<sup>*</sup></span>
            </li>
          </ul>
          <div className="flex items-center mt-6">
            <div className="text-center mr-6">
              <div className="text-2xl font-bold text-blue-900">6.7 crore</div>
              <div className="text-gray-500">Registered consumers</div>
            </div>
            <div className="text-center mr-6">
              <div className="text-2xl font-bold text-blue-900">51</div>
              <div className="text-gray-500">Insurance partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">3.4 crore</div>
              <div className="text-gray-500">Policies sold</div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-gray-50 p-6 w-1/3">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Health Insurance Calculator</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Age</label>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              onClick={calculatePremium}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Calculate Premium
            </button>
          </div>
          {premium !== null && (
            <div className="mb-4">
              <p className="text-gray-800">Your calculated premium is ₹{premium.toLocaleString()}</p>
            </div>
          )}
          <div className="mb-4">
            <button
              type="button"
              onClick={handleProceedToPayment}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              disabled={premium === null}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ihealth;
