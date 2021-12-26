import React, { useState, useContext } from 'react';
import { Container, Row, Col, Table, Button, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../../../components/Pemilihan.css';
import axios from 'axios';
import PieChart from '../../../../components/chart/PieChart'
import { MyContext } from '../../../../contexts/Api-Context';
import { convertDate } from '../../../../helper/date'

const HasilPemilihan = () => {
    const { getAllCalon } = useContext(MyContext)
    const [totalSemuaVote, setTotalSemuaVote] = useState([])
    const [hasil, setHasil] = useState([])
    const [allScore, setAllScore] = useState([])

    async function getsemuaTotalVote() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote/get/totalvote');
            setTotalSemuaVote(response.data)
            // console.log("Semua Vote", response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function getAllVote() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote');
            setHasil(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllScore = async () => {
        try {
            const request = await axios.get('https://evote.ceban-app.com/vote/get/score');
            setAllScore(request.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getsemuaTotalVote()
        getAllVote()
        getAllCalon()
        getAllScore()
    }, [getAllCalon])


    const dataSumVote = allScore.map(item => item.total_vote)
    const dataLabel = allScore.map(item => item.nama)

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
                                    {
                                        allScore.map((item) => (
                                            <Col xs="4">
                                                <CardBody style={{ backgroundColor: "#dfdfdf", borderRadius: "10%" }}>

                                                    <CardTitle tag="h1" style={{ marginBottom: "14%" }}>
                                                        {item.total_vote}
                                                    </CardTitle>

                                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                                        Total Suara
                                                    </CardSubtitle>
                                                    <CardText>
                                                        {item.nama}
                                                    </CardText>
                                                </CardBody>
                                            </Col>
                                        ))
                                    }

                                </Row>
                            </center>
                        </Col>
                        <Col className="bg-light border" xs="4" style={{ marginTop: "5%" }}>
                            <center><h3 className='mt-1'>Statistika Vote</h3></center>
                            <PieChart data={dataSumVote} label={dataLabel} />
                        </Col>
                    </Row>


                    {
                        totalSemuaVote.map((listTotalSemuaVote) => (
                            <>
                                <center>
                                    <h2 style={{ marginTop: "5%", marginBottom: "5%" }}>Total Suara {listTotalSemuaVote.total_vote}</h2>
                                </center>
                            </>
                        ))
                    }
                </Container>
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
                                    <td>{convertDate(listHasil.waktu_vote)}</td>
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