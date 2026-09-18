import './homePageGallery.css'
import { CircleCheck, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const HomePageGallery = () => {
    return (
        <section className=" gallery mt-20">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div className='bg-ink h-full w-full  px-5  md:px-10'>
                    <h2 className='text-paper font-heading font-semibold text-section mb-10'>Built Around Your Journey.</h2>
                    <p className='text-paper-light font-body text-body font-normal mb-5'> Everything about RavenCars is designed to make your time on the road
                        feel effortless, from choosing your vehicle to returning the keys.
                    </p>
                    <div className="details mb-10">
                        <p className="list1 text-muted text-body font-body font-normal mb-4 flex gap-2"> <span><CircleCheck /></span>Premium vehicles, carefully selected</p>
                        <p className="list1 text-muted text-body font-body font-normal mb-4 flex gap-2"><span><CircleCheck /></span>Simple and transparent rental process</p>
                        <p className="list1 text-muted text-body font-body font-normal mb-4 flex gap-2"><span><CircleCheck /></span>Flexible options for every journey</p>
                        <p className="list1 text-muted text-body font-body font-normal mb-4 flex gap-2"><span><CircleCheck /></span>Reliable support when you need it</p>
                    </div>
                    <div className='flex gap-2 text-paper transition-all duration-100 ease hover:text-gold'>
                        <Link to='#' className='text-paper font-body transition-all duration-100 ease hover:text-gold'>Explore Premuim Flee</Link>
                        <ArrowUpRight />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomePageGallery
