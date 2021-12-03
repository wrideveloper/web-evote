import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, CardBody, CardTitle, CardSubtitle, Card, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../../../components/Pemilihan.css';
import DeskripsiHasilPemilihan from '../../../../components/DeskripsiHasilPemilihan';
import axios from 'axios';

const HasilPemilihan = () => {

    const [totalCalon1, setVoteCalon1] = useState([])
    const [totalCalon2, setVoteCalon2] = useState([])
    const [totalCalon3, setVoteCalon3] = useState([])
    const [totalSemuaVote, setTotalSemuaVote] = useState([])

    async function getCalonId1() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote/2/sumvote');
            setVoteCalon1(response.data)
            console.log("Calon 1", response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function getCalonId2() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote/3/sumvote');
            setVoteCalon2(response.data)
            console.log("Calon 2", response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function getCalonId3() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote/4/sumvote');
            setVoteCalon3(response.data)
            console.log("Calon 3", response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function getsemuaTotalVote() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote/get/totalvote');
            setTotalSemuaVote(response.data)
            console.log("Semua Vote", response.data);
        } catch (error) {
            console.log(error)
        }
    }


    React.useEffect(() => {
        getsemuaTotalVote()
        getCalonId1()
        getCalonId2()
        getCalonId3()
    })

    return (
        <div>
            <div className="text-end mb-3">
                <Link to="/admin/hasil-pemilihan/saran"><Button style={{ backgroundColor: '#3F3D56' }}>Harapan dan Saran</Button></Link>
            </div>
            <Container className="bg-light border">
                <Container >
                    <Row>
                        <Col xs="8" >
                            <center>
                                <Row style={{ margin: "2%", marginTop: "10%" }}>
                                    <Col xs="4">
                                        <CardBody style={{ backgroundColor: "#dfdfdf", borderRadius: "10%" }}>
                                            {
                                                totalCalon1.map((listVoteCalon1) => (
                                                    <>
                                                        <CardTitle tag="h1" style={{ marginBottom: "14%" }}>
                                                            {listVoteCalon1.sum_vote}
                                                        </CardTitle>
                                                    </>
                                                ))
                                            }
                                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                                Total Suara
                                                    </CardSubtitle>
                                            <CardText>
                                                Calon 1
                                                    </CardText>
                                        </CardBody>
                                    </Col>
                                    <Col xs="4">
                                        <CardBody style={{ backgroundColor: "#dfdfdf", borderRadius: "10%" }}>
                                            {
                                                totalCalon2.map((listVoteCalon2) => (
                                                    <>
                                                        <CardTitle tag="h1" style={{ marginBottom: "14%" }}>
                                                            {listVoteCalon2.sum_vote}
                                                        </CardTitle>
                                                    </>
                                                ))
                                            }
                                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                                Total Suara
                                                    </CardSubtitle>
                                            <CardText>
                                                Calon 2
                                                    </CardText>
                                        </CardBody>
                                    </Col>
                                    <Col xs="4">
                                        <CardBody style={{ backgroundColor: "#dfdfdf", borderRadius: "10%" }}>
                                            {
                                                totalCalon3.map((listVoteCalon3) => (
                                                    <>
                                                        <CardTitle tag="h1" style={{ marginBottom: "14%" }}>
                                                            {listVoteCalon3.sum_vote}
                                                        </CardTitle>
                                                    </>
                                                ))
                                            }
                                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                                Total Suara
                                                    </CardSubtitle>
                                            <CardText>
                                                Calon 3
                                                    </CardText>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </center>
                        </Col>
                        <Col className="bg-light border" xs="4" tag="h2" style={{ marginTop: "5%" }}>
                            <center> Diagram Pie </center>
                        </Col>
                    </Row>
                    {
                        totalSemuaVote.map((listTotalSemuaVote) => (
                            <>
                                <center><h2 style={{ marginTop: "5%", marginBottom: "5%" }}>Total Suara {listTotalSemuaVote.total_vote}</h2></center>
                            </>
                        ))
                    }
                </Container>
            </Container>

            {/* <Container>
                <div className="text-end mb-3">
                    <Link to="/admin/hasil-pemilihan/saran"><Button style={{ backgroundColor: '#3F3D56' }}>Harapan dan Saran</Button></Link>
                </div>
                <Row className="box">
                    <Col xs="7">
                        <div className="paragraf">
                            <Row>
                                <DeskripsiHasilPemilihan jumlah="59" calon="Calon 1" />
                                <DeskripsiHasilPemilihan jumlah="26" calon="Calon 2" />
                                <DeskripsiHasilPemilihan jumlah="26" calon="Calon 3" />
                            </Row>
                        </div>
                    </Col>

                    <Col className="pie" >
                        <h1>Diagram Pie</h1>
                    </Col>

                    <h3 className="total-suara-final">Total Suara : 85</h3>
                </Row>
            </Container> */}
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