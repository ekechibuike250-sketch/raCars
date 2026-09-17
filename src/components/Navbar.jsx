import { header, li } from "motion/react-client"
import { Link, useNavigate } from "react-router-dom"
import { navLinks } from "../assets/Utility"
import { Menu, X } from "lucide-react"
import MobileNavComponent from "./MobileNav"
import { useRef, useState } from "react"

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const Navigate = useNavigate()
    const openMobileNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    const NavigateToPage = (link) => {
        setIsNavOpen(!isNavOpen)
        Navigate(`/${link}`)
    }
    return (
        <header className={`relative z-50 bg-surface py-7  `}>
            <nav className="flex items-center justify-between text-paper w-[90%] mx-auto">
                <div className="logo">
                    <Link to="/#" className="text-card tracking-tight font-heading">RavenCars</Link>
                </div>
                <ul className=" hidden md:flex  items-center gap-4 ">
                    {navLinks.map((link, index) => (
                        <li key={index}><Link key={index} to={link.href} className="font-body text-nav font-medium py-3 px-4 rounded-2xl transition-all duration-200 hover:bg-gold hover:text-ink ">{link.label}</Link></li>
                    ))}
                </ul>
                <div className="authbtn hidden md:flex  items-center gap-5 ">
                    <Link to={'/login'} className="py-3 px-4  rounded-2xl font-body text-button transition-all duration-200  border-2 border-transparent hover:border-2 hover:border-gold">Sign in</Link>
                    <Link to={'#'} className="py-3 px-4 bg-gold rounded-2xl font-body text-button text-ink transition-all duration-200 hover:text-paper">Book a Car </Link>
                </div>
                <div className="mobile-toggle md:hidden" onClick={openMobileNav}>
                    {isNavOpen ? <X className='text-gold' /> : <Menu className="text-gold" />}
                </div>

            </nav>

            <MobileNavComponent isNavOpen={isNavOpen} NavigateToPage={NavigateToPage} />



        </header>
    )
}
export default NavBar