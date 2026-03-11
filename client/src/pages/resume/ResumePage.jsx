import { usePageMeta } from "@/hooks/usePageMeta";
import RenderElement from "@/components/element/RenderElement";

const ResumePage = () => {

    usePageMeta({
        title: "Resume",
        subtitle: "Information",
        icon: "/icons/ib.svg",
    })

    const msg = () => {
        console.log('Massage!!')
    }

    const layout = [
        {
            tag: "div",
            class: "col",
            children: [
                { tag: "h2", html: "good job" },
                { tag: "button", on: { click: msg }, class: "btn", html: "click me" },
                {
                    tag: "ul",
                    children: [
                        { tag: "li", html: "Item 1" },
                        { tag: "li", html: "Item 2" }
                    ]
                },
                { tag: "a", attrs: { href: "https://www.youtube.com/", target: "_blank" }, html: "View link"}
            ]
        }
    ]

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
                                    {layout.map((el, index) => ( <RenderElement key={index} node={el} /> ))}
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