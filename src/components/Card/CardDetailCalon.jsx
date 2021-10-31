import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col,
} from 'reactstrap';


const CardDetailCalon = (props) => {
    return (
        <>
            <center>
                <Card className="mb-3" style={{ border: 'none', borderRadius: '10px', boxShadow: '0px 0px 10px 8px #f2f2f2', padding: '30px', width: '90%', height: '500px' }}>
                    <Row>
                        <Col xs={5} md={3}>
                            <img src={process.env.PUBLIC_URL + '/imgDetailCalon/foto.png'} alt="image" style={{ maxWidth: '230px', maxHeight: '280px', borderRadius: '10px', marginBottom: '20px', marginRight: '20px' }} />
                            <CardTitle tag="h4" style={{ textAlign: 'center', color: '#3F3D56', fontWeight: 'bold' }}>Daniel Aldi</CardTitle>
                        </Col>
                        <Col xs={12} md={8} style={{ paddingTop: '10px' }}>
                            <Row>
                                <Col style={{ paddingBottom: '10px' }}>
                                    <CardText tag="h5" style={{ fontWeight: 'bold', textAlign: 'start', color: '#C58F17', fontWeight: 'bold' }}>Visi</CardText>
                                    <ul>
                                        <li style={{ lineHeight: '1.8', textAlign: 'start', fontSize: '14pt' }}>Lorem ipsum dolor sit amer, consectur adipiscing elit.</li>
                                        <li style={{ lineHeight: '1.8', textAlign: 'start', fontSize: '14pt' }}>Fermentum nibh cum nibh suspendisse porta amet et.</li>
                                        <li style={{ lineHeight: '1.8', textAlign: 'start', fontSize: '14pt' }}>Integer at vel vel, velit ultrices trique sed</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingBottom: '10px' }}>
                                    <CardText tag="h5" style={{ fontWeight: 'bold', textAlign: 'start', color: '#C58F17', fontWeight: 'bold' }}>Misi</CardText>
                                    <ul>
                                        <li style={{ lineHeight: '1.8', textAlign: 'start', fontSize: '14pt' }}>Lorem ipsum dolor sit amer, consectur adipiscing elit.</li>
                                        <li style={{ lineHeight: '1.8', textAlign: 'start', fontSize: '14pt' }}>Fermentum nibh cum nibh suspendisse porta amet et.</li>
                                        <li style={{ lineHeight: '1.8', textAlign: 'start', fontSize: '14pt' }}>Integer at vel vel, velit ultrices trique sed</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </center >

        </>
    )
}

export default CardDetailCalon
