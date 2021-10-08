import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import '../../../components/Pemilihan.css';
import DeskripsiHasilPemilihan from '../../../components/DeskripsiHasilPemilihan';
import CardHarapan from '../../../components/Card/CardHarapan'

const HasilPemilihan = () => {
    return (
        <div>
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
        <h1>Daftar Hasil pemilihan</h1>
        <Table striped>
          <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </tbody>
        </Table>
            <CardHarapan
                name='Adelina Indra'
                harapan='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
                saran='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
            />
        </div>
    )
}

export default HasilPemilihan