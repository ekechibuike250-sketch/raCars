import DatePicker from "react-datepicker";
import { motion } from 'motion/react'
import "react-datepicker/dist/react-datepicker.css";
import './search.css'
import { majorCities } from "../assets/Utility";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SearchSection = () => {
    const Navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [location, setLocation] = useState('')
    const handleSearch = () => {
        alert(`location : ${location} start: ${startDate} endsDate: ${endDate}`)
        const searchData = { location: location }
        localStorage.setItem('searchInput', JSON.stringify(searchData))
        Navigate('/search')
    }
    return (
        <section className="search-section bg-ink py-32">
            <div className="container w-[90%] mx-auto">
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="search-container rounded-2xl bg-surface p-10">
                    <div>
                        <h2 className="text-paper text-card font-heading"> Find your perfect ride</h2>
                    </div>
                    <div className="searchForm grid md:grid-cols-4 border-t border-muted mt-5">
                        <div className="location  pt-5 pb-2.5 px-1.5 md:border-r md:border-muted">
                            <span className="block font-body text-small text-gold">Location</span>
                            <select value={location} onChange={(e) => setLocation(e.target.value)} placeholderText='choose location' className="select select-ghost placeholder:text-muted text-paper bg-ink focus:border focus:border-gold rounded mt-2">
                                <option value="" disabled>select location</option>
                                {majorCities.map((item, index) => (
                                    <option className='bg-surface-light' value={item} index={index}>{item}</option>
                                ))}

                            </select>
                        </div>
                        <div className="pickup-date pt-5 pb-2.5 px-1.5 md:border-r md:border-muted">
                            <span className="block font-body text-small text-gold ">Pickup Date </span>
                            <DatePicker placeholderText="Select Date" className='w-full mt-2 bg-ink box-border text-paper py-2 px-15 md:px-11 border border-transparent max-w-full rounded focus:border focus:border-gold focus:outline-none placeholder:text-muted' selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date)
                                    setEndDate(date)
                                }
                                }
                            />

                        </div>
                        <div className="pickup-date pt-5 pb-2.5 px-1.5 md:border-r md:border-muted">
                            <span className="block font-body text-small text-gold ">Returning Date </span>
                            <DatePicker placeholderText="Select Date" className='w-full mt-2 bg-ink box-border text-paper py-2 px-15 md:px-11 border border-transparent max-w-full rounded focus:border focus:border-gold focus:outline-none placeholder:text-muted' selected={endDate} onChange={(date) => setEndDate(date)} />

                        </div>
                        <div className="submit-search  md:px-6 pt-12.75">
                            <button className="btn border-0 rounded text-button text-ink bg-gold py-3 px-6 text-center cursor-pointer w-full md:w-40 transition-all duration-300 ease-in hover:text-paper hover:opacity-80" onClick={handleSearch}>Search Cars</button>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}
export default SearchSection