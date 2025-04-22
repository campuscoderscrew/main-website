import React from "react"
import { useSpring, animated } from "@react-spring/web"
import home_background from '../../../public/home-background-image.png'
import { Welcome } from "./Welcome";
import { OurGoals } from "./OurGoals";
import { Meetings } from "./Meetings";

export default function HomeSection () {

    return (
        <div className="flex-col">
            <div style={{backgroundImage: `url(${home_background})`}} className={`h-full bg-cover bg-center bg-no-repeat`}>
                <main className={`flex flex-col justify-center items-center pt-20`}>
                    <section id="about" className="mx-0 md:mx-10 lg:mx-20 py-8 md:py-16 z-20 relative rounded-lg px-4 md:px-8 lg:px-12">
                        <div className="w-1/2 flex flex-col justify-center items-center gap-y-16">
                            <h2 
                                className="text-[#7886C7] text-5xl lg:text-5xl font-notable font-bold text-center" 
                            >
                                CAMPUS CODERS CREW
                            </h2>

                            <p 
                                className="w-11/12 text-4xl text-white font-extrabold text-center"
                            >
                                Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
                            </p>
                        </div>
                        <div className="h-32"/>
                        <div className="text-center relative top-32">
                            <p className="text-[#2D336B] text-3xl font-bold" >
                                We build websites for clubs. By Students. For Students.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
            <div className="h-64" />
            <Welcome />
            <div className="h-64" />
            <OurGoals />
            <div className="h-64" />
            <Meetings />
        </div>
    )
}