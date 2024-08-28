import { Outlet } from "react-router-dom"
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
function Home(){
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Home