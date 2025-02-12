import React from "react";
import { motion } from "framer-motion";

const Abstract = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Abstract Submission Guidelines
          </h2>

          <div className="prose max-w-none">
            {/* Add CMT submission info */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-lg">
                Abstracts should be sent to{" "}
                <a
                  href="mailto:afmeca2025@nitk.edu.in"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  afmeca2025@nitk.edu.in
                </a>
                . Please follow the guidelines below for preparing your
                abstract.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Guidelines:</h3>
            <p className="mb-6">
              Please follow these formatting guidelines for your abstract
              submission:
            </p>

            <ul className="space-y-4 list-disc pl-5">
              <li>
                <strong>Title:</strong> The title should be in Times New Roman,
                size 14pt, centred, and in Camel Case.
              </li>
              <li>
                <strong>Author Names:</strong> List the first author and the
                corresponding author (marked with an asterisk) in Times New
                Roman, size 12pt.
              </li>
              <li>
                <strong>Author Affiliations:</strong>Provide the full
                affiliation along with the address, written in Times New Roman,
                size 12pt.
              </li>
              <li>
                <strong>Corresponding Author Email:</strong> Mention the email
                ID of the corresponding author in Times New Roman, size 12pt.
              </li>
              <li>
                <strong>Line Spacing:</strong> Use 1.5 line spacing for the
                author details and affiliations, 1.15 line spacing for the
                abstract text.
              </li>
              <li>
                <strong>Abstract Text:</strong> The abstract must not exceed 200
                words, text should be in Times New Roman, size 12pt.
              </li>
              <li>
                <strong>Pictorial Representation:</strong> A maximum of one
                image is allowed(accepted formats are TIFF, JPEG, PNG and a
                figure caption is mandatory).
              </li>
            </ul>

            <p className="mt-6">
              Ensure adherence to these guidelines for a consistent and
              professional presentation.
            </p>
          </div>

          <div className="mt-8 text-center space-y-4">
            <a
              href="/documents/Abstract-AFMECA-2025.docx"
              download="Abstract_Template.docx"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
            >
              Download Abstract Template
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Abstract;
