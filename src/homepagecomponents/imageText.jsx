import heroTextImage from '../assets/newHeroImage.webp'
const ImageText = () => {
    return (
        <section className="imageBg h-[50vh]" style={{ background: `url(${heroTextImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="w-[90%] mx-auto pt-8">
                <div className="text-center">

                    <h2 className='text-section text-paper font-semibold font-heading mb-5'>Make Every Journey Extraordinary.</h2>

                    <p className='text-paper-light font-body text-body font-normal'>
                        Choose the car that fits your journey and experience the road
                        differently with RavenCars.
                    </p>
                    <div className='mt-8 '>
                        <button className='btn text-button font-heading text-paper font-normal border-none bg-glacial-dark rounded-md hover:bg-gold hover:text-ink'>Explore Our Fleet</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ImageText