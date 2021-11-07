import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'reactstrap'
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { date } from '../../../libs/date'

const LoginPage = () => {
    return (
        <div className="p" 
        style={{
            backgroundImage: `url("../images/bg-login.png")`, 
            backgroundSize: '100% 100%', 
            width: '100%', 
            height: '100vh',
            padding: '15px 50px'
        }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 'bold'
        }}>
            <img src="../images/logo-wri-banner.png" alt="Logo WRI" />
            <p style={{ color: '#fff' }}>{date}</p>
        </div>
        <div style={{ 
            marginTop: '8%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Card style={{
                textAlign: 'center',
                padding: '20px'
            }}>
                <div style={{textAlign: 'center'}}>
                    <img src="../images/logo-wri.png" alt="logo wri" width="80px" />
                </div>
                <div className="input-group mt-4 mb-4">
                    <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input type="text" className="form-control" placeholder="Nim Anda" name="nim" id="nim" aria-label="nim" aria-describedby="nim" />
                </div>
                <Link to="/evote">
                        <Button className="text-white" color="warning" style={{ borderRadius: '50px', width: '180px', height: '50px' }}>Selanjutnya</Button>
                </Link>
            </Card>
        </div>
        </div>
    )
}

export default LoginPage
