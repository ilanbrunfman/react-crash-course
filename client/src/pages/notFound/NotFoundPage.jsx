import { usePageMeta } from "@/hooks/usePageMeta";

const NotFoundPage = () => {

    usePageMeta({
        title: "Page not found",
        icon: "/icons/sun.png",
    })

    return (
        <div className="not-found">
            <h1>404 Page not found</h1>
        </div>
    )
}
export default NotFoundPage