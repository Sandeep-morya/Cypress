export default function Pagination(
    { page, total,setPage }) {
    return (
        <div className="pages">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <h2 >{page}</h2>
            <button disabled={page>=total} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}