import { values } from "../assets/Utility"
import ValueCard from "../components/valueCard"
const WhatWeStandFor = () => {
    return (
        <section className="py-28">
            <div className="wrapper w-[90%] mx-auto">
                <div className="header-text text-center mb-15 md:mb-20">
                    <h2 className="text-section text-paper font-heading font-bold mb-5">Driven by What Matters Most</h2>
                    <p className="text-muted text-body font-body max-w-187.5 mx-auto">At RavenCars, we're committed to making every rental experience simple, dependable, and worth your time. Everything we do is built around giving you quality vehicles, honest service, and the freedom to travel with confidence.</p>
                </div>
                <div className="card-section grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5">
                    {values.map((val, index) => (
                        <ValueCard key={index} title={val.title} description={val.description} icon={val.icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WhatWeStandFor