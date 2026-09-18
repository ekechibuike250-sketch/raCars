import { HowitworksPics } from "../assets/Utility"
const StepOnec = () => {
    return (
        <section className="py-28 bg-surface">
            <div className="w-[90%] mx-auto">
                <div className="section-grid grid gap-15 md:grid-cols-[1fr_550px] md:gap-5 items-center">
                    <div className="text-section">
                        <p className="text-body text-gold italic font-body mb-5 font-normal">Choose Your Car</p>
                        <h2 className="text-section text-paper font-heading font-bold mb-5">Find the Right Ride for Your Journey</h2>
                        <p className="text-body text-muted font-body font-normal max-w-150">Browse our selection of reliable and well-maintained vehicles, from comfortable sedans to spacious SUVs. Compare your options and choose the car that best fits your trip, style, and needs.</p>
                    </div>
                    <div className="image-section">
                        <div className="aspect-4/3">
                            <img src={HowitworksPics} alt="mercedes glk picture" className="object-cover h-full w-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StepOnec