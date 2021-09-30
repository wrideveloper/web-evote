import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const HasilPemilihan = () => {
    return (
        <div>
            <CardHarapan
                name='Adelina Indra'
                harapan='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
                saran='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
            />
        </div>
    )
}

const CardHarapan = (props) => {
    return (
        <div>
            <Card style={{ backgroundColor: '#f2f2f2', width: '85%', margin: 'auto', border: 'none', borderRadius: '8px' }}>
                <CardBody>
                    <div style={{ padding: '10px' }}>
                        <div style={{ paddingBottom: '30px' }}>
                            <CardTitle tag="h4" style={{ fontWeight: 'bold', color: '#c58f17' }}>{props.name}</CardTitle>
                        </div>
                        <div style={{ paddingBottom: '40px' }}>
                            <CardSubtitle tag="h6" style={{ fontWeight: 'bold' }}>Harapan</CardSubtitle>
                            <CardText style={{ lineHeight: '1.8' }}>{props.harapan}</CardText>
                        </div>
                        <div style={{ paddingBottom: '20px' }}>
                            <CardSubtitle tag="h6" style={{ fontWeight: 'bold' }}>Saran</CardSubtitle>
                            <CardText style={{ lineHeight: '1.8' }}>{props.saran}</CardText>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};


export default HasilPemilihan
