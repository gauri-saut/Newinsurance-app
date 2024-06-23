import React, { useState } from 'react';

// SchemeCard component
const SchemeCard = ({ emoji, title, description }) => (
  <li className="flex items-center mb-6">
    <div className="bg-green-200 text-green-900 rounded-full h-12 w-12 flex items-center justify-center mr-4">
      <span className="text-2xl">{emoji}</span>
    </div>
    <div>
      <h3 className="text-xl font-bold text-green-900">{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

// FAQItem component
const FAQItem = ({ question, answer }) => (
  <div className="mb-4">
    <h3 className="text-lg font-bold text-blue-900">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

const GovSchem = () => {
  // Define schemes with larger dataset
  const schemes = [
    {
      category: 'Health Insurance',
      schemes: [
        {
          emoji: '🏥',
          title: 'Ayushman Bharat Yojana',
          description: 'Provides health cover of up to ₹5 lakhs per family per year.',
        },
        {
          emoji: '💊',
          title: 'Pradhan Mantri Suraksha Bima Yojana',
          description: 'Accidental insurance cover for death or disability.',
        },
        {
          emoji: '🩺',
          title: 'Rashtriya Swasthya Bima Yojana',
          description: 'Provides health insurance coverage to BPL families.',
        },
        // Add more health insurance schemes
      ],
    },
    {
      category: 'Other Schemes',
      schemes: [
        {
          emoji: '🏨',
          title: 'Jan Arogya Yojana',
          description: 'Covers secondary and tertiary healthcare hospitalizations.',
        },
        {
          emoji: '💉',
          title: 'National Health Mission',
          description: 'Supports healthcare infrastructure and services in rural areas.',
        },
        // Add more other schemes
      ],
    },
    // Add more categories as needed
  ];

  // FAQ data
  const [faqs, setFAQs] = useState([
    {
      question: 'Who is eligible for Ayushman Bharat Yojana?',
      answer: 'Ayushman Bharat Yojana covers all eligible families listed in SECC database (Socio-Economic Caste Census).',
    },
    {
      question: 'What is covered under Pradhan Mantri Suraksha Bima Yojana?',
      answer: 'Pradhan Mantri Suraksha Bima Yojana provides accidental death and disability cover to eligible individuals.',
    },
    // Add more FAQs as needed
  ]);

  // Additional covers
  const [additionalCovers, setAdditionalCovers] = useState([
    'Reinstatement Benefit',
    'Convalescence Benefit',
    'Hospital Cash Less',
    // Add more cover names as needed
  ]);

  // Function to add a new cover
  const addCover = () => {
    const newCoverName = `Cover ${additionalCovers.length + 1}`;
    setAdditionalCovers([...additionalCovers, newCoverName]);
  };

  // Function to delete a cover
  const deleteCover = (index) => {
    const updatedCovers = [...additionalCovers];
    updatedCovers.splice(index, 1);
    setAdditionalCovers(updatedCovers);
  };

  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [showFAQs, setShowFAQs] = useState(false);

  // Function to toggle expansion of a category
  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg mx-auto">
        {/* Header */}
        <div className="bg-green-600 p-6">
          <h2 className="text-3xl font-bold text-white">Government Schemes for Health Insurance</h2>
          <p className="text-white mt-2">Explore various government schemes designed to provide health insurance coverage and support for you and your family.</p>
          {/* Toggle FAQ button */}
          <button
            className="mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => setShowFAQs(!showFAQs)}
          >
            {showFAQs ? 'Hide FAQs' : 'Show FAQs'}
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Government Schemes */}
          {schemes.map((category, index) => (
            <div key={index} className="mb-6">
              {/* Category Header */}
              <div
                className="flex items-center justify-between bg-green-200 rounded-lg px-4 py-2 cursor-pointer"
                onClick={() => toggleCategory(category.category)}
              >
                <h3 className="text-xl font-bold text-green-900">{category.category}</h3>
                <span>{expandedCategories.includes(category.category) ? '▼' : '▶'}</span>
              </div>
              {/* Schemes List */}
              {expandedCategories.includes(category.category) && (
                <ul className="mt-2">
                  {category.schemes.map((scheme, idx) => (
                    <SchemeCard
                      key={idx}
                      emoji={scheme.emoji}
                      title={scheme.title}
                      description={scheme.description}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* FAQs Section */}
          {showFAQs && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-blue-900">Frequently Asked Questions</h2>
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          )}

          {/* Additional Covers Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-900">Additional Covers</h2>
            <ul className="mt-4">
              {additionalCovers.map((cover, idx) => (
                <li key={idx} className="bg-green-200 rounded-lg px-4 py-2 mb-2 flex items-center justify-between">
                  <span>{cover}</span>
                  <button
                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                    onClick={() => deleteCover(idx)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              onClick={addCover}
            >
              Add Cover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovSchem;
