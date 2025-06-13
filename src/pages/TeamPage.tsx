import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};

const executiveTeam = [
  {
    name: 'Ramesh Moochikal',
    title: 'Chief Executive Officer',
    bio: 'Ramesh Moochikal is the Chief Executive Officer of Africa Improved Foods since 1st June 2023. A senior global leader with a proven track record of over 30 years of financial and operating acumen, having managed successfully through various business cycles. He delivered growth through a mix of organic approaches and acquisitions. With deep experiences in starting up, growing and leading a high growth Agriculture and Food business in developed and emerging markets in Africa, Asia and Europe his current remit spans all business aspects including procurement, processing, supply chain management, distribution and marketing. Each of these demand diverse and detailed execution and risk management competencies.',
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/04/Ramesh-Moochikal-2.png' // Placeholder image
  },
  {
    name: 'Jan Vriens',
    title: 'Chief Operations Officer',
    bio: 'Jan Vriens is an experienced international executive with experience in fine chemicals, resins, pharmaceuticals and food operations. A Master\'s Degree holder in Chemical Engineering from the University of Technology of Eindhoven, he joined Royal DSM, a global science based company active in health, nutrition and materials in 1985 where he occupied several senior positions such as Director of Exports, Business Director- DSM Special products, Director- Strategic Projects and New Business Development and many more key roles all in three countries namely the Netherlands, China and Japan. Jan joined Africa Improved Foods (Holding), a joint venture of the Government of Rwanda and a consortium of Royal DSM, IFC, CDC and FMO in 2015. He currently serves as the Chief Operations Officer overseeing and leading all of the Company\'s operations in Rwanda and later on in other Sub-Saharan countries where AIF will actively continue addressing malnutrition and stunting through manufacturing high quality nutritious foods. He has hands on know-how in Mergers & Acquisitions, Projects, Development and Strategic Planning and is passionate about inspirational leadership, people development and cultures.',
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/04/Mask-Group-15.jpg' // Placeholder image
  },
  {
    name: 'Yannick Theys',
    title: 'Chief Finance Officer',
    bio: 'Yannick Theys is Africa Improved Foods\' Chief Finance Officer since October 2023. This is after a three-year tenure as Head of Finance for the European region of the Human Nutrition & Care business of DSM-Firmenich. Prior to this role, Yannick held many senior Finance roles across three continents, operating in Belgium, Netherlands, United States of Amerika, Switzerland and now Rwanda. Yannick is a result-oriented professional with a high business acumen and hands-on experience in Finance and operations management. Over the course of his 20-year career, he amassed extensive knowledge in key disciplines including Business Restructuring, Business Partnering, Operations Controlling, Project Management, Auditing. He holds a Master\'s degree in Applied Economics from Hasselt University in Belgium.',
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/10/CFO3.png' // Placeholder image
  },
  {
    name: 'Abraham Mathai',
    title: 'Country Manager for Rwanda',
    bio: 'Meet Abraham Mathai, our accomplished Country Manager for Rwanda. With nearly three decades of expertise in profit center management, international commodity sales, supply chain operations, and procurement, Abraham is a seasoned executive driving business growth and operational excellence across diverse sectors including Agri commodities, Retail, and FMCG. Passionate about business transformation and cross-cultural collaboration, Abraham brings a wealth of experience to Africa Improved Foods. His leadership at Olam International Limited, where he served as Vice President of International Sales, Procurement & Logistics, exemplifies his strategic acumen in optimizing operations and fostering key partnerships across global markets. Armed with a Post Graduate Diploma in Management from the Indian Institute of Management, Calcutta, and a B.Tech in Production Engineering from Regional Engineering College, Calicut, Abraham combines academic rigor with practical industry expertise to propel sustainable growth and operational excellence in Rwanda and beyond.',
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-31-at-3.30.37-PM-1.jpeg' // Placeholder image
  },
  {
    name: 'Rajesh Singh',
    title: 'Procurement & Sustainability Director',
    bio: 'Meet Rajesh Singh, our distinguished Procurement Director, bringing over 28 years of expertise in P&L management, sourcing, trading, and distribution for various agro commodities across West Africa. Rajesh\'s extensive experience spans key roles at reputable organisations such as Olam International Limited (Singapore), Arise IIP (Dubai), Wacot (TGI/Chi group, Nigeria), and Colgate Palmolive Ltd. His commitment to sustainable partnerships is reflected in his work with cooperatives, communities, and farmers, fostering long-term growth for agriculture in Africa. A competent professional in new business development, supply chain management, trading, commercial operations, sales, marketing, strategic planning, mergers and acquisitions, and process transition, Rajesh has managed mid-size manufacturing plants in cocoa, sesame, and cotton operations. Rajesh, a Science Graduate from Delhi University, further enhanced his knowledge with short-term programs from MIT Sloan, Colombia Business School, and Babson College. His proficiency in achieving profitability through optimal resource utilisation, strategic planning, and team development makes him an invaluable asset to our team.',
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2024/01/Rajesh-Singh.png' // Placeholder image
  },
  {
    name: 'Gloriah Ngabire',
    title: 'Human Resource Manager',
    bio: 'Gloriah Ngabire is the Human Resource Manager for Africa Improved Foods (AIF) with over 13 years of expertise in Human Resources and organizational development. She is a result-focused leader who deliver talent acquisition, retention, and motivation solutions and fresh thinking that help companies harness the full power of one of their most valuable assets – their people. Gloriah is passionate about people. Her experience cuts across different sectors including Manufacturing, Financial Services and Public Service. Prior to joining AIF Gloriah served at KPMG East Africa as the Head of Human Resource Rwanda serving both internal (staff) and external (consultancy projects) clients. Before that, Gloriah worked with Rwanda Development Board Development where she started her HR professional journey overseeing talent acquisition, performance management and employment engagement starting her career. She holds a bachelor\'s degree In Human Resource Management from Makerere University, Kampala – Uganda.',
    image: 'https://africaimprovedfoods.com/wp-content/uploads/2023/08/Untitled-1.png' // Placeholder image
  },
];

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          ></div>
          <motion.div
            className="relative bg-white rounded-lg shadow-2xl p-8 max-w-lg mx-auto z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-emerald-400 shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
            <p className="text-emerald-700 text-md text-center mb-4">{member.title}</p>
            <p className="text-gray-700 text-base leading-relaxed">{member.bio}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 to-orange-50 text-gray-800 py-16">
      {/* Background Blurs */}
      <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -top-20 -left-20 z-0" />
      <div className="absolute w-96 h-96 bg-teal-200/20 rounded-full blur-2xl -bottom-32 -right-32 z-0" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.15 }}
        >
          Meet Our Executive Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveTeam.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 flex flex-col items-center text-center cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              viewport={{ once: false, amount: 0.15 }}
              onClick={() => openModal(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-emerald-400 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-emerald-700 text-sm mb-4">{member.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
              <button
                onClick={(e) => { e.stopPropagation(); openModal(member); }}
                className="mt-4 text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <TeamMemberModal member={selectedMember} onClose={closeModal} />
    </div>
  );
}; 