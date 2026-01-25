import 'bootstrap/dist/css/bootstrap.min.css'
export default function Btn({ Btnclass, H4class, btntext }) {
    return (
        <button className={Btnclass}>
            <h4 className={H4class}>{btntext}</h4>
        </button>
    )
}
