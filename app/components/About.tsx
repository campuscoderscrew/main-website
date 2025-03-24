import React from "react"

import { Padding } from "./Padding"

export function About() {
    return (
        <main className="pt-20">
            <section id="about" className="container mx-0 md:mx-10 lg:mx-20 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="justify-center items-center">
                    <h2 className="mb-4 text-6xl lg:text-8xl font-notable gap-y-2 text-center flex items-center" style={{color: "#7886C7"}}>Campus Coders Crew</h2>
                </div>
                <div className="flex justify-center items-center md:items-start p-6">
                    <p className="w-11/16 text-2xl text-black text-center font-neuton">
                        Empowering every aspiring student to collaborate, innovate, and grow in a flexible, inclusive, and agile community
                    </p>
                </div>
            </div>
            <div className="text-center mt-12">
                <p className="text-2xl font-semibold font-neuton" style={{color: "#2D336B"}}>
                We build websites for clubs. By Students. For Students.
                </p>
            </div>
            </section>
        </main>
    )
}