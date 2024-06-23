
const InSanjo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg mx-auto">
        {/* Header */}
        <div className="bg-blue-600 p-6">
          <h2 className="text-3xl font-bold text-white">Insurance Samjho</h2>
          <p className="text-white mt-2">Understand the various types of insurance available and how they can benefit you and your family.</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Types of Insurance</h3>
          <ul>
            <li className="flex items-center mb-6">
              <div className="bg-blue-200 text-blue-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900">Health Insurance</h4>
                <p>Provides coverage for medical expenses including hospitalization, surgeries, and doctor visits.</p>
              </div>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-blue-200 text-blue-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">🚗</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900">Motor Insurance</h4>
                <p>Covers damages to your vehicle due to accidents, theft, or natural disasters.</p>
              </div>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-blue-200 text-blue-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">🏡</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900">Home Insurance</h4>
                <p>Protects your home and belongings from risks like fire, theft, and natural calamities.</p>
              </div>
            </li>
            <li className="flex items-center mb-6">
              <div className="bg-blue-200 text-blue-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍👩‍👦</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900">Life Insurance</h4>
                <p>Offers financial support to your family in case of your untimely demise.</p>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-4">Why You Need Insurance</h3>
          <p className="text-gray-700 mb-4">
            Insurance is essential to safeguard yourself and your loved ones from unforeseen events that could have significant financial implications. It provides peace of mind and ensures that you are financially prepared to handle emergencies.
          </p>
        </div>
      </div>
    </div>
  );
};


export default InSanjo;