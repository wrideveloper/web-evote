import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../../components/Pemilihan.css';
import DeskripsiHasilPemilihan from '../../../components/DeskripsiHasilPemilihan';

const HasilPemilihan = () => {
  return (
        <Container>
            <Row className="box">
                <Col xs="7">
                    <div className="paragraf">
                        <Row>
                            <DeskripsiHasilPemilihan jumlah="59" calon="Calon 1"/>
                            <DeskripsiHasilPemilihan jumlah="26" calon="Calon 2"/>
                        </Row>                  
                    </div>  
                </Col>

                <Col className="pie" xs="5">
                    <h1>Diagram Pie</h1>    
                </Col>
                <h3 className="total-suara-final">Total Suara : 85</h3>
            </Row>
        </Container>
    )
}

export default HasilPemilihan
