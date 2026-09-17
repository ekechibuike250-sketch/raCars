import { useNavigate } from "react-router-dom"
const CTA = () => {
    const Navigate = useNavigate()
    return (
        <section className="bg-cAction py-24">
            <div className="wrapper w-[90%] mx-auto">
                <div className="text-center">
                    <h2 className="text-section text-paper font-heading font-bold mb-5">Let's Get You Moving.</h2>
                    <p className="text-muted text-body font-body font-normal mx-auto max-w-187.5 mb-5">Whether you're planning a weekend getaway, a business trip, or simply need a reliable ride, RavenCars is ready to make your journey easier. Find the right car and start your next adventure with confidence.</p>
                    <div className="mt-5">
                        <button className="btn bg-gold text-ink rounded-sm text-button font-body border-0 transition-colors duration-200 ease-in hover:text-paper" onClick={() => Navigate('/search')}>Browse Our Cars</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CTA