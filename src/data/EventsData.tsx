interface Meeting {
    name: String,
    date: String,
    startTime: number,
    endTime: number,
    location: String,
    description: string,
    note: string
}

const EventsData : Meeting[] = [
    {
        name: "Executive Board Meeting",
        date: "4/23/25",
        startTime: 800,
        endTime: 815,
        location: "Yahentamitsi Dining Hall",
        description: "",
        note: ""
    },
    {
        name: "General Body Meeting",
        date: "4/22/25",
        startTime: 1530,
        endTime: 1630,
        location: "TBD",
        description: "",
        note: ""
    }
]

export default EventsData;