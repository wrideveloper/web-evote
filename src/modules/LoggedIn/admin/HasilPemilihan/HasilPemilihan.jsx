import React from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../../../components/Pemilihan.css';
import DeskripsiHasilPemilihan from '../../../../components/DeskripsiHasilPemilihan';

const HasilPemilihan = () => {
    return (
        <div>
            <Container>
                <div className="text-end mb-3">
                    <Link to="/admin/hasil-pemilihan/saran"><Button style={{ backgroundColor: '#3F3D56' }}>Harapan dan Saran</Button></Link>
                </div>
                <Row className="box">
                    <Col xs="7">
                        <div className="paragraf">
                            <Row>
                                <DeskripsiHasilPemilihan jumlah="59" calon="Calon 1" />
                                <DeskripsiHasilPemilihan jumlah="26" calon="Calon 2" />
                            </Row>
                        </div>
                    </Col>

                    <Col className="pie" xs="5">
                        <h1>Diagram Pie</h1>
                    </Col>
                    <h3 className="total-suara-final">Total Suara : 85</h3>
                </Row>
            </Container>
            <Table striped bordered hover className="mt-4">
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
        </div>
    )
}

export default HasilPemilihan