export default function BigCard({ BCsrc, BCalt, BCh5, BCp1, BCp2 }) {
    return (
        <div className="card bg-dark text-white d-flex justify-content-center">
            <img className="card-img" src={BCsrc} alt={BCalt} />
            <div className="card-img-overlay">
                <h5 className="card-title">{BCh5}</h5>
                <p className="card-text">{BCp1}</p>
            </div>
        </div>
    )
}