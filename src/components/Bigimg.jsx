export default function Bigimg({Source}){
    return(
        <div className="d-flex justify-content-center w-100 mx-auto mt-5">
            <img src={Source} alt="" className="img-fluid" />
        </div>
    )
}