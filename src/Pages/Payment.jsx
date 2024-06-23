import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handlePaymentProcess = () => {
    if (paymentMethod === 'upi' && upiId) {
      // Simulate OTP sending
      alert('OTP sent to your UPI ID');
      setIsOtpSent(true);
    } else {
      alert('Please select a payment method and enter UPI ID.');
    }
  };

  const handleOtpSubmit = () => {
    // Simulate OTP verification
    if (otp === '1234') {
      alert('Payment successful!');
      setIsPaymentSuccess(true);
      // Simulate a delay before redirecting to the premium details page
      setTimeout(() => {
        navigate('/PremiumDetails');
      }, 1000);
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment</h2>
        
        {!isPaymentSuccess && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
                <option value="creditcard">Credit Card</option>
              </select>
            </div>

            {paymentMethod === 'upi' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Enter UPI ID</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={handleUpiIdChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={handlePaymentProcess}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Send OTP
                </button>
              </div>
            )}

            {isOtpSent && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            )}

            {isOtpSent && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={handleOtpSubmit}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                >
                  Verify OTP
                </button>
              </div>
            )}
          </>
        )}
        
        {isPaymentSuccess && (
          <div className="text-green-500 font-bold text-center">
            Payment successful! Redirecting...
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
