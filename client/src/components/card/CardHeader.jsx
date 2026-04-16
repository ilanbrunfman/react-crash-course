import Image from "@/components/image/Image"

const CardHeader = ({ thumbnail, title, subtitle, action }) => {
    return (
        <div className="card-header">
            { thumbnail && <div className="card-header-thumbnail">
                <Image file={thumbnail.file} alt={thumbnail.alt} ratio={thumbnail.ratio} className={thumbnail.className} />
            </div> }

            { (title || subtitle) && <div className="card-header-content">
                <h3 className="card-header-content-title">{title}</h3>
                {subtitle && <p className="card-header-content-subtitle">{subtitle}</p>}
            </div> }

            {action && <div className="card-header-action">{action}</div>}
        </div>
    )
}

export default CardHeader
