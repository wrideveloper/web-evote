import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../../components/Pemilihan.css';

const Deskripsi = (props) => {
        return(
            <Col className="contents" sm="5">
                <h1 className="total-suara">{props.jumlah}</h1>
                <div className="deskripsi">
                    <p>Total - Suara</p>
                    <p className="calon">{props.calon}</p>
                </div>
            </Col>
        )
}

const TotalSuara = (props) => {
    return(
        <h3  className="total-suara-final">Total Suara {props.TotalSuara}</h3>
    )
}

const HasilPemilihan = () => {

    

    return (
        <Container>
            <Row className="box">
                <Col xs="7">
                    <div className="paragraf">
                        <Row>
                            <Deskripsi jumlah="59" calon="Calon 1"></Deskripsi>
                            <Deskripsi jumlah="26" calon="Calon 2"></Deskripsi>
                        </Row>                  
                    </div>  
                </Col>

                <Col className="pie" xs="5">
                    <h1>Diagram Pie</h1>    
                </Col>
                <TotalSuara TotalSuara="85"></TotalSuara>
            </Row>
        </Container>
    )
}

export default HasilPemilihan
