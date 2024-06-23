import { useEffect, useState } from 'react';

const PremiumDetails = () => {
  const [insuranceData, setInsuranceData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('insuranceData'));
    setInsuranceData(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Details</h2>
        
        {insuranceData ? (
          <div className="text-gray-800">
            <p><strong>Vehicle Type:</strong> {insuranceData.vehicleType}</p>
            <p><strong>RTO Number:</strong> {insuranceData.rtoNumber}</p>
            <p><strong>Model Year:</strong> {insuranceData.modelYear}</p>
            <p><strong>Policy Expired:</strong> {insuranceData.policyExpired ? 'Yes' : 'No'}</p>
            <p><strong>IDV Value:</strong> {insuranceData.idvValue}</p>
            <p><strong>Premium:</strong> ₹{insuranceData.premium.toLocaleString()}</p>
          </div>
        ) : (
          <div className="text-red-500">
            No insurance data found. Please go back and calculate your premium.
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumDetails;
