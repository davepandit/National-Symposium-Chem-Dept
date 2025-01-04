import React from 'react';
import registrationQR from '../img/WhatsApp Image 2025-01-04 at 23.35.10.jpeg';

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

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-red-600 font-semibold mb-4">Registration Deadline: February 20, 2025</p>
              <a href="https://forms.gle/4kpcXZ8SJVYWXCeu5" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-block">
                Early Bird Registration Form
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
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
              <div className="md:w-1/2 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">UPI Details</h3>
                <img
                  src={registrationQR}
                  alt="Registration Payment QR Code"
                  className="w-40 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;