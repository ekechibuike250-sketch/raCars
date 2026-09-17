import AboutHero from "../aboutpagecomponents/abouthero"
import OurStory from "../aboutpagecomponents/aboutStory"
import WhatWeStandFor from "../aboutpagecomponents/whatwestand"
import Fleet from "../aboutpagecomponents/fleet"
import AboutCallToAction from "../aboutpagecomponents/aboucta"
const AboutPageC = () => {
    return (
        <div className=" ">
            < AboutHero />
            <OurStory />
            <WhatWeStandFor />
            <Fleet />
            <AboutCallToAction />
        </div>
    )
}

export default AboutPageC
