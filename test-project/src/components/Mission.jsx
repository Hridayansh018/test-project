import mission from "../assets/mission.mp4"
import missionImg from "../assets/mission.jpeg"
import { MISSION } from "../constants"
import { motion } from "framer-motion"

const Mission = () => {
  return(
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>
        <div className="relative flex items-center justify-center">
          <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="w-full rounded-3xl" 
          autoPlay muted loop playsInline 
          poster={missionImg}>
            <source src={mission} type="video/mp4"/>
          </motion.video>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5, delay: 0.4 }} 
          className="absolute h-full w-full rounded-3xl bg-black/50"></motion.div>
          <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Mission