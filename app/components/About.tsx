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
        <main className="pt-20">
            <section id="about" className="container mx-0 md:mx-10 lg:mx-20 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="justify-center items-center">
                    <animated.h2 
                        className="mb-4 text-6xl lg:text-8xl font-notable gap-y-2 text-center flex items-center" 
                        style={{...titleSpring, color: "#7886C7"}}
                    >
                        Campus Coders Crew
                    </animated.h2>
                </div>
                <div className="flex justify-center items-center md:items-start p-6">
                    <animated.p 
                        className="w-11/16 text-4xl text-black text-center font-neuton"
                        style={missionSpring}
                    >
                        Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
                    </animated.p>
                </div>
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