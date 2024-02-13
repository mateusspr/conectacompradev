import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import ButtonDefault from "../components/ButtonDefault"


const Home = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <main className="mt-32" >
            <h1 data-aos="fade-right" >Inicio</h1>
            <div className="flex flex-col items-center mt-5" >
                <img data-aos="flip-left" className="w-96 h-72" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <ButtonDefault/>
            
        </main>
    )
}

export default Home