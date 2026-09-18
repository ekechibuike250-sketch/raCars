const AboutHeroa = () => {
    return (
        <section className="py-22 bg-ink  min-h-[60vh] w-[90%] mx-auto">
            <div className="hero-wrapper">
                <h1 className="text-hero text-paper font-bold font-heading max-w-212.5 mb-5 "> More Than a Rental. It's Your Journey.</h1>
                <p className="text-body text-muted md:max-w-187.5 mb-10 " style={{ lineHeight: '1.6' }}>At RavenCars, we believe renting a car should be simple, reliable, and enjoyable. We're committed to providing quality vehicles and a seamless rental experience that gives you the freedom to travel on your terms.</p>
                <div>
                    <button className="btn text-button font-body border-0  text-ink bg-gold transition-all duration-200 ease-in hover:text-paper rounded">Explore Our Cars</button>
                </div>
            </div>
        </section>
    )
}

export default AboutHeroa