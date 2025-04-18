import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Team } from "src/components/Team";
import { Padding } from "src/components/Padding";
import { About } from "src/components/About";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FFF2F2] flex flex-col">
            <Header />
            <main className="flex-grow">
                <About/>
                <div className="h-64"/>
                <Team/>
            </main>
            <div className="h-64"/>
            <Footer />
            <div className="h-64"/>
        </div>
    )
}