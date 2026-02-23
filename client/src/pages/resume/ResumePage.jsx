import { usePageMeta } from "@/hooks/usePageMeta";

const ResumePage = () => {

    usePageMeta({
        title: "Resume",
        subtitle: "Information",
        icon: "/icons/ib.svg",
    })

    return (
        <div className="resume">
            <h1>Resume page</h1>
        </div>
    )
}
export default ResumePage