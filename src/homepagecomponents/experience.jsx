import Experience1 from '../assets/experienc1.webp'
import Experience2 from '../assets/experirnce2.webp'
const ExperienceC = () => {
    return (
        <section className="py-20">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='  '>
                        <h2 className="text-paper text-section font-heading font-semibold mb-5">Built for the Way You Move.</h2>
                        <p className=" font-body text-body font-light text-paper-light"> From city escapes to long-distance journeys, RavenCars gives you
                            access to carefully selected vehicles built around the way you travel.
                            Choose your car, set your dates, and enjoy the road without the hassle.
                        </p>
                        <div className=''>
                            <div>
                                <p className=' font-body font-light text-body mb-8 text-paper-light'>
                                    Every journey deserves the right car. Explore a collection that
                                    combines comfort, performance, and style—so wherever you're headed,
                                    you can get there your way.
                                </p>
                                <button className='btn bg-gold font-body text-button text-ink cursor-pointer border-none rounded-md w-50 transition-all duration-200 ease-in hover:bg-glacial-dark'>Explore Our Fleet</button>
                            </div>
                        </div>


                    </div>
                    <div className='aspect-4/3 h-78 w-full mb-4'>
                        <img src={Experience2} alt="" className='w-full h-full object-cover' />

                    </div>
                    {/* <div className="aspect-4/3 mt-8 h-75 w-full"> */}
                    {/* <img src={Experience1} alt="" className='w-full h-full object-cover rounded-md' /> */}
                    {/* </div> */}


                </div>

            </div>

        </section>
    )
}
export default ExperienceC
