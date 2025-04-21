export function Meetings(){
    return (    
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[#2D336B]">Upcoming Meetings</h1>
            <p className="text-[#7886C7]">
                Some events have restricted attendance. Please follow guidelines as listed
            </p>
            <div className="flex-row">
                <div className="flex-col w-1/3 h-20 bg-[#A9B5DF]">
                    <h2>Executive Board Meeting</h2>
                </div>
                <div className="flex-col w-1/3 h-20 bg-[#A9B5DF]">

                </div>
                <div className="flex-col w-1/3 h-20 bg-[#A9B5DF]">

                </div>
            </div>
            <button>
                Click here for more!
            </button>
        </div>
    )
}