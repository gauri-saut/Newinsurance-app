import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthPayment = () => {
  const navigate = useNavigate();
  const [motherName, setMotherName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handleMotherNameChange = (e) => {
    setMotherName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentProcess = () => {
    if (paymentMethod) {
      setIsPaymentSuccess(true);
      setTimeout(() => {
        navigate('/HealthPremiumDetails');
      }, 1000);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment</h2>
        
        {!isPaymentSuccess && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Proposer Details</label>
              <input
                type="text"
                value={motherName}
                onChange={handleMotherNameChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Your Address</label>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
              </select>
            </div>

            {paymentMethod === 'upi' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Enter UPI ID</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Enter Card Details</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            )}

            <div className="mb-4">
              <button
                type="button"
                onClick={handlePaymentProcess}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              >
                Process Payment
              </button>
            </div>
          </>
        )}

        {isPaymentSuccess && (
          <div className="text-center text-green-500 text-2xl font-bold">
            Payment Successful!
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthPayment;
