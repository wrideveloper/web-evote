import React, { useState, useContext, useEffect } from 'react'
import { Button, Card } from 'reactstrap'
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import md5 from 'crypto-js/md5'
import { useHistory } from 'react-router-dom'
import { date } from '../../../helper/date'
import { MyContext } from '../../../contexts/Api-Context'

const LoginPage = () => {
    let history = useHistory()
    const [user, setUser] = useState('')
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');
    const {
        getAllUsers, users
    } = useContext(MyContext);

    useEffect(() => {
        getAllUsers()
    }, [])

    const handleSubmit = () => {
        const findUser = users.find(item => item.nim === nim && item)
        if (!nim || !password) return alert("Harap mengisikan NIM/password terlebih dahulu!")
        if (!findUser) {
            return alert("Nim Anda Belum Terdaftar, Silahkan chat Admin Yukafi: 085607287537")
        } else {
            if (findUser.nim === nim && findUser.password === md5(password).toString()) {
                console.log('Line 24 ~ role ', findUser.role)
                if (findUser.role === "Pemilih") {
                    alert('Selamat Anda Berhasil Login')
                    window.location.reload()
                    history.push('/')

                } else if (findUser.role === "Admin") {
                    alert('Anda login sebagai Admin')
                    window.location.reload()
                    history.push('/')
                }
                setUser(findUser)
                localStorage.setItem('user', JSON.stringify(findUser))
            } else {
                alert('NIM/Password Anda sepertinya salah, harap periksa kembali!')
            }
        }
    }

    return (
        <div
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
                    <div style={{ textAlign: 'center' }}>
                        <img src="../images/logo-wri.png" alt="logo wri" width="80px" />
                    </div>
                    <div className="input-group mt-4 mb-4">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input value={nim} onChange={(event) => setNim(event.target.value)} type="text" className="form-control" placeholder="Nim Anda" name="nim" id="nim" aria-label="nim" aria-describedby="nim" />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input vaue={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" placeholder="Password Anda" name="password" id="password" aria-label="nim" aria-describedby="password" />
                    </div>
                    <center>
                        <Button onClick={handleSubmit} className="text-white center" color="warning" style={{ borderRadius: '50px', width: '180px', height: '50px' }}>Selanjutnya</Button>
                    </center>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage
