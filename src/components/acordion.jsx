
const Accordion = (props) => {
    return (
        <div className="collapse collapse-plus bg-surface-light  mb-5 ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-heading text-paper font-bold  d md:text-xl  rounded-2xl  mb-1" style={{ fontSize: '18px' }}>{props.question}</div>
            <div className="collapse-content mt-5 text-body font-body font-normal text-muted ">{props.answer}</div>
        </div>

    )
}
export default Accordion