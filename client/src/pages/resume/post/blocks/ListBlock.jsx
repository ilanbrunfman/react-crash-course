const ListBlock = ({ items }) => {
    return (
        <ul className="list">
            {items.map((item, i) => (
                <li key={i} className="list-item">{item}</li>
            ))}
        </ul>
    );
}

export default ListBlock