import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../../../components/Pemilihan.css';
import DeskripsiHasilPemilihan from '../../../../components/DeskripsiHasilPemilihan';
import axios from 'axios';

const HasilPemilihan = () => {
     const [hasil, setHasil] = useState([])
    // const [modal, setModal] = useState(false);
    

    //console.log(getCalon);

    React.useEffect(() => {
        async function getHasil() {
            try {
                const response = await axios.get('https://evote.ceban-app.com/vote');
                setHasil(response.data)
                // console.log("Halo ini Data Calon",response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getHasil()
    }, [])

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
                        <th>Nama</th>
                        <th>Memilih</th>
                        <th>Waktu</th>
                        
                    </tr>
                </thead>
                 {
                    hasil.map((listHasil) => (
                        <>
                            <tbody style={{ height: '85px' }}>
                                <tr>
                                    <td>{listHasil.nama_pemilih}</td>
                                    <td>{listHasil.memilih_calon}</td>
                                     <td>{listHasil.waktu_vote}</td>
                                    
                                   
                                </tr>
                               
                            </tbody>
                        </>
                    ))
                }
            </Table>
        </div>
    )
}

export default HasilPemilihan