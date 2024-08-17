import { REVIEW } from "../constants/index.jsx";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0, y:20
  },
  visible: {
    opacity: 1, y:0, transition: { duration: 0.6 }
  }
}


const Review = () => {
  return(
    <section id="review" className="container mx-auto mb-8 mt-12">
      <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      className="flex flex-col">
        <motion.p 
        variants={itemVariants}
        className="mb-10 mx-2 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-6xl">
          {REVIEW.content}
        </motion.p>
        <motion.div 
        variants={itemVariants} 
        className="flex items-center justify-center gap-6">
          <img src={xaviour} width={80} height={80} alt={REVIEW.name} className="rounded-full border" />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
      variants={itemVariants} 
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img 
          variants={itemVariants} 
          key={index} src={customer} width={80} height={80} alt="customer" className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" />
        ))}
      </motion.div>
    </section>
  )
}

export default Review