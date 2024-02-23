import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import ButtonDefault from "../components/ButtonDefault"
import CardProduct from "../components/CardProduct"


const Home = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <main className="mx-auto max-w-6xl my-12 space-y-6" >
            <h1 data-aos="fade-right" className="text-3xl">As melhores ofertas!</h1>
            <div className="grid grid-cols-3 gap-6 auto-rows-[365px]" data-aos="fade-right">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>

            
           

        </main>
    )
}

export default Home