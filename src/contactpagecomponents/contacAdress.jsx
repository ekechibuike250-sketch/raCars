import ContactForm from "../forms/contactform"
import FeatureIcons from "../components/icons"
const ContactSection = (props) => {
    return (
        <section className="bg-surface py-22" ref={props.cscroll}>
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:p-5">
                        {/* <h2 className="text-section font-heading text-paper font-bold mb-5">Send Us a Message</h2> */}
                        {/* <ContactForm /> */}
                        <h2 className="text-section font-heading text-paper font-bold mb-5">Contact Information  </h2>
                        <div className="rounded-md">
                            <div className="flex flex-col gap-5 mb-8 p-5 bg-surface-light rounded-2xl">
                                <h3 className="text-paper text-card font-heading font-bold">Addresses</h3>
                                <div className="flex gap-2 ">
                                    <div className="flex items-center gap-2">
                                        <FeatureIcons icons={"Mail"} />
                                        <p className="text-body font-body text-muted transition-all duration-200 ease-in hover:text-paper"> Email :</p>
                                    </div>
                                    <p className="text-muted text-body font-body transition-all duration-200 ease-in hover:text-paper">hello@ravencars.com</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2">
                                        <FeatureIcons icons={"PhoneIncoming"} />
                                        <p className="text-body font-body text-muted transition-all duration-200 ease-in hover:text-paper"> Phone :</p>
                                    </div>
                                    <p className="text-muted text-body font-body transition-all duration-200 ease-in hover:text-paper">+234 XXX XXX XXXX</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2">
                                        <FeatureIcons icons={"MapPin"} />
                                        <p className="text-body font-body text-muted transition-all duration-200 ease-in hover:text-paper"> Location :</p>
                                    </div>
                                    <p className="text-muted text-body font-body transition-all duration-200 ease-in hover:text-paper">3rd Main Land Lagos</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl mt-10 bg-surface-light">
                                <h3 className="text-card text-paper font-heading font-bold mb-5">Opening Hours</h3>
                                <p className="text-muted text-body font-body font-normal mb-4">Monday – Friday: 8:00 AM – 6:00 PM</p>
                                <p className="text-muted text-body font-body font-normal mb-4">Saturday: 9:00 AM – 4:00 PM</p>
                                <p className="text-muted text-body font-body font-normal">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:p-5 ">
                        <h2 className="text-section font-heading text-paper font-bold mb-5">Send Us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection