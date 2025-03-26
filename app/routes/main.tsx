import type { Route } from "./+types/main";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Team } from "~/components/Team";
import { Padding } from "~/components/Padding";
import { About } from "~/components/About";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Campus Coders Crew" },
    { name: "description", content: "Empowering students through web development" },
  ];
}

export default function Main() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF2F2]">
        <Header />
        <About/>
        <Team/>

        
      </div>
      <Footer />
    </>
    
  );
}
