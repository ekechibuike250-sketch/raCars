import { ChevronDown } from "lucide-react"
const StepTwo = () => {
    return (
        <section className="py-26">
            <div className="w-[90%] mx-auto">
                <div className="grid md:grid-cols-[1fr_450px] md:items-center gap-5">
                    <div className="">
                        <p className="text-gold italic font-body font-normal text-body mb-5">Book Your Ride</p>
                        <h2 className="text-section text-paper font-heading font-bold mb-5">Reserve Your Car in Just a Few Steps</h2>
                        <p className="text-body text-muted font-body font-normal max-w-150">Select your pickup location, choose your rental dates, and provide your details to complete your booking. Our simple process makes it easy to reserve your preferred car without the unnecessary hassle.</p>
                    </div>
                    <div>
                        <div className="fake-form bg-surface rounded-2xl p-5 relative after:absolute  after:top-0 after:w-full after:h-full   after:content-[''] opacity-90">
                            <h3 className="font-heading font-bold text-card text-paper mb-10">Continue ur Booking </h3>
                            <div className="mb-5">
                                <p className="font-normal text-paper font-heading text-body ">Mercedes c43 Amg</p>
                            </div>
                            <div className="w-full rounded-md bg-ink flex justify-between items-center mb-5">
                                <p className="p-2 text-paper">select location</p>
                                <ChevronDown className="text-[16px] text-paper" />

                            </div>
                            <div className="flex w-full gap-5 mb-10">
                                <div className="w-full">
                                    <p className="text-small  text-gold font-bold mb-2">pick-up Date</p>
                                    <p className="w-full rounded-md bg-ink p-2 font-body text-muted font-light">Select Date</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-small font-body text-gold font-bold mb-2">returning  Date</p>
                                    <p className="w-full rounded-md bg-ink p-2  font-body text-muted font-light">Select Date</p>
                                </div>

                            </div>
                            <div className="mb-5">
                                <button className="btn font-body text-button w-full bg-gold border-0 cursor-pointer rounded-sm">Book ur Ride</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StepTwo