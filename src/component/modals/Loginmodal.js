import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../../assests/img/img/6gan.png'

const Loginmodal = ({ show, onHide }) => {

    const [loginType, setLoginType] = useState(false);
    const [inputType, setInputType] = useState('mobile');
    const [loginBy, setloginBy] = useState({
        mobile: "",
        email: "",
        password: ""

    })

    const [error, seterror] = useState({
        mobileErr: "",
        emailErr: "",
        passErr: ""
    })

    const Validation = () => {
        let re = /^[0-9\b]+$/;
        let emailRegex = RegExp(/^\S+@\S+\.\S+$/);
        let flag = false;
        

        
        if (loginBy.mobile === "" || re.test(loginBy.mobile)) {
            error.mobileErr = "This field is required"
            flag = true;
        }

        if (loginBy.mobile === "" && loginBy.mobile < 10) {
            error.mobileErr = "This field is required"
            flag = true;
        }
    
        if (loginBy.email === "" && loginBy.email.match(emailRegex)) {
            error.mobileErr = "This field is required"
            flag = true;
        }

        if (loginBy.password === "") {
            error.mobileErr = "This field is required"
            flag = true;
        }
        return seterror(error)
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (Validation()) {
        return;
    }
    console.log('✔✔', "Your data will be submitted")
}

const handleChange = (e) => {
    setInputType(e.target.id)
    if (e.target.id === 'email') {
        setLoginType(true)
    } else if (e.target.id === "mobile") {
        setLoginType(false)
    }
}

const handleOnChange = (e) => {
    setloginBy({ ...loginBy, [e.target.name]: e.target.value })
}


return (
    <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show
    //   onHide={()=>onHide('')}
    >
        <Modal.Header closeButton onClick={() => { onHide(false) }} >
            <Modal.Title>
                I want login as
            </Modal.Title>
        </Modal.Header>
        <p className='text-left'>Attend a Course today to Get Hired Tomorrow</p>
        <Modal.Body>
            <Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <button className='btn btn-primary mx-1'>Candidate</button>
                        <button className='btn btn-primary mx-1'>Employer</button>
                        <button className='btn btn-primary mx-1'>Partner</button>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <div>
                        <img src={img} alt="" style={{ width: "100%" }} />
                    </div>
                </Row>

                <Row>
                    <form>
                        <div className="mb-3">
                            {
                                !loginType ?
                                    <>
                                        <label for="exampleInputEmail1" className="form-label mt-1">Enter Mobile No</label>
                                        <input type="text" className="form-control" aria-describedby="emailHelp" name='mobile' value={loginBy.mobile} onChange={(e) => handleOnChange(e)} />
                                    </> :
                                    <>
                                        <label for="exampleInputEmail1" className="form-label" >Email address</label>
                                        <input type="text" className="form-control" aria-describedby="emailHelp" name='email' value={loginBy.email} onChange={(e) => handleOnChange(e)} />
                                    </>
                            }

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
                            {/* <span>{error.passErr}</span> */}
                        </div>
                        <div className="mb-3 form-check">
                            <div>
                                <input type="radio" className="form-check-input" checked={!loginType ? true : false} id="mobile" onChange={(e) => handleChange(e)} />
                                <label className="form-check-label" for="exampleCheck1">Via Mobile</label>
                            </div>
                            <div>
                                <input type="radio" className="form-check-input" checked={loginType ? true : false} id="email" onChange={(e) => handleChange(e)} />
                                <label className="form-check-label" for="exampleCheck1">Via EmailId</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </Row>
            </Row>
        </Modal.Body>
    </Modal>
);

}

export default Loginmodal