import { useRef } from "react"
import ContactHero from "../contactpagecomponents/contacthero"
import ContactSection from "../contactpagecomponents/contacAdress"
import CTA from "../contactpagecomponents/contactCta"
const ContactPage = () => {
    const csection = useRef(null)
    const scrollToSection = () => {
        csection.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <ContactHero scroll={scrollToSection} />
            <ContactSection cscroll={csection} />
            <CTA />
        </div>
    )
}

export default ContactPage