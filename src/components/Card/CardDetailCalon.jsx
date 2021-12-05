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
                            <img src={props.image} alt="image" style={{ maxWidth: '230px', maxHeight: '280px', borderRadius: '10px', marginBottom: '20px', marginRight: '20px' }} />
                            <CardTitle tag="h4" style={{ textAlign: 'center', color: '#3F3D56', fontWeight: 'bold' }}>{props.namaCalon}</CardTitle>
                        </Col>
                        <Col xs={12} md={8} style={{ paddingTop: '10px' }}>
                            <Row>
                                <Col style={{ paddingBottom: '10px' }}>
                                    <CardText tag="h5" style={{ fontWeight: 'bold', textAlign: 'start', color: '#C58F17', fontWeight: 'bold' }}>Visi</CardText>
                                    <ul>
                                        {props.visi}
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingBottom: '10px' }}>
                                    <CardText tag="h5" style={{ fontWeight: 'bold', textAlign: 'start', color: '#C58F17', fontWeight: 'bold' }}>Misi</CardText>
                                    <ul>
                                        {props.misi}
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
