import { Header } from "../components/Header"
import { type Profile } from "src/types"


import React, { useState } from 'react';
import { useSpring, animated, useInView } from '@react-spring/web';
import CurvedText from "../utils/CurvedText"



import BoardData from "../data/BoardData"
import MembersData from "../data/MembersData";

interface ProfileArgs {
    profile: Profile
}


function RenderProfile({profile} : ProfileArgs) {
    const [profileFlipped, setProfileFlippped] = useState(false);
    const profileSpring = useSpring({
        transform: profileFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <div className="flex flex-col m-20 relative">
            <div className="text-[#7886C7] font-neuton text-4xl absolute top-28 right-13 w-full z-10" id="title">
                <CurvedText name={profile.officialTitle} reversed={true}/>
            </div>

            <div className="text-[#7886C7] font-neuton text-4xl absolute top-28 right-13 w-full z-10" id="title">
                <CurvedText name={profile.funTitle} reversed={false}/>
            </div>

            <div className="flex items-center justify-center mt-40 relative z-20" id="picture">
                <div 
                    className="relative rounded-full h-80 w-80 cursor-pointer"
                    onMouseEnter={() => setProfileFlippped(true)}
                    onMouseLeave={() => setProfileFlippped(false)}
                    style={{ perspective: '1000px' }}
                >
                    <animated.div 
                        className="relative w-full h-full"
                        style={{
                            ...profileSpring,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                            <div className="relative rounded-full h-80 w-80 overflow-hidden relative">
                                <img 
                                    src={profile.image != "" ? profile.image : "../../public/profiles/empty_profile.jpg"} 
                                    alt={profile.name}
                                    className="h-full w-full"
                                />
                                {/* Gradient overlay positioned at the bottom */}
                                <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                                <p className="absolute bottom-7 w-full text-center text-2xl font-neuton text-white font-semibold">
                                    {profile.name}
                                </p>
                            </div>
                        </div>
                        <div 
                            className="absolute w-full h-full rounded-full bg-[#7886C7] flex items-center justify-center"
                            style={{ 
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            }}
                        >
                            <p className="text-white text-xl font-neuton text-center px-4">
                                {profile.major}
                            </p>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}


export default function Crew() {
    const [ref, inView] = useInView({
        rootMargin: '0px',
        amount: 0.2,
        once: true
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 500 }
    });

    return (
        <div className=" bg-[#FFF2F2]">
        <Header/>
            <animated.div ref={ref} style={fadeIn}>
                <div className="text-center">
                    <p className="text-6xl text-center text-[#2D336B] font-neuton mt-30 font-semibold tracking-widest">
                        OUR CREW
                    </p>

                    <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                        Executive Board
                    </div>

                    <div className="flex flex-row justify-center flex-wrap">
                        {BoardData.map((profile) => (
                        <RenderProfile profile={profile} />
                        ))}
                    </div>


                    <div className="text-5xl text-center text-[#7886C7] font-neuton mt-20 font-semibold tracking-wider">
                        Members
                    </div>

                    <div className="flex flex-row justify-center ">
                        {MembersData.map((profile) => (
                        <RenderProfile profile={profile} />
                        ))}
                    </div>

                </div>
            </animated.div>
        </div>
        
    )
}
