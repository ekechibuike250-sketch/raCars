import HowItWorksHero from "../howitworksComponents/howItworksHero"
import StepOnec from "../howitworksComponents/stepOne"
import StepTwo from "../howitworksComponents/step2"
import HowItWorksCTAc from "../howitworksComponents/howitworkscta"
const HowItWorksPagec = () => {
    return (
        <div className="how-it-works-page">
            <HowItWorksHero />
            <StepOnec />
            <StepTwo />
            <HowItWorksCTAc />
        </div>
    )
}
export default HowItWorksPagec