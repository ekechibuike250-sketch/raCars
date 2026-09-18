import HowItWorksCardc from "../components/howItworksCard"
import { steps } from "../assets/Utility"
import { motion } from "motion/react"
import stepsImage from '../assets/stepsImage.webp'
const HowItWorksc = () => {
    return (
        <section className="py-20">
            <div className="wrapper w-[90%] mx-auto">
                <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} viewport={{ once: true }} className="header-text flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-5  mb-15">
                    <div className="header-Right">
                        <h2 className="text-paper text-section font-body max-w-[20ch] font-bold">Get on the Road in 3 Simple Steps</h2>
                    </div>
                    <div className="header-left md:pt-20">
                        <p className="text-paper-light text-body font-body max-w-[50ch] mb-8" >Renting a car with RavenCars is quick and straightforward. Choose your ride, pick your dates, and enjoy the journey.</p>
                        {/* <button className="btn text-button text-paper border-gold font-body hover:bg-gold transition-all hover:text-ink">Browse Our Cars</button> */}
                    </div>
                </motion.div>
                <div className="md:w-[70%] mx-auto mb-10">
                    <div className="aspect-3/2 h-70 w-full">
                        <img src={stepsImage} className="w-full h-full object-cover md:rounded-0" alt="" />
                    </div>
                </div>
                <div className="howIt-works-step mt-5 grid grid-cols-1 gap-5 md:w-[40%] md:mx-auto ">
                    {steps.map((step, index) => (
                        <HowItWorksCardc number={step.number} title={step.title} description={step.description} key={index} />

                    ))}

                </div>


            </div>
        </section>
    )
}
export default HowItWorksc