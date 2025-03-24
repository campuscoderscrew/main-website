import React from 'react';

import brennen_pic from "../../public/brennen.jpg"
import franco_pic from "../../public/franco.png"

export function Team() {
    return (
        <div>
            <div className="text-center">
                <p className="text-5xl text-center font-neuton font-semibold" style={{color: "#7886C7"}}>
                    OUR CREW
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center py-10">
                    <div className="flex items-center justify-center">
                        <div className="relative rounded-full h-80 w-80 overflow-hidden">
                            <img 
                                src={brennen_pic} 
                                alt="Brennen"
                                className="h-full w-full"
                            />
                            {/* Gradient overlay positioned at the bottom */}
                            <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                            <p className="absolute bottom-7 w-full text-center text-2xl font-neuton text-white font-semibold">
                                Brennen
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative rounded-full h-80 w-80 overflow-hidden">
                            <img 
                                src={franco_pic} 
                                alt="Franco"
                                className="h-full w-full"
                            />
                            {/* Gradient overlay positioned at the bottom */}
                            <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent" />
                            <p className="absolute bottom-7 w-full text-center text-2xl font-neuton text-white font-semibold">
                                Franco
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}