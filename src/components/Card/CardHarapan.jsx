import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const CardHarapan = (props) => {


    return (
        <>
            <Card className="mb-3" style={{ backgroundColor: '#f2f2f2', border: 'none', borderRadius: '8px' }}>
                <CardBody>
                    <Row style={{ padding: '10px' }}>
                        <Row>
                            <Col style={{ paddingBottom: '30px' }}>
                                <CardTitle tag="h4" style={{ fontWeight: 'bold', color: '#c58f17' }}>{props.name}</CardTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CardSubtitle tag="h6" style={{ fontWeight: 'bold' }}>Saran</CardSubtitle>
                                <CardText style={{ lineHeight: '1.8' }}>{props.saran}</CardText>
                            </Col>
                        </Row>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default CardHarapan