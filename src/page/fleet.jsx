import { useState, useEffect } from "react"
import FleetHeroc from "../FleetPageComponents/fleetHero"
import FleetFilterc from "../FleetPageComponents/fleetfilter"
import FleetGallery from "../FleetPageComponents/fleetgalery"
import FleetCtac from "../FleetPageComponents/fleetCta"
import { carsgalery } from "../assets/Utility"
const FleetPage = () => {
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
            <FleetHeroc />
            <FleetFilterc filter={filter} change={SwitchFilter} />
            <FleetGallery carList={carList} />
            <FleetCtac />
        </div>
    )
}
export default FleetPage