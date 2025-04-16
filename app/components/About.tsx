import React from "react"
import { useSpring, animated } from "@react-spring/web"
import { Padding } from "./Padding"

export function About() {
    const titleSpring = useSpring({
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { duration: 300 },
    });

    const missionSpring = useSpring({
        from: { transform: 'translateX(100%)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { duration: 300 },
    });
    
    const statementSpring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 450 },
        delay: 500
    });

    return (
        <main className="bg-[#8EB0D6] flex justify-center items-center pt-20">
            <section id="about" className="w-full md:mx-10 lg:mx-20 py-8 md:py-16">
                <div className="flex flex-col justify-center items-center gap-8">
                    <animated.h2 
                        className="w-11/12 text-5xl lg:text-5xl font-league-spartan font-bold text-center" 
                        style={{...titleSpring, color: "#7886C7"}}
                    >
                        CAMPUS CODERS CREW
                    </animated.h2>
                    
                    <animated.p 
                        className="w-11/12 md:w-2/3 text-4xl text-white text-center font-league-spartan"
                        style={missionSpring}
                    >
                        Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
                    </animated.p>
                </div>
                <div className="text-center mt-32">
                    <animated.p 
                        className="text-2xl font-semibold font-neuton" 
                        style={{...statementSpring, color: "#2D336B"}}
                    >
                        We build websites for clubs. By Students. For Students.
                    </animated.p>
                </div>
            </section>
        </main>
    )
}