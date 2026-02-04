import './Card.scss'

const Card = ({
    children,
    variant = "elevated", // elevated | outlined | flat
    interactive = false,
    className = "",
}) => {
    return (
        <div className={`card card-${variant} ${ interactive ? "card-interactive" : ""} ${className}`}>
            {children}
        </div>
    )
}

export default Card
