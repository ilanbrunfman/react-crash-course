import { useState, useMemo, useEffect } from "react"

export const useTablePagination = (data = [], rowsPerPage = 4) => {
    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(data.length / rowsPerPage)

    const paginatedData = useMemo(() => {
        const start = (page - 1) * rowsPerPage
        return data.slice(start, start + rowsPerPage)
    }, [data, page, rowsPerPage])

    useEffect(() => {
        if (page > totalPages) {
            setPage(1)
        }
    }, [totalPages])

    const next = () => setPage(p => Math.min(p + 1, totalPages))
    const prev = () => setPage(p => Math.max(p - 1, 1))

    return { page, totalPages, paginatedData, next, prev }
}
