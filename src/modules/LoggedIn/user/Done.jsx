import React from 'react'

const Done = () => {
    return (
        <div>
            <div style={{
                backgroundColor: "#FAFAFA",
                width: "95%",
                margin: "56px auto"
            }}>
                <div style={{
                    textAlign: "center",
                    color: '#7D7D7D'
                }}>
                    <h4 style={{
                        margin: '5px 0px',
                        lineHeight: '46px',
                        letterSpacing: '0.0025em',
                        fontSize: '34px',
                        fontFamily: "Nunito Sans",
                        fontWeight: "normal"
                    }}>Selamat!</h4>
                    <h4 style={{
                        margin: '5px 0px',
                        lineHeight: '46px',
                        letterSpacing: '0.0025em',
                        fontSize: '34px',
                        fontFamily: "Nunito Sans",
                        fontWeight: "normal"
                    }}>Votemu sudah masuk.</h4>
                </div>
            </div>

            <button style={{
                width: '182px',
                height: '62px',
                backgroundColor: '#F7B217',
                borderRadius: '50px',
                color: 'white',
                border: '0px',
                marginBottom: '119px',
                marginTop: '56px',
                position: 'relative',
                left: '44%'
            }}>Tulis Harapan</button>

        </div>
    );
}
export default Done