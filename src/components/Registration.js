import React from "react";
import registrationQR from "../img/upi-scanner.jpg";

const registrationFees = [
  {
    category: "UG/PG Students",
    fee: 1000,
  },
  {
    category: "Research Scholars",
    fee: 2000,
  },
  {
    category: "Postdoctoral Fellows",
    fee: 2500,
  },
  {
    category: "Faculty/Scientists",
    fee: 4000,
  },
  {
    category: "Industry Delegates",
    fee: 7000,
  },
];

const Registration = () => {
  return (
    <section className="py-24 bg-white" id="registration">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Registration
        </h2>
        <div className="text-red-600 text-center mb-12 mt-5">
        Click the register button below to register.
        </div>

        <div className="bg-blue-50 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Registration Fees</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Fee (INR)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map((fee, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {fee.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                        {fee.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-red-600 font-semibold mb-4">
                Registration Deadline: 31<sup>st</sup> April 2025
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block"
              >
                Register here
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">
                  Account Details for payment
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Account: NITK Surathkal</li>
                  <li>Account No.: 37772503911</li>
                  <li>Bank Name: SBI, NITK</li>
                  <li>IFSC Code: SBIN0002273</li>
                  <li>MICR Code: 575002013</li>
                  <li>SWIFT Code: SBININBB146</li>
                  <li>UPI ID: xyz3911.948@sbi</li>
                </ul>
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">UPI Details</h3>
                <img
                  src={registrationQR}
                  alt="Registration Payment QR Code"
                  className="w-40 h-auto rounded-lg shadow-md"
                />
                {/* <span>scanner will be uploaded soon..</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
