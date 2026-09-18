import { testimonials } from "../assets/Utility"
import { motion } from 'motion/react'
const Testimonialt = () => {
    return (
        <section className="py-25">
            <div className="wrapper w-[90%] mx-auto">
                <div className="header-text text-center max-w-175 mx-auto mb-10 md:mb-20 ">
                    <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="text-section text-paper font-heading font-bold mb-5" style={{ lineHeight: '1.6' }}>Trusted by Drivers</motion.h2>
                    <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="text-body text-muted font-body font-normal">See why customers choose RavenCars for comfortable cars, simple bookings, and a hassle-free rental experience.</motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-5">
                    {testimonials.map((test, index) => (
                        <div className="card  bg-surface p-5 rounded-md transition-all ease-in duration-200 translate-y-0 hover:-translate-y-3" key={index}>
                            <div className="w-12 h-12 rounded-full mb-5">
                                <img src={test.image} alt="personpng" loading="lazy" decoding="async" className="h-12 w-12 rounded-full object-cover" />
                            </div>
                            <div className="mb-5">
                                <h3 className="text-card text-paper mb-5 font-heading ">{test.title}</h3>
                                <p className="text-body text-muted font-normal font-body ">{test.review}</p>
                            </div>
                            <div className="mb-5">
                                <h4 className="text-card font-heading text-paper mb-5"> {test.name}</h4>
                                <p className="text-body italic text-gold font-body">{test.location}</p>
                            </div>
                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    )
}
export default Testimonialt