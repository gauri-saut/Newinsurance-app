import React from 'react';
import { useLocation } from 'react-router-dom';

const HealthPremiumDetails = () => {
  const location = useLocation();
  const healthInsuranceData = JSON.parse(localStorage.getItem('healthInsuranceData'));

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Details</h2>
        <p><strong>Name:</strong> {healthInsuranceData.name}</p>
        <p><strong>Age:</strong> {healthInsuranceData.age}</p>
        <p><strong>Premium:</strong> ₹{healthInsuranceData.premium}</p>
        <p><strong>Policy Number:</strong> {Math.floor(Math.random() * 1000000000)}</p>
      </div>
    </div>
  );
};

export default HealthPremiumDetails;
