import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const CardHarapan = (props) => {
    return (
        <Container>
            <Card style={{ backgroundColor: '#f2f2f2', width: '85%', margin: 'auto', border: 'none', borderRadius: '8px' }}>
                <CardBody>
                    <Row style={{ padding: '10px' }}>
                        <Row>
                            <Col style={{ paddingBottom: '30px' }}>
                                <CardTitle tag="h4" style={{ fontWeight: 'bold', color: '#c58f17' }}>{props.name}</CardTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingBottom: '40px' }}>
                                <CardSubtitle tag="h6" style={{ fontWeight: 'bold' }}>Harapan</CardSubtitle>
                                <CardText style={{ lineHeight: '1.8' }}>{props.harapan}</CardText>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingBottom: '20px' }}>
                                <CardSubtitle tag="h6" style={{ fontWeight: 'bold' }}>Saran</CardSubtitle>
                                <CardText style={{ lineHeight: '1.8' }}>{props.saran}</CardText>
                            </Col>
                        </Row>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};

export default CardHarapan