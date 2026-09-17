import HowItWorksHero from "../howitworksComponents/howItworksHero"
import StepOne from "../howitworksComponents/stepOne"
import StepTwo from "../howitworksComponents/step2"
import HowItWorksCTA from "../howitworksComponents/howitworkscta"
const HowItWorksPage = () => {
    return (
        <div className="how-it-works-page">
            <HowItWorksHero />
            <StepOne />
            <StepTwo />
            <HowItWorksCTA />
        </div>
    )
}
export default HowItWorksPage