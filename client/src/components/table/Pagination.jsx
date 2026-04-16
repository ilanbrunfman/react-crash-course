const Pagination = ({ page, totalPages, next, prev }) => {
    if (totalPages <= 1) return null

    return (
        <div className="table-pagination">
            <button onClick={prev} disabled={page === 1}>Prev</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={next} disabled={page === totalPages}>Next</button>
        </div>
    )
}

export default Pagination
