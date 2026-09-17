import HomeHeroComponent from "../homepagecomponents/HomeHero"
import SearchSection from "../homepagecomponents/Search"
import FeaturedCars from "../homepagecomponents/Featuredcar"
import WhyChooseUsSection from "../homepagecomponents/Whychooseus"
import HowItWorks from "../homepagecomponents/HowitWorks"
import Testimonial from "../homepagecomponents/testimonial"
import FAQ from "../homepagecomponents/faq"
import CallToACtion from "../homepagecomponents/callToaction"
import CarLogos from "../homepagecomponents/carLogos"
import Experience from "../homepagecomponents/experience"
import HomePageGallery from "../homepagecomponents/homepageMgallery"
import ImageText from "../homepagecomponents/imageText"
const HomePage = () => {
    return (
        <div className="homePage">
            <HomeHeroComponent />
            <CarLogos />
            <Experience />
            {/* <SearchSection /> */}
            <FeaturedCars />
            <HomePageGallery />
            <div className="py-20">
            </div>
            <ImageText />
            <WhyChooseUsSection />
            <HowItWorks />
            <Testimonial />
            <FAQ />
            <CallToACtion />

        </div>
    )
}
export default HomePage