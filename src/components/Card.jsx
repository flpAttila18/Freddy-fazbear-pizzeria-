import '../cssfolder/index.css'
export default function Card({imgSrc , imgAlt , cardH5Txt , cardPTxt ,Onclick, cardBtntXT}) {
    return (
        <div className="card">
            <img className="card-img-top" src={imgSrc} alt={imgAlt} />
                <div className="card-body">
                    <h5 className="card-title">{cardH5Txt}</h5>
                    <p className="card-text">{cardPTxt}</p>
                    <button onClick={Onclick} className="btn btn-dark">{cardBtntXT}</button>
                </div>
        </div>
    )
}