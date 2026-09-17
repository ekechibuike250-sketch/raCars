import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"
import Footer from "./footer"
import { useEffect } from "react"
const Layout = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <div className="flex flex-col">

            <NavBar />
            <main className="">
                <Outlet />
            </main>
            <Footer />


        </div>
    )
}
export default Layout