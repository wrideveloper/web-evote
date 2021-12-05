import React from 'react'
import { Link } from 'react-router-dom'

const Done = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url("../images/bg-done.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '94%',
                height: '100vh',
                margin: '3%'

            }}>
                <div style={{
                    textAlign: "center",
                    color: '#7D7D7D',
                    display: "flex",
                    flexDirection: "column"

                }}>
                    <h4 style={{
                        margin: '80vh 0px',
                        lineHeight: '46px',
                        letterSpacing: '0.0025em',
                        fontSize: '34px',
                        fontFamily: "Nunito Sans",
                        fontWeight: "normal"
                    }}>Selamat! <br />Votemu sudah masuk.</h4>
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Link to="/harapan">
                    <button style={{
                        width: '190px',
                        height: '60px',
                        backgroundColor: '#F7B217',
                        borderRadius: '50px',
                        color: 'white',
                        border: '0px',
                        marginBottom: '119px',
                        marginTop: '40px',
                        position: 'relative',
                    }}>Tulis Harapan</button>
                </Link>
            </div>

        </div>
    );
}
export default Done