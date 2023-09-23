import "./Card.css"

const Card = ({ quote, handleChange}) => {

    return (
        <section className="card">
            <article className="card_phrase">
                <h1>Infogalax</h1>
                <p>{quote.phrase}</p>
                <button className="card_btn" onClick={handleChange}>
                    <i className='bx bx-refresh'></i>
                </button>
            </article>
            <footer className="card_author">
                Fuente: {quote.author}
            </footer>
        </section>
    )
}
export default Card