import React from "react"
import { useSpring, animated } from "@react-spring/web"
import home_background from '../../../public/home-background-image.png'
import { Welcome } from "./Welcome";
import { OurGoals } from "./OurGoals";

export default function HomeSection () {
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
        <div className="flex-col">
            <div style={{backgroundImage: `url(${home_background})`}} className={`h-full bg-cover bg-center bg-no-repeat`}>
                <main className={`flex flex-col justify-center items-center pt-20`}>
                    <section id="about" className="mx-0 md:mx-10 lg:mx-20 py-8 md:py-16 z-20 relative rounded-lg px-4 md:px-8 lg:px-12">
                        <div className="w-3/4 grid grid-row-1 md:grid-row-2 gap-4 items-center">

                            <animated.h2 
                                className="mb-4 text-6xl lg:text-6xl font-notable font-bold gap-y-2 text-center flex items-center" 
                                style={{...titleSpring, color: "#7886C7"}}
                            >
                                CAMPUS CODERS CREW
                            </animated.h2>

                            <div className="flex justify-center items-center md:items-start p-6">
                                <animated.p 
                                    className="w-11/16 text-4xl text-white text-center font-neuton font-extrabold"
                                    style={missionSpring}
                                >
                                    Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
                                </animated.p>
                            </div>
                        </div>
                        <div className="h-32"/>
                        <div className="text-center relative top-28">
                            <animated.p 
                                className="text-3xl font-semibold font-neuton " 
                                style={{...statementSpring, color: "#2D336B"}}
                            >
                                We build websites for clubs. By Students. For Students.
                            </animated.p>
                        </div>
                    </section>
                </main>
            </div>
            <div className="h-64"/>
            <Welcome />
            <div className="h-64"/>
            <OurGoals />
        </div>
    )
}