
import { navLinks } from "../assets/Utility"
import { Link, useNavigate } from "react-router-dom"
const MobileNavComponent = (props) => {

    return (
        <div className={`Mobile-nav md:hidden overflow-hidden bg-surface transition-all duration-300 ease-in-out ${props.isNavOpen ? 'max-h-175 h-100 opacity-100 translate-y-0' : 'max-h-0 h-0 -translate-y-4 pointer-events-none '}`} style={{ position: 'absolute', top: '100%', left: 0, width: '100%' }}>
            <div className="mobileNavtag md:hidden w-[90%] mx-auto z-2 py-4">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}><p key={index} className="text-paper text-nav font-medium font-body py-3 px-4 block transition-all duration-200 ease-in [@media(hover:hover)]:hover:bg-gold" onClick={() => props.NavigateToPage(link.href)}>{link.label}</p></li>
                    ))}
                </ul>

            </div>
            <div className="auth-btn border-t border-muted text-nav text-paper  py-5">
                <div className="w-[90%] mx-auto">
                    <Link to={'#'} className="block py-2 px-3 text-button rounded  hover:border-2 hover:border-gold w-[50%] font-medium font-body mb-2">Signin</Link>
                    <Link to={'#'} className="block py-2 px-3 text-button rounded bg-gold transition-all duration-300 ease-in  hover:bg-ink w-[50%] font-medium font-body text-ink hover:text-paper">Book a Car</Link>
                </div>
            </div>
        </div>
    )
}
export default MobileNavComponent