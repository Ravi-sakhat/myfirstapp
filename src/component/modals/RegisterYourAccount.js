import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import img from '../../assests/img/img/6gan.png'


const RegisterYourAccount = ({ show, onHide }) => {

    const [UserType, setUserType] = useState("user")
    const [Register, setRegister] = useState({
        userName: '',
        phoneNo: '',
        email: '',
        password: '',
        terms_cond: 'true',
    })

    const [formError, setformError] = useState({
        userName: '',
        phoneNo: '',
        email: '',
        password: '',
        terms_cond: '',

    })

    const validation = () => {
        const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const regexphone = /^[0-9\b]+$/;
        let flag = false
        const error = {
            userName: '',
            phoneNo: '',
            email: '',
            password: '',
            terms_cond: '',
        }
        if (!Register.userName) {
            error.userName = "please enter Your Name"
            flag = true
        }
        if (!Register.phoneNo) {
            error.phoneNo = "please enter Your PhoneNo."
            flag = true
        }
        if (Register.phoneNo && Register.phoneNo.length < 10) {
            error.phoneNo = "Please enter valid phone number"
            flag = true
        }
        if (!Register.email) {
            error.email = "please enter Your Email"
            flag = true
        }
        if (Register.email && !Register.email.match(regexForEmail)) {
            error.email = "Please enter Your valid email"
            flag = true
        }
        if (!Register.password) {
            error.password = "please enter Your Password"
            flag = true
        }
        if (Register.terms_cond === false) {
            error.terms_cond = "please select terms and condition"
        }
        setformError(error)
        return flag
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (validation()) {
            return;
        }
        console.log("submitted")
    }

    const handleOnChange = (e, name) => {
        if (name === "userName" || name === "email" || name === "password" || name === "terms_cond") {
            setRegister({ ...Register, [name]: e.target.value })
        } else {
            const regexphone = /^[0-9\b]+$/;
            if (name === "phoneNo") {
                if (e.target.value === '' || regexphone.test(e.target.value)) {
                    setRegister({ ...Register, phoneNo: e.target.value })
                    setformError({ ...formError, phoneNo: '' })
                }
            }
        }

    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show
        >
            <Modal.Header closeButton onClick={() => onHide(true)} >
                <Modal.Title>
                    Register Your Account
                </Modal.Title>
            </Modal.Header>
            <p className='text-left'>Attend a Course today to Get Hired Tomorrow</p>
            <Modal.Body>
                <Row>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <button id='user' onClick={() => setUserType("user")} className={`btn btn-outline-primary mx-1 ${UserType === "user" ? "active" : "disable"}`}>Candidate</button>
                            <button id='employer' onClick={() => setUserType("employer")} className={`btn btn-outline-primary mx-1 ${UserType === "employer" ? "active" : "disable"}`}>Employer</button>
                            <button id='partner' onClick={() => setUserType("partner")} className={`btn btn-outline-primary mx-1 ${UserType === "partner" ? "active" : "disable"}`}>Partner</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='my-2'>
                            <div>
                                <img src={img} alt="" style={{ width: "100%", height: "500px" }} />
                            </div>
                        </Col>

                        <Col>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='userName' onChange={(e) => handleOnChange(e, "userName")} value={Register.userName}/>
                                    {formError.userName && <span style={{ color: 'red' }}>{formError.userName}</span>}
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Enter Your Mobile Number</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='phoneNo' onChange={(e) => handleOnChange(e, "phoneNo")} maxLength={10} value={Register.phoneNo}/>
                                    {formError.phoneNo && <span style={{ color: 'red' }}>{formError.phoneNo}</span>}
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Enter Your E-mail Id</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1" name='email' onChange={(e) => handleOnChange(e, "email")} value={Register.email}/>
                                    {formError.email && <span style={{ color: 'red' }}>{formError.email}</span>}
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Enter Your Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={(e) => handleOnChange(e, "password")} value={Register.password}/>
                                    {formError.password && <span style={{ color: 'red' }}>{formError.password}</span>}
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="radio" class="form-check-input" id="exampleCheck1"
                                        name='terms_cond'
                                        onChange={(e) => handleOnChange(e, "terms_cond")} value={Register.terms_cond} checked/>
                                    <label class="form-check-label" for="exampleCheck1">I agree to Conditions of Use and Privacy Policy.</label>
                                    {formError.terms_cond && <span style={{ color: 'red' }}>{formError.terms_cond}</span>}
                                </div>
                                <div className='col-md-12 text-center'>
                                    <button type="submit" className="btn btn-primary" onClick={(e) => handleCreateAccount(e)}>Create Account
                                    </button><p>Have an account? <button type='button' className='btn btn-sm btn-danger my-2' style={{
                                        cursor
                                            : "pointer"
                                    }} onClick={() => onHide('login')}>Log In</button></p>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default RegisterYourAccount