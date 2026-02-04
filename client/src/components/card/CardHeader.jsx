const CardHeader = ({ thumbnail, title, subtitle, action }) => {
    return (
        <div className="card-header">
            { thumbnail && <div className="card-header-thumbnail">
                <p>{thumbnail}</p>
            </div> }
            { title || subtitle && <div className="card-header-content">
                <h3 className="card-header-content-title">{title}</h3>
                {subtitle && <p className="card-header-content-subtitle">{subtitle}</p>}
            </div> }
            {action && <div className="card-header-action">{action}</div>}
        </div>
    )
}

export default CardHeader
