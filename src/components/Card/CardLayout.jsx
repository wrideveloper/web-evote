import React from 'react'
import { Container, Card, CardBody, CardTitle, CardFooter, Button, Label } from 'reactstrap'


const CardLayout = ({ titlePage, titleCard, children, footer }) => {
    return (
        <Container className="mb-5">
            <center><h1 style={{ marginTop: '83px' }}>{titlePage}</h1>
                <h1 style={{ borderBottom: 'solid #f7b217 10px', width: '345px', borderRadius: '20px', margin: '20px 0px 60px 0px' }}></h1>
            </center>
            <Card>
                <CardBody style={{ padding: '60px' }}>
                    <CardTitle tag="h5">
                        <h5><div
                            style={{
                                display: 'inline-block',
                                border: '2px solid black',
                                verticalAlign: 'middle',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                marginRight: '10px',
                                backgroundColor: '#5CE1FF',
                                fontSize: '16px'
                            }} />{titleCard}</h5><br />
                    </CardTitle>
                    {children}
                </CardBody>
                <CardFooter style={{ padding: "45px 68px 45px 45px" }}>
                    {footer}
                </CardFooter>
            </Card>
        </Container>
    )
}

export default CardLayout
