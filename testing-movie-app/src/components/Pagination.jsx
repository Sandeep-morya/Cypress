export default function Pagination(
    { page, total,setPage }) {
    return (
        <div className="pages">
            <button className="prev_btn" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <h2 data-testid={'crnt_p'}>{page}</h2>
            <button className="next_btn" disabled={page>=total} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}