import Tabs from "@/components/tabs/Tabs"

const GoodDay = () => {
    const tabsData = [
        { label: "Morning", content: <GoodMorning /> },
        { label: "Afternoon", content: <GoodAfternoon /> },
        { label: "Evening", content: <GoodEvening /> },
    ]

    return (
        <div className="good-day content-container">
            <Tabs tabs={tabsData} />
        </div>
    )
}

const GoodMorning = () => { return <p>Good morning ☀️</p> }
const GoodAfternoon = () => { return <p>Good afternoon 🌤</p> }
const GoodEvening = () => { return <p>Good evening 🌙</p> }

export default GoodDay