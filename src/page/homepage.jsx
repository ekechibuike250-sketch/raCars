import HomeHeroComponent from "../homepagecomponents/HomeHero"
import FeaturedCars from "../homepagecomponents/Featuredcar"
import WhyChooseUsSection from "../homepagecomponents/Whychooseus"
import HowItWorksc from "../homepagecomponents/HowitWorks"
import Testimonialt from "../homepagecomponents/testimonial"
import FAQc from "../homepagecomponents/faq"
import CallToACtionc from "../homepagecomponents/callToaction"
import CarLogosc from "../homepagecomponents/carLogos"
import ExperienceC from "../homepagecomponents/experience"
import HomePageGallery from "../homepagecomponents/homepageMgallery"
import ImageTextc from "../homepagecomponents/imageText"
const HomePagec = () => {
    return (
        <div className="homePage">
            <HomeHeroComponent />
            <CarLogosc />
            <ExperienceC />
            {/* <SearchSection /> */}
            <FeaturedCars />
            <HomePageGallery />
            <div className="py-20">
            </div>
            <ImageTextc />
            <WhyChooseUsSection />
            <HowItWorksc />
            <Testimonialt />
            <FAQc />
            <CallToACtionc />

        </div>
    )
}
export default HomePagec