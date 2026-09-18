import { motion } from "motion/react"
import WhyUsCardc from "../components/WhyusCard"
import { features } from "../assets/Utility"
const WhyChooseUsSection = () => {
    return (
        <section className="why-us py-30 ">
            <div className="wrapper w-[90%] mx-auto">
                <div className="sectionHeader text-center max-w-3xl mx-auto ">

                    <motion.h2 className="text-section text-paper font-heading wrap-break-word font-semibold" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>Your Journey. Our Commitment.</motion.h2>
                    <motion.div className="" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
                        <p className="text-body font-body text-muted  my-5 wrap-break-word font-normal"> From premium vehicles to flexible booking, we make every part of your rental experience simple and reliable</p>
                    </motion.div>


                </div>
                <div className="why-us-grid grid md:grid-cols-4 gap-5 mt-16">
                    {features.map((feature, index) => (
                        <WhyUsCardc icon={feature.icon} title={feature.title} description={feature.description} key={index} />

                    ))}

                </div>
            </div>
        </section>
    )
}
export default WhyChooseUsSection