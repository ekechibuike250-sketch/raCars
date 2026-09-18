import { useNavigate } from "react-router-dom"
const HowItWorksCTAc = () => {
    const Navigate = useNavigate();
    return (
        <section className="py-25 bg-cAction">
            <div className="w-[90%] mx-auto">
                <div className="text-center">
                    <p className="text-small text-gold font-body font-bold italic mb-5">Ready to Get Started?</p>
                    <h2 className="text-section font-heading text-paper font-bold mb-5">Your Ride Is Just a Few Steps Away.</h2>
                    <p className="font-body font-normal text-body text-muted md:max-w-187.5 mx-auto mb-7">our perfect car could be just a few clicks away. Choose your ride, pick your dates, and secure your booking today before your preferred vehicle is gone.</p>
                    <div>
                        <button className="btn text-button font-body text-ink bg-gold border-0 rounded-sm transition-all duration-200 ease-in hover:text-paper" onClick={() => Navigate('/search')}>Find Your Car</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HowItWorksCTAc