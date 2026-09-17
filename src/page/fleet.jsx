import { useState, useEffect } from "react"
import FleetHero from "../FleetPageComponents/fleetHero"
import FleetFilter from "../FleetPageComponents/fleetfilter"
import FleetGallery from "../FleetPageComponents/fleetgalery"
import FleetCta from "../FleetPageComponents/fleetCta"
import { carsgalery } from "../assets/Utility"
const Fleet = () => {
    const [carList, setCarList] = useState([]);
    const [filter, setFilter] = useState('All');
    const SwitchFilter = (Filter) => {
        if (Filter === 'All') {
            setCarList(carsgalery);
            setFilter(Filter)
            return
        }
        let cars = carsgalery.filter((car) => car.category === Filter)
        setCarList(cars)
        setFilter(Filter)
    }
    useEffect(() => {
        setCarList(carsgalery)
    }, [])
    return (
        <div className="fleets">
            <FleetHero />
            <FleetFilter filter={filter} change={SwitchFilter} />
            <FleetGallery carList={carList} />
            <FleetCta />
        </div>
    )
}
export default Fleet