import { useState } from "react"
import { fleetsfilter } from "../assets/Utility"
const FleetFilter = (props) => {
    return (
        <section className="py-15 bg-surface">
            <div className="mx-auto w-[90%]">
                <h2 className="text-card font-bold font-heading mb-10 text-paper">Filter by Collection</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 w-[90%] gap-5">
                    {fleetsfilter.map((fleet, index) => (
                        <div className={`${props.filter === fleet ? "rounded-2xl bg-gold text-button font-body font-normal w-25 p-2 text-center" : "rounded-2xl  text-button font-body  font-normal w-25 p-2 text-center text-paper bg-glacial-dark"}`} key={index} onClick={() => props.change(fleet)}>{fleet}</div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default FleetFilter