import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Imotor = () => {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState('');
  const [rtoNumber, setRtoNumber] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [policyExpired, setPolicyExpired] = useState(false);
  const [idvValue, setIdvValue] = useState('');
  const [premium, setPremium] = useState(null);

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleRtoNumberChange = (e) => {
    setRtoNumber(e.target.value);
  };

  const handleModelYearChange = (e) => {
    setModelYear(e.target.value);
  };

  const handlePolicyExpiredChange = (e) => {
    setPolicyExpired(e.target.checked);
  };

  const handleIdvValueChange = (e) => {
    setIdvValue(e.target.value);
  };

  const calculatePremium = () => {
    let basePremium = vehicleType === 'car' ? 11000 : 5000;
    let premiumRange = vehicleType === 'car' ? 1500 : 2000;
    let idvMultiplier = 0;

    switch (idvValue) {
      case '30k':
      case '1L':
        idvMultiplier = 1;
        break;
      case '40k':
      case '2L':
        idvMultiplier = 1.2;
        break;
      case '50k':
      case '5L':
        idvMultiplier = 1.5;
        break;
      case '60k':
        idvMultiplier = 1.8;
        break;
      default:
        idvMultiplier = 1;
    }

    let calculatedPremium = basePremium * idvMultiplier;
    if (policyExpired) {
      calculatedPremium += 400;
    }

    setPremium(calculatedPremium);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('insuranceData', JSON.stringify({
      vehicleType,
      rtoNumber,
      modelYear,
      policyExpired,
      idvValue,
      premium
    }));
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Motor Insurance</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Vehicle Type</label>
            <select
              value={vehicleType}
              onChange={handleVehicleTypeChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          {vehicleType && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Enter RTO Number</label>
                <input
                  type="text"
                  value={rtoNumber}
                  onChange={handleRtoNumberChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Select Model Year</label>
                <select
                  value={modelYear}
                  onChange={handleModelYearChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {[...Array(11).keys()].map(year => (
                    <option key={year} value={2014 + year}>{2014 + year}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Policy Expired?</label>
                <input
                  type="checkbox"
                  checked={policyExpired}
                  onChange={handlePolicyExpiredChange}
                  className="mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Select IDV Value</label>
                <select
                  value={idvValue}
                  onChange={handleIdvValueChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {vehicleType === 'bike' ? (
                    <>
                      <option value="30k">₹30,000</option>
                      <option value="40k">₹40,000</option>
                      <option value="50k">₹50,000</option>
                      <option value="60k">₹60,000</option>
                    </>
                  ) : (
                    <>
                      <option value="1L">₹1,00,000</option>
                      <option value="2L">₹2,00,000</option>
                      <option value="5L">₹5,00,000</option>
                    </>
                  )}
                </select>
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
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                  disabled={premium === null}
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Imotor;
