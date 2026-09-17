import FeatureIcons from "./icons"
const ValueCard = (props) => {
    return (
        <div className="value-card bg-surface p-5 rounded border-r border-gold translate-y-0 transition-all duration-200 ease-in hover:-translate-y-3">
            <div className="mb-7">
                <FeatureIcons icons={props.icon} />
            </div>
            <h3 className="text-card text-paper font-heading font-semibold mb-7">{props.title}</h3>
            <p className="text-muted text-body font-body font-normal">{props.description}</p>
        </div>
    )
}
export default ValueCard