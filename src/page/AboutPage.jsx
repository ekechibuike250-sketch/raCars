
import OurStory from "../aboutpagecomponents/aboutStory"
import WhatWeStandFor from "../aboutpagecomponents/whatwestand"
import Fleet from "../aboutpagecomponents/fleet"
import AboutCallToAction from "../aboutpagecomponents/aboucta"
import AboutHeroa from "../aboutpagecomponents/abouthero"
const AboutPageC = () => {
    return (
        <div className=" ">
            < AboutHeroa />
            <OurStory />
            <WhatWeStandFor />
            <Fleet />
            <AboutCallToAction />
        </div>
    )
}

export default AboutPageC
