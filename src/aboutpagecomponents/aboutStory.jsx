import { storyImage } from "../assets/Utility"
const OurStory = () => {
    return (
        <section className="bg-surface py-28">
            <div className="wrapper w-[90%] mx-auto grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-[1fr_550px] items-center" style={{ lineHeight: '1.6' }}>
                <div >
                    <p className="text-body font-body text-gold italic mb-5 ">Our Story</p>
                    <h2 className="text-paper text-section font-bold font-heading mb-5">Built Around the Way You Travel</h2>
                    <p className="text-muted text-body font-normal mb-5">RavenCars was created with a simple idea: renting a car shouldn't be complicated. We wanted to create a service where finding a quality vehicle, choosing your dates, and getting on the road feels easy from start to finish.</p>
                    <p className="text-muted text-body font-normal">What started with a focus on reliable vehicles and a better rental experience continues to shape everything we do. From carefully selected cars to straightforward pricing and dependable support, we're committed to making every journey more comfortable, convenient, and stress-free.</p>
                </div>
                <div>
                    <div className="aspect-4/3 bg-surface-light rounded-2xl">
                        <img src={storyImage} alt="my story image" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default OurStory