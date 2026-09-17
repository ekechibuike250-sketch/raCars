import { useState } from "react"
import { cars } from "../assets/Utility"
import { X } from "lucide-react"
import { motion } from "motion/react"
import './feature.css'
const FeaturedCars = () => {
    return (
        <section className="py-22 ">
            <div className="wrapper max-w-[90%] mx-auto">
                <div className="feature-header grid grid-cols-1 md:grid-cols-2 items-center gap-7 md:gap-0">
                    <div className="header-right">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-section text-paper font-semibold">Featured Cars</motion.h2>
                        <p className="text-muted font-body text-body max-w-[50ch] font-normal">Explore our handpicked selection of premium, reliable vehicles ready for your next journey.</p>

                    </div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="header-left flex  justify-end pt-20">

                        <button className="btn border-2 border-glacial-dark text-button font-body cursor-pointer mt-8 bg-glacial-dark text-ink transition-all duration-200 ease-in hover:bg-gold hover:text-ink hover:border-gold">View All Cars</button>
                    </motion.div>
                </div>
            </div>
            <motion.div className="car-grid w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-5  py-4 mt-10" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3 }} viewport={{ once: true }}>
                {cars.map((car, index) => (
                    <div className="card " key={index} >
                        <figure className="aspect-4/3 rounded-2xl h-90">
                            <img src={car.image} className="w-full h-full object-cover rounded-2xl" />
                        </figure>
                        <div className="card-body px-0 flex gap-0 ">
                            <div>
                                <span className="block text-small font-body text-muted mb-1 ">{car.category}</span>
                                <h3 className="text-paper font-heading text-body font-medium ">{car.name}</h3>
                            </div>
                            <div className="pr-2 flex flex-col ">
                                <div className="flex items-center pr-1">
                                    <p className="text-paper font-body ">{car.priceLabel}</p>
                                    <div>
                                        <div className="bg-gold  h-2 w-2"></div>
                                    </div>
                                </div>
                                <button className="btn text-button  transition-all duration-200 hover:text-paper text-ink bg-gold   mt-5  rounded-md border border-muted w-full">{car.buttonText}</button>
                                {/* <button className="btn text-button  transition-all duration-200 hover:text-paper text-gold   mt-5  rounded-md border border-muted">{car.priceLabel}</button> */}

                            </div>

                        </div>

                    </div>
                ))}

            </motion.div>

        </section>
    )

}
export default FeaturedCars