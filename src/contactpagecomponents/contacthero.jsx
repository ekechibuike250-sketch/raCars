const ContactHero1 = (props) => {
    return (
        <section className="hero py-20 h-[70vh] bg-cAction">
            <div className="wrapper w-[90%] mx-auto">
                <div>
                    <h1 className="text-hero text-paper font-heading font-bold mb-5">We're Here to Help</h1>
                    <p className="max-w-187.5 text-muted text-body mb-7 font-normal">Have a question about a vehicle, your booking, or our rental services? Get in touch with the RavenCars team and we'll be happy to help you with whatever you need.</p>
                    <div>
                        <button className="btn border-0 bg-gold rounded font-body text-body transition-all duration-200 ease-in hover:text-paper" onClick={props.scroll}>Get in Touch</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero1