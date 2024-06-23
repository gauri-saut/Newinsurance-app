import React, { useState } from 'react';

const UpdateKYC = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [insuranceDocument, setInsuranceDocument] = useState(null);
  const [premiumDocument, setPremiumDocument] = useState(null);
  const [supportiveDocument, setSupportiveDocument] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInsuranceDocumentUpload = (e) => {
    const file = e.target.files[0];
    setInsuranceDocument(file);
  };

  const handlePremiumDocumentUpload = (e) => {
    const file = e.target.files[0];
    setPremiumDocument(file);
  };

  const handleSupportiveDocumentUpload = (e) => {
    const file = e.target.files[0];
    setSupportiveDocument(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would handle form submission logic, such as API calls or local storage
    // For demo purposes, we are logging the form data
    console.log({
      aadharNumber,
      panCardNumber,
      email,
      phoneNumber,
      name,
      incidentDescription,
      insuranceDocument,
      premiumDocument,
      supportiveDocument,
    });

    // Display submission success message or contact executive message
    setSubmissionMessage('Your documents have been successfully submitted. An executive will contact you shortly.');
    
    // Clear form fields after submission
    setAadharNumber('');
    setPanCardNumber('');
    setEmail('');
    setPhoneNumber('');
    setName('');
    setIncidentDescription('');
    setInsuranceDocument(null);
    setPremiumDocument(null);
    setSupportiveDocument(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Update KYC</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Aadhar Number</label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">PAN Card Number</label>
            <input
              type="text"
              value={panCardNumber}
              onChange={(e) => setPanCardNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">What Happened? Incident Description</label>
            <textarea
              value={incidentDescription}
              onChange={(e) => setIncidentDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Insurance Document</label>
            <input
              type="file"
              onChange={handleInsuranceDocumentUpload}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Premium Document</label>
            <input
              type="file"
              onChange={handlePremiumDocumentUpload}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Supportive Document</label>
            <input
              type="file"
              onChange={handleSupportiveDocumentUpload}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {submissionMessage && (
            <div className="mb-4 text-green-600">{submissionMessage}</div>
          )}

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit KYC Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateKYC;
