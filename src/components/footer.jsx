import { Link } from "react-router-dom"
import { footerLinks } from "../assets/Utility"
const Footerc = () => {
    return (
        <footer className="footer-section py-10 border-t border-muted bg-ink">
            <div className="w-[90%] mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                <div className="lg:col-span-2">
                    <div className="logo mb-5">
                        <Link to={'#'} className="text-card tracking-tight font-heading text-paper font-semibold ">RavenCars</Link>
                    </div>
                    <div>
                        <p className="text-muted font-medium font-headers" style={{ lineHeight: '1.6', fontSize: '16px' }}> Drive with confidence. Discover a better way to rent your next car with comfort, flexibility, and a fleet built for every journey.</p>
                    </div>

                </div>
                {footerLinks.map((links, index) => (
                    <div key={index} className="lg:col-span-1 pt-4">
                        <h3 className="text-nav text-gold font-heading mb-5 font-normal">{links.title}</h3>
                        <div className="flex flex-col gap-1.5">
                            {links.links.map((link, index) => (
                                <Link to={'#'} key={index} className="text-small text-muted font-body font-normal  transition-all duration-200 hover:text-paper " style={{ lineHeight: '1.6' }}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="lg:col-span-1 pt-4">
                    <h3 className="text-gold font-heading mb-5">Contact</h3>
                    <div className="flex flex-col gap-1.5">
                        <Link to={'#'} className="text-small text-muted font-body font-normal transition-all duration-200 hover:text-paper " style={{ lineHeight: '1.6' }}>hello@velora.com</Link>
                        <p className="text-small text-muted font-body font-normal">+234 800 000 0000</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom  flex justify-start items-start flex-col gap-2 md:flex-row md:justify-between md:items-center py-5 border-t border-t-muted  w-[90%] mx-auto">
                <span className="text-muted font-body text-small">© 2026 Velora. All rights reserved</span>
                <span className="text-muted font-body text-small">Follow us: Instagram · Facebook · X</span>

            </div>

        </footer>
    )
}
export default Footerc