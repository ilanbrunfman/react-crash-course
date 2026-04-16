import './Card.scss'

const Card = ({
    children,
    variant = "elevated", // elevated | outlined | flat
    interactive = false,
    className = "",
}) => {
    return (
        <div className="card">
            <div className={`card-container card-${variant} ${ interactive ? "card-interactive" : ""} ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Card
