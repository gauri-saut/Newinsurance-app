import React, { useState } from 'react';

const Claim = () => {
  const [claimType, setClaimType] = useState('');
  const [policyType, setPolicyType] = useState('');
  const [name, setName] = useState('');
  const [insuranceId, setInsuranceId] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [policyStartDate, setPolicyStartDate] = useState('');
  const [policyEndDate, setPolicyEndDate] = useState('');
  const [dateOfAdmission, setDateOfAdmission] = useState('');
  const [dateOfDischarge, setDateOfDischarge] = useState('');
  const [sumInsured, setSumInsured] = useState('');
  const [age, setAge] = useState('');
  const [numberOfMembers, setNumberOfMembers] = useState('');
  const [claimForm, setClaimForm] = useState(null);
  const [dischargeSummary, setDischargeSummary] = useState(null);
  const [finalBill, setFinalBill] = useState(null);
  const [neft, setNeft] = useState(null);
  const [ckycDetails, setCkycDetails] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleClaimTypeChange = (e) => {
    setClaimType(e.target.value);
  };

  const handlePolicyTypeChange = (e) => {
    setPolicyType(e.target.value);
  };

  const handleFileUpload = (setFileFunction) => (e) => {
    const file = e.target.files[0];
    setFileFunction(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      claimType,
      policyType,
      name,
      insuranceId,
      diagnosis,
      incidentDescription,
      policyStartDate,
      policyEndDate,
      dateOfAdmission,
      dateOfDischarge,
      sumInsured,
      age,
      numberOfMembers,
      claimForm,
      dischargeSummary,
      finalBill,
      neft,
      ckycDetails,
    });

    setSubmissionMessage('Your documents have been successfully submitted. An executive will contact you shortly.');

    // Clear form fields after submission
    setClaimType('');
    setPolicyType('');
    setName('');
    setInsuranceId('');
    setDiagnosis('');
    setIncidentDescription('');
    setPolicyStartDate('');
    setPolicyEndDate('');
    setDateOfAdmission('');
    setDateOfDischarge('');
    setSumInsured('');
    setAge('');
    setNumberOfMembers('');
    setClaimForm(null);
    setDischargeSummary(null);
    setFinalBill(null);
    setNeft(null);
    setCkycDetails(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Claim Registration Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Choose Claim Type</label>
            <select
              value={claimType}
              onChange={handleClaimTypeChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select</option>
              <option value="motor">Motor Insurance</option>
              <option value="health">Health Insurance</option>
            </select>
          </div>

          {claimType === 'health' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Policy Type</label>
                <select
                  value={policyType}
                  onChange={handlePolicyTypeChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select Policy Type</option>
                  <option value="healthGuard">Health Guard Policy</option>
                  <option value="healthEnsure">Health Ensure Policy</option>
                  <option value="hospitalCash">Hospital Cash Policy</option>
                  <option value="healthCareSupreme">Health Care Supreme Policy</option>
                  <option value="careCare">Care Care Policy</option>
                </select>
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Insurance ID</label>
            <input
              type="text"
              value={insuranceId}
              onChange={(e) => setInsuranceId(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {claimType === 'health' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Diagnosis</label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Policy Start Date</label>
                <input
                  type="date"
                  value={policyStartDate}
                  onChange={(e) => setPolicyStartDate(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Policy End Date</label>
                <input
                  type="date"
                  value={policyEndDate}
                  onChange={(e) => setPolicyEndDate(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date of Admission</label>
                <input
                  type="date"
                  value={dateOfAdmission}
                  onChange={(e) => setDateOfAdmission(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date of Discharge</label>
                <input
                  type="date"
                  value={dateOfDischarge}
                  onChange={(e) => setDateOfDischarge(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Sum Insured</label>
                <select
                  value={sumInsured}
                  onChange={(e) => setSumInsured(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select Sum Insured</option>
                  <option value="300000">3 Lakhs</option>
                  <option value="400000">4 Lakhs</option>
                  <option value="500000">5 Lakhs</option>
                  <option value="600000">6 Lakhs</option>

                  <option value="600000">6 Lakhs</option>
                  <option value="700000">7 Lakhs</option>
                  <option value="800000">8 Lakhs</option>
                  <option value="900000">9 Lakhs</option>
                  <option value="1000000">10 Lakhs</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="18"
                  max="60"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Number of Members Covered</label>
                <input
                  type="number"
                  value={numberOfMembers}
                  onChange={(e) => setNumberOfMembers(e.target.value)}
                  min="1"
                  max="10"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">What Happened (Incident Description)</label>
            <textarea
              value={incidentDescription}
              onChange={(e) => setIncidentDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {claimType === 'health' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload Claim Form</label>
                <input
                  type="file"
                  onChange={handleFileUpload(setClaimForm)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload Discharge Summary</label>
                <input
                  type="file"
                  onChange={handleFileUpload(setDischargeSummary)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload Final Bill/Medicine Bill</label>
                <input
                  type="file"
                  onChange={handleFileUpload(setFinalBill)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload NEFT Details</label>
                <input
                  type="file"
                  onChange={handleFileUpload(setNeft)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload CKYC Details</label>
                <input
                  type="file"
                  onChange={handleFileUpload(setCkycDetails)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit Claim
            </button>
          </div>
        </form>

        {submissionMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            {submissionMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Claim;

