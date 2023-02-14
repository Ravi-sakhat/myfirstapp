import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Loginmodal from '../../component/modals/Loginmodal'
import RegisterYourAccount from '../../component/modals/RegisterYourAccount'


const Header = () => {

    const [loginmodal, setloginmodal] = useState(false)
    const [RegisterAccount, setRegisterAccount] = useState(false)

    const navigate = useNavigate()


    const handleGetStarted = () => {
        navigate("/getstarted")
    }

    const logginPopup = (item) => {
        if (item === "register") {
            setRegisterAccount(true)
            setloginmodal(false)
        }
        else {
            setloginmodal(false)
        }
    }

    const registerYourAccount = (item) => {
        if (item === "login") {
            setloginmodal(true)
            setRegisterAccount(false)
        }else {
            setRegisterAccount(false)
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Swayam</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/job">Job</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/scheme">Schemes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/learn">Learn</Link>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                            <li className="nav-item">
                                <button type="button" onClick={handleGetStarted} className="btn btn-danger ms-5" >Get Started</button>
                            </li>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Marathi</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Hindi</a></li>
                                </ul>
                            </div>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className='justify-content-end' style={{ cursor: "pointer" }} onClick={() => { setloginmodal(true) }}>
                            <i class="bi bi-person-circle"></i>
                        </div>
                    </div>
                </div>
            </nav>
            {
                loginmodal && <Loginmodal show={loginmodal} onHide={(item) => logginPopup(item)} />
            }
            {
                RegisterAccount && <RegisterYourAccount show={RegisterAccount} onHide={(item) => { registerYourAccount(item) }} />
            }
        </div>
    )
}

export default Header