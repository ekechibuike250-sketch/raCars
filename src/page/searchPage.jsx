import { useEffect, useState } from "react"

const SearchPagec = () => {
    const [searchD, setSearchD] = useState({})
    useEffect(() => {
        const lData = JSON.parse(localStorage.getItem('searchInput'));
        const newSearch = { ...searchD, 'location': lData.location }
        setSearchD(newSearch)
    }, [])
    return (
        <div className="py-35 w-[90%] mx-auto">
            <h1 className="text-paper font-heading font-bold text-hero "> search any thing{' '} {searchD.location} </h1>
        </div>
    )
}
export default SearchPagec