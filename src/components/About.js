import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About AFMECA - Only title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-6">
            About AFMECA-2025
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About NITK */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              About NITK
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                National Institute of Technology Karnataka (NITK), Surathkal,
                has established itself as one of the top technological
                institutions in India and richly deserved recognition as an
                Institute of National Importance under the NIT Act 2007 with the
                vision of facilitating the transformation of students into good
                human beings, responsible citizens and competent professionals,
                focusing on the assimilation, generation and dissemination of
                knowledge. NITK-Surathkal, located in Mangalore, Karnataka,
                India, was established as Karnataka Regional Engineering College
                (KREC) in 1960 and upgraded as the National Institute of
                Technology Karnataka in 2002. Sri. U. Srinivasa Mallya, a
                visionary and philanthropist, contributed immensely to the
                development of the coastal region of Karnataka, and his effort
                towards establishing KREC (now NITK) is the most significant
                one. In recognition of his role as the founder and architect of
                the institute, the campus premises is named after him as
                Srinivasnagar.
              </p>
            </div>
          </motion.div>

          {/* About Chem Dept */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              About Chemistry Department
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                The Department of Chemistry, established in 1960, has grown with
                a reputation as a centre of academic and research activities.
                The department offers an M.Sc. degree in chemistry and a Ph.D.
                degree in the different areas of chemistry. The department
                caters basic science courses in chemistry to all undergraduate
                programs. The department's research activities are well evident
                from the large number of research articles published in
                peer-reviewed journals, research projects undertaken by external
                funding agencies, and conferences, workshops, and short-term
                programs organized. The research activities taken up by the
                faculty in the department include areas such as Biophysical
                Chemistry, Biosensors, Catalysis, Computational Chemistry,
                Coordination Chemistry, Corrosion Science, Crystal Engineering,
                Drug Discovery, Electrochemistry, Functional Materials, Green
                Chemistry, Medicinal Chemistry, Membrane Technology,
                Nanomaterials, Organic Electronics, Photo-Chemistry, Polymers,
                Reaction Kinetics, Supercapacitors, Supramolecular Chemistry,
                Polyoxometalates, etc. The department features a dedicated
                library and two sophisticated instrument laboratories, enabling
                students to gain hands-on experience with equipment such as
                UV-Vis, Fluorescence Spectroscopy, Contact angle analyzer, Zeta
                potential analyzer, Cyclic Voltammetry, etc.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-[48px]">
          {/* About Symposium */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              About the Symposium
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                The symposium provides an engaging platform for researchers,
                students, and industry professionals to explore cutting-edge
                advancements in functional materials. The event emphasizes
                innovations in energy storage, batteries, supercapacitors,
                conversion technologies, and catalytic processes, fostering
                knowledge exchange. The event includes hands-on training
                sessions on characterization techniques using instruments such
                as UV-Vis, FTIR, TGA, and NMR, ensuring a practical learning
                experience. Featuring expert talks, technical sessions, and
                interactive discussions, this Symposium serves as an excellent
                opportunity to stay updated on the latest trends and research in
                interdisciplinary fields along with the real-world applications
                and emerging challenges, driving progress in the field of
                functional materials. Additionally, it provides a platform for
                networking and collaboration, paving the way for future research
                partnerships and innovative projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
