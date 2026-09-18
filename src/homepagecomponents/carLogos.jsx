import { BMWLogoDark, ToyotaIconDark, MBIconDark, HondaIconDark, AudiIconDark } from "@cardog-icons/react"
const CarLogosc = () => {
    return (
        <section className="py-15">
            <div className="w-[90%] mx-auto">
                <div className="carGrids grid grid-cols-3 gap-5 md:grid-cols-5">
                    <div className="flex flex-col items-center">
                        <ToyotaIconDark size={24} className="text-gold text-[100px]" />
                        <div>
                            <p className="text-paper font-body text-body">Toyota</p>
                        </div>
                    </div>
                    <div className="text-gold flex flex-col items-center">
                        <BMWLogoDark size={24} className="text-gold text-[100px]" />
                        <div>
                            <p className="text-paper font-body text-body">Bmw</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <MBIconDark size={24} className="text-[100px]" />
                        <div>
                            <p className="text-paper font-body text-body">Benz</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        < HondaIconDark size={24} className="text-[100px]" />
                        <div>
                            <p className="text-paper font-body text-body">Honda</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <AudiIconDark size={24} className="text-[100px]" />
                        <div>
                            <p className="text-paper font-body text-body"> Audi</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CarLogosc