import type { Route } from "./+types/main";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
      
      <main className="pt-20">
        <section id="about" className="container mx-auto px-2 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 w-1/2">
              <h2 className="font-bold mb-4 text-center text-6xl font-notable gap-y-2" style={{color: "#7886C7"}}>Campus Coders Crew</h2>
            </div>
            <div className="flex justify-center items-center p-6">
              <p className="text-lg text-black text-center">
                Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-semibold" style={{color: "#2D336B"}}>
              We build websites for club. By Students. For Students.
            </p>
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </>
    
  );
}
