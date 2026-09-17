const CallToACtion = () => {
    return (
        <section className="bg-cAction py-32">
            <div className="w-[90%] mx-auto">
                <div className="text-center ">
                    <h2 className="text-paper text-section font-heading font-bold">Ready to Hit the Road?</h2>
                    <p className="text-body text-muted font-body max-w-[600px] mx-auto mt-5">Choose your perfect ride, book with ease, and enjoy the freedom to go wherever the road takes you.</p>
                    <div className="action-btn flex justify-center gap-4 mt-5 md:mt-10">
                        <button className="btn bg-gold text-button text-ink font-body border-2 border-gold hover:text-paper hover:bg-ink transition-all duration-200 ease-i rounded-sm">Browse Our Cars</button>
                        <button className="btn text-paper border-2 border-gold text-button font-body transition-all duration-200 ease-in hover:bg-gold hover:text-ink rounded-sm">Book a Car</button>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default CallToACtion