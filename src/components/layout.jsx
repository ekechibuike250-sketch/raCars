import { Outlet } from "react-router-dom"
import NavBar1 from "./Navbar"
import Footerc from "./footer"
import { useEffect } from "react"
const Layout = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <div className="flex flex-col">

            <NavBar1 />
            <main className="">
                <Outlet />
            </main>
            <Footerc />


        </div>
    )
}
export default Layout