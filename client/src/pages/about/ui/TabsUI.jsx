import Tabs from "@/components/tabs/Tabs"

const TabsUI = () => {
    const tabsData = [
        { label: "Morning", content: <GoodMorning /> },
        { label: "Afternoon", content: <GoodAfternoon /> },
        { label: "Evening", content: <GoodEvening /> },
    ]

    return (
        <div className="tabs-ui ">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-2">Tabs UI</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 content-container">
                    <Tabs tabs={tabsData} />
                </div>
            </div>
        </div>
    )
}

const GoodMorning = () => { return <p>Good morning ☀️</p> }
const GoodAfternoon = () => { return <p>Good afternoon 🌤</p> }
const GoodEvening = () => { return <p>Good evening 🌙</p> }

export default TabsUI