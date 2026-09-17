import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const CarHeader = (props) => {
    const imageRef = useRef(null)
    const [isExterior, setIsExterior] = useState(true);
    const Navigate = useNavigate();
    const switchImage = (type, bool) => {
        imageRef.current.src = type;
        if (bool) {
            setIsExterior(true)
            return
        }
        else {
            setIsExterior(false)
        }
    }


    return (
        <section className="py-20 bg-cAction">
            <div className=" w-[90%] md:w-[70%] mx-auto">
                <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:items-center md:justify-between">
                    <div className="">
                        <h1 className="text-paper text-card font-bold font-heading mb-5">{props.title}</h1>
                        <div className="flex gap-2">
                            <div className="pr-2 py-px text-small text-muted font-bold font-body border-r border-paper">{props.transmission}</div>
                            <div className="px-2 py-px text-small text-muted font-bold font-body border-r border-paper">{props.seats} seats </div>

                            <div className="px-2 py-px text-small text-muted font-bold font-body border-r border-paper">{props.doors} doors</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-price text-gold font-body font-normal">{props.priceLabel}</p>
                        <p className="text-body font-body text-muted font-semibold text-left">{(31 * props.price)} per month</p>
                        <div className="mt-4 hidden md:flex">
                            <button className="btn  text-button bg-glacial-dark text-ink font-body rounded-2xl w-50 transition-all duration-150 ease-in hover:bg-gold" onClick={() => Navigate('/login')}>Book now</button>
                        </div>
                    </div>

                </div>
                <div className="image-text-grid grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                    <div className=" mb-5">
                        <div className="aspect-4/3 h-full w-full">
                            <img src={props.image} ref={imageRef} className='w-full h-full object-cover rounded-2xl' alt="" />
                        </div>

                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div onClick={() => switchImage(props.image, true)}>
                                <div className="w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center mb-1">
                                    <div className={`${isExterior ? 'w-1.5 h-1.5 rounded-full bg-paper ' : ''}`}></div>
                                </div>
                                <p className="text-paper text-button font-bold font-body">Exterior </p>
                            </div>
                            <div className="" onClick={() => switchImage(props.grids, false)}>
                                <div className="w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center mb-1">
                                    <div className={`${isExterior ? '' : 'w-1.5 h-1.5 rounded-full bg-paper'}`}></div>
                                </div>
                                <p className="text-paper text-button font-bold font-body">Interior </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-card text-paper font-bold font-heading mt-5 mb-5 ">Introduction </h2>
                            <p className="text-body font-body text-muted font-light">{props.description}</p>
                        </div>
                        <div>
                            <h3 className="text-paper text-card font-semibold font-heading mb-4">Features </h3>
                            <div className="grid grid-cols-4 border-t border-paper">
                                <div className=" border-gold px-1 py-2 ">
                                    <h4 className="text-muted text-small font-bold font-body ">Transmision </h4>
                                    <p className="text-small font-body font-light text-muted">{props.transmission}</p>
                                </div>
                                <div className="border-l border-paper px-2 py-2 ">
                                    <h4 className="text-muted text-small font-bold font-body">Engine </h4>
                                    <p className="text-small font-body font-light text-muted">{props.engine}</p>

                                </div>
                                <div className="border-l border-paper px-2 py-2 ">
                                    <h4 className="text-muted text-small font-bold font-body">Fuel </h4>
                                    <p className="text-small font-body font-light text-muted">{props.fuel}</p>
                                </div>
                                <div className="border-l border-paper px-2 py-2">
                                    <h4 className="text-muted text-small font-bold font-body"> Mileage </h4>
                                    <p className="text-small font-body font-light text-muted">{props.milage}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="mt-5 flex md:hidden ">
                    <button className="btn  text-button bg-gold text-ink font-body rounded-2xl  transition-all duration-150 ease-in hover:bg-glacial-dark w-full" onClick={() => Navigate('/login')}>Book now</button>
                </div>
            </div>
        </section>
    )
}
export default CarHeader
