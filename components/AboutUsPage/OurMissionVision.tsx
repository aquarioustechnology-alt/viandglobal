"use client"

import { Eye, Target } from "lucide-react"
import { motion } from "framer-motion"

export default function OurMissionVision() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[46px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          <p className="body-small max-w-4xl mx-auto text-black">
            Guiding principles that drive our commitment to excellence in global agricultural trade.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Vision Card - Red Background */}
          <motion.div
            className="bg-[#D50D0D] text-white p-8 sm:p-10 rounded-2xl"
            variants={cardVariants}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }} // Added hover animation
          >
            <div className="text-center mb-6">
              <div className="bg-white text-[#D50D0D] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h5 className="h5 font-bold">Our Vision</h5>
            </div>
            <p className="body-small-bold text-white text-center">
              To be the most trusted name in Indian agro exports, recognized globally for our unwavering commitment to
              quality, integrity, and reliability - delivering superior agricultural products that uphold India's rich
              farming heritage, empower local farmers, and build enduring partnerships across international markets.
            </p>
          </motion.div>

          {/* Mission Card - White Background with Red Border */}
          <motion.div
            className="bg-white border-2 border-[#D50D0D] p-8 sm:p-10 rounded-2xl"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }} // Added hover animation
          >
            <div className="text-center mb-6">
              <div className="bg-[#D50D0D] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h5 className="h5 font-bold text-gray-900">Our Mission</h5>
            </div>
            <p className="body-small text-center text-black">
              To consistently deliver superior agro products to markets across the globe while promoting sustainable
              farming practices, fair trade, and ethical sourcing. We strive to uplift Indian farming communities,
              reduce environmental impact, and foster long-term value for our international partners through
              transparency, innovation, and uncompromising quality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
