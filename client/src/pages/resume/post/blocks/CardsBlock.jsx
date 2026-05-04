const images = import.meta.glob('@/assets/**/*', {
    eager: true,
    import: 'default'
})

const CardsBlock = ({ cards }) => {

    const getImage = (src) => {
        return images[`/src/assets/${src}`]
    }

    return (
        <>
            {cards.map((card, i) => (
                <div  key={i} className="card">
                    <div className="card-container">
                        <div className="card-header">
                            { card.image && <img src={getImage(card.image.src)} alt={card.image.alt} width={card.image.width} /> }
                            <div className="">
                                <h4>{card.title}</h4>
                                <h5>{card.label}</h5>
                                <h5>{card.durtion}</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            { card.list && <ul className="list">
                                {card.list.map((item, i) => (
                                    <li key={i} className="list-item">{item}</li>
                                ))}
                            </ul> }
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardsBlock