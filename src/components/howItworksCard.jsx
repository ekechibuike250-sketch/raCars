import { motion } from 'motion/react'
const HowItWorksCardc = (props) => {
    return (
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2 }} className="card  p-5  border-muted rounded transition-all duration-150 ease-out ">
            <p className="text-gold font-body text-hero mb-5 text-right">{props.number}</p>
            <h3 className="text-card text-paper font-heading mb-5 font-semibold">{props.title}</h3>
            <p className="font-body text-body text-paper-light mb-5 ">{props.description}</p>
        </motion.div>
    )
}
export default HowItWorksCardc