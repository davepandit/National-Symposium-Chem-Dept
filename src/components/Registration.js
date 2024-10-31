import React from 'react';

const Registration = () => {
  return (
    <section className="py-24 bg-white" id="registration">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Registration</h2>
        <div className="bg-green-50 rounded-lg shadow-lg p-8">
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