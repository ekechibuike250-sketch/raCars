import { FleetPics } from "../assets/Utility"
const Fleet = () => {
    return (
        <section className="py-28 bg-surface">
            <div className="w-[90%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-[550px_1fr] items-center">
                <div className="aspect-4/3 rounded-2xl bg-surface-light">
                    <img src={FleetPics} alt="" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="text">
                    <p className="text-body italic font-body font-normal text-gold mb-5">Our Fleet</p>
                    <h2 className="text-paper text-section font-heading font-bold mb-5">Find the Right Car for Every Journey</h2>
                    <p className="text-muted text-body font-body mb-10" style={{ lineHeight: '1.6' }}>From stylish sedans to spacious SUVs, our fleet is carefully selected to give you the comfort, performance, and reliability you need. Whether you're heading across the city or planning a longer trip, there's a RavenCars ride ready for you.</p>
                    <div>
                        <button className="btn bg-gold font-body text-button text-ink border-0 rounded transition-all duration-200 ease-in hover:text-paper">Explore Full Fleet</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fleet