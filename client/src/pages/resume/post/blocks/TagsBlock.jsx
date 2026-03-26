const icons = import.meta.glob('@/assets/**/*', {
    eager: true,
    import: 'default'
})

const TagsBlock = ({ tags, subheader }) => {

    const getIcon = (src) => {
        return icons[`/src/assets/${src}`]
    }
    
    return (
        <>
            { subheader && <h4>{ subheader }</h4> }
            <ul className="tags">
                {tags.map((tag, i) => (
                    <li key={i} className="tag">
                        { tag.icon && <img src={getIcon(tag.icon.src)} alt={tag.label} width={tag.icon.width} /> }
                        <p>{tag.label}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TagsBlock