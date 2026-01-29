import logo from '../assets/logo.png'
import { useNavigate  } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <img onClick={()=>navigate('/')} src={logo} alt="logo" className="navbar-brand size" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button onClick={()=>navigate('/order')} className="nav-link pe-auto">order</button>
                        </li>
                        <li class="nav-item">
                            <button className="nav-link pe-auto" href="#">parties</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link pe-auto" href="#">Book a party</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}