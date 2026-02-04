import FAQ from "@/components/faq/FAQ"

const FAQUI = () => {

    const faqData = [
        {
            question: "What is this?",
            answer: "A reusable animated FAQ component.",
        },
        {
            question: "Does it support animation?",
            answer: "Yes — powered by Framer Motion.",
        },
        {
            question: "Can multiple be open?",
            answer: "Set allowMultiple prop to true.",
        },
    ]

    return (
        <div className="hello-world">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-2">FAQs UI</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FAQ items={faqData} allowMultiple={false} />
                </div>
            </div>
        </div>
    )
}

export default FAQUI