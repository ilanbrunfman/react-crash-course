import { usePageMeta } from "@/hooks/usePageMeta";

const ContactPage = () => {
    usePageMeta({
        title: "Contact Page",
        subtitle: "Test",
        icon: "/icons/ib.svg",
    })
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Contact Page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage