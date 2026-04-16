import "./Table.scss"

const Table = ({ children, striped, hoverable, compact }) => {
    const classes = [
        "table",
        striped && "is-striped",
        hoverable && "is-hoverable",
        compact && "is-compact",
    ]
        .filter(Boolean)
        .join(" ")

    return (
        <div className="table-wrapper">
            <table className={classes}>{children}</table>
        </div>
    )
}

export default Table
