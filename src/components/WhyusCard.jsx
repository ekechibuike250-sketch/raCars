import FeatureIcons from "./icons"
import { motion } from 'motion/react'
const WhyUsCard = (props) => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="p-5 hover:md:border-l hover:bg-surface hover:border-gold transition-all ease-in duration-200 group">
            <div className="icon mb-10 ">
                <FeatureIcons icons={props.icon} />
            </div>
            <h3 className="text-paper mb-10 text-card font-body font-medium ">{props.title}</h3>
            <p className="text-muted font-body text-body" style={{ lineHeight: '1.6' }}>{props.description}</p>
        </motion.div>
    )
}
export default WhyUsCard