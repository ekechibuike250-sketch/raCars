import './HomeHero.css'
import { motion } from 'motion/react'
import { heroBackgroundImage } from '../assets/Utility'
import './feature.css'

const HomeHeroComponent = () => {
    return (
        <section className="feature pt-20 md:pt-7 md:pb-7 bg-ink h-dvh md:h-[80dvh] relative" style={{ backgroundImage: `${heroBackgroundImage}`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="herowrapper md:py-45 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 items-center">
                <div className="hero-header-text h-full  md:pt-5" style={{ paddingTop: '0px' }}>
                    <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="font-heading text-hero font-bold text-paper  " style={{ wordBreak: 'break-word' }}>Drive Something Extraordinary.</motion.h1>

                </div>
                <div className="md:flex md:flex-col">
                    <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="mt-6 text-paper-light font-body text-body  max-w-full md:max-w-112.5 font-normal " style={{ wordBreak: 'break-word' }}>Experience premium vehicles, flexible rentals and effortless booking for every journey.</motion.p>
                    <motion.button initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="btn mt-10 rounded-lg text-button bg-gold font-body text-ink transiton-all hover:text-paper border-0 w-[200px] hover:bg-glacial-dark">Explore Cars </motion.button>

                </div>
            </div>
            <div className='hidden absolute md:flex flex-col items-center top-10 right-20'>
                <div className='w-[60px] h-[60px] bg-glacial-dark md:flex items-center justify-center rounded-full'>
                    <p className='text-paper text-body font-body ' >25%</p>

                </div>
                <p className='text-paper-light font-body text-body font-semibold'>Satisfaction  </p>
            </div>
        </section>
    )
}
export default HomeHeroComponent