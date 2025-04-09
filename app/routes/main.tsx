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
  );
}
