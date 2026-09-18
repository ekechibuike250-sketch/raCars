
import { useEffect, useState } from "react";
import CarHeader1 from "../detailsPageComponent/carheader";

const DetailsPage1 = () => {
    const [details, setDetails] = useState({});
    useEffect(() => {
        let carDetails = JSON.parse(localStorage.getItem('Details'));
        setDetails(carDetails);
    }, [])
    return (
        <div className="">
            <CarHeader1 title={details.name} priceLabel={details.priceLabel} price={details.price} transmission={details.transmission} seats={details.seats} fuel={details.fuel} doors={details.doors} image={details.image} grids={details.grids} description={details.description} engine={details.engine} milage={details.mileage} />
        </div>
    )
}
export default DetailsPage1