import { usePageMeta } from "@/hooks/usePageMeta";

const ResumePage = () => {

    usePageMeta({
        title: "Resume",
        subtitle: "Information",
        icon: "/icons/ib.svg",
    })

    return (
        <div className="resume">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-2">
                        <h1>Resume page</h1>
                    </div>
                </div>
                <div className="col-12 d-grid grid-md-3-9 gap-2">
                    <div className="col">
                        <h1>Sidebar</h1>
                    </div>
                    <div className="col">
                        <h1>Content</h1>
                        <section>
                            <div className="row">
                                <div className="col-12">
                                    <h2>Info</h2>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="row">
                                <div className="col-12">
                                    <h2>Professional Summary</h2>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="row">
                                <div className="col-12">
                                    <h2>Technical Skills</h2>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="row">
                                <div className="col-12">
                                    <h2>Professional Experience</h2>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="row">
                                <div className="col-12">
                                    <h2>Education</h2>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResumePage