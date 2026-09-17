import { useNavigate } from "react-router-dom"
import { Heart } from "lucide-react"
const FleetGallery = (props) => {
    const Navigate = useNavigate();
    const handleNavigate = (car) => {
        localStorage.setItem('Details', JSON.stringify(car));
        console.log(car)
        Navigate('/details1')
    }
    return (
        <section className="py-15">
            <div className="w-[90%] mx-auto">
                <div>
                    <div className="headertext mb-10">
                        <h2 className="text-section font-heading text-paper font-bold">
                            Awesome Collection
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {props.carList.map((item, index) => (
                            <div className="relative group transition-all duration-200 ease-in translate-y-0 hover:-translate-y-2" key={index}>
                                <div className="aspect-4/3" key={index}>
                                    <img className="h-full w-full object-cover block rounded-2xl" src={item.image} alt={`${index}`} />
                                </div>
                                <div className="absolute top-0.5  text-paper right-2">
                                    <Heart className='text-[12px]' />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-200 ease-in group-hover:opacity-100  ">
                                    <button className="btn text-ink border-2 rounded-md text-button border-gold font-body bg-gold transition-all duration-200 ease-in hover:text-paper " onClick={() => handleNavigate(item)}> View Detail </button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
export default FleetGallery