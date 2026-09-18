import { faqs } from "../assets/Utility"
import Accordion from "../components/acordion"
import { motion } from "motion/react"
const FAQc = () => {
    return (
        <section className='faq-section py-35 bg-surface'>
            <div className="wrapper w-[90%] mx-auto ">
                <div className="header-text mb-28 mx-auto w-[90%] text-center">
                    <p className="text-small text-gold font-body font-medium italic block mb-5">Everything You Need to Know</p>
                    <motion.h2 className="text-section text-paper font-heading  font-extrabold mb-5" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>Frequently Asked Questions</motion.h2>
                    <motion.p className="text-muted text-body font-body font-normal mx-auto text-center max-w-150" style={{ lineHeight: '1.6' }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} viewport={{ once: true }} >Have questions about renting with RavenCars? Find quick answers to some of the most common questions from our customers.</motion.p>
                </div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="accodion  md:w-[60%] mx-auto">
                    {faqs.map((faq, index) => (
                        <Accordion question={faq.question} answer={faq.answer} key={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default FAQc