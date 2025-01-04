import React from 'react';

const registrationFees = [
  {
    category: 'Industry Delegates',
    earlyBird: 7080,
    regular: 8260
  },
  {
    category: 'Academia/ R & D Centres',
    earlyBird: 4720,
    regular: 5900
  },
  {
    category: 'Research Scholar/PG/UG',
    earlyBird: 2950,
    regular: 3540
  },
  {
    category: 'Non-participant/Accompany',
    earlyBird: 1770,
    regular: 2360
  }
];

const Registration = () => {
  return (
    <section className="py-24 bg-white" id="registration">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Registration</h2>
        <div className="bg-green-50 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Registration Fees*</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Early Bird Registration (INR)</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">Regular Registration (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map((fee, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{fee.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{fee.earlyBird}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{fee.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">The Registration Fee mentioned for all the categories includes 18% GST.</p>

          <div className="my-8 text-center">
            <a href="https://forms.gle/4kpcXZ8SJVYWXCeu5" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-block">
              Early Bird Registration Form
            </a>
          </div>

          <p className="mb-6 text-gray-600">
            The conference registration fee includes kit, proceedings, and admission to all technical sessions, lunch, tea/coffee, and snacks. It does not include accommodation. Limited accommodation is available for participants in the NITK Guest House. On prior request, they may be provided accommodation based on the availability on a payment basis. A list of nearby Hotels and their tariff will be updated on the conference website for the benefit of outstation participants.
          </p>

          <h3 className="text-2xl font-bold mb-4">Account Details</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Account: The Director, NITK Surathkal</li>
            <li>Account No.: 37772503911</li>
            <li>Bank Name: SBI, NITK</li>
            <li>IFSC Code: SBIN0002273</li>
            <li>MICR Code: 575002013</li>
            <li>SWIFT Code: SBININBB146</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Registration;