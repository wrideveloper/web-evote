import React, { useState } from 'react';
import CompIcons from '../../../components/CompIcons';
// import CardDetailCalon from '../../../components/Card/CardDetailCalon';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const Calon = () => {

    const [calon, setCalon] = useState([])
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //console.log(getCalon);
    const [inputNamaCalon, setNamaCalon] = useState("")
    const [inputNamaKelas, setNamaKelas] = useState("")
    const [inputVisi, setVisi] = useState("")
    const [inputMisi, setMisi] = useState("")
    const [inputFoto, setFoto] = useState("")
    const [inputLink, setLink] = useState("")
    const [inputMiniclass, setMiniclass] = useState("")

    async function postCalon() {
        try {
            const response = await axios.post('https://evote.ceban-app.com/calon', {
                nama: inputNamaCalon,
                kelas: inputNamaKelas,
                visi: inputVisi,
                misi: inputMisi,
                foto: inputFoto,
                link: inputLink,
                miniclass: inputMiniclass
            });
            alert('Data Berhasil Ditambahkan');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputNamaCalon = (event) => {
        setNamaCalon(event.target.value);
        console.log(inputNamaCalon)
    }
    const handleInputNamaKelas = (event) => {
        setNamaKelas(event.target.value);
        console.log(inputNamaKelas)
    }
    const handleInputVisi = (event) => {
        setVisi(event.target.value);
        console.log(inputVisi)
    }
    const handleInputMisi = (event) => {
        setMisi(event.target.value);
        console.log(inputMisi)
    }
    const handleInputFoto = (event) => {
        setFoto(event.target.value);
        console.log(inputFoto)
    }
    const handleInputMiniclass = (event) => {
        setMiniclass(event.target.value);
        console.log(inputMiniclass)
    }
    const handleInputLink = (event) => {
        setLink(event.target.value);
        console.log(inputLink)
    }

    React.useEffect(() => {
        async function getCalon() {
            try {
                const response = await axios.get('https://evote.ceban-app.com/calon');
                setCalon(response.data)
                // console.log("Halo ini Data Calon",response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getCalon()
    }, [])

    return (
        <div>
            <Button className="mb-3" style={{ backgroundColor: '#3F3D56' }} onClick={toggle}>Tambah Calon</Button>
            <Modal style={{ background: "#E5E5E5" }} isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle} style={{ color: "#3C6786" }}>Tambah Calon</ModalHeader>
                <ModalBody>
                    <FormGroup style={{ marginTop: 5 }}>
                        <Label for="exampleNama" style={{ color: "#3C6786" }} >Nama </Label>
                        <Input type="nama" name="nama" id="exampleNama" onChange={(event) => handleInputNamaCalon(event)} />
                    </FormGroup>
                    <Form className="mt-4">
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleKelas" style={{ color: "#3C6786" }}>Kelas </Label>
                                    <Input type="kelas" name="kelas" id="exampleKelas" onChange={(event) => handleInputNamaKelas(event)} />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleKelas" style={{ color: "#3C6786" }}>Foto </Label>
                                    <Input type="foto" name="foto" id="exampleKelas" onChange={(event) => handleInputFoto(event)} />
                                    {/* <Label for="exampleFile" style={{ color: "#3C6786" }}>Foto </Label><Input type="file" name="file" id="exampleFile" style={{ color: "#3C6786" }} /> */}
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <Form className="mt-4">
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleKelas" style={{ color: "#3C6786" }}>Link </Label>
                                    <Input type="link" name="link" id="exampleKelas" onChange={(event) => handleInputLink(event)} />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleKelas" style={{ color: "#3C6786" }}>Miniclass </Label>
                                    <Input type="miniclass" name="miniclass" id="exampleKelas" onChange={(event) => handleInputMiniclass(event)} />
                                    {/* <Label for="exampleFile" style={{ color: "#3C6786" }}>Foto </Label><Input type="file" name="file" id="exampleFile" style={{ color: "#3C6786" }} /> */}
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <Form className="mt-4">
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleText" style={{ color: "#3C6786" }}>Visi </Label>
                                    <Input type="textarea" name="text" id="exampleText" onChange={(event) => handleInputVisi(event)} />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleText" style={{ color: "#3C6786" }}>Misi </Label>
                                    <Input type="textarea" name="text" id="exampleText" onChange={(event) => handleInputMisi(event)} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={toggle}>Batal</Button>{' '}
                    <Button style={{ backgroundColor: '#3F3D56' }} onClick={postCalon}>Tambah</Button>
                </ModalFooter>
            </Modal>
            <Table striped bordered hover>
                <thead >
                    <tr style={{ textAlign: 'center', padding: '800px' }}>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Foto</th>
                        <th colSpan="3" id="label-action" style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                {
                    calon.map((listCalon, i) => (
                        <tbody style={{ height: '85px' }} key={i}>
                            <tr>
                                <td>{listCalon.nama}</td>
                                <td>{listCalon.kelas}</td>
                                <td><img src={listCalon.foto} alt="" height="75px" /></td>
                                <td><CompIcons name="test" /></td>
                            </tr>
                            {/* <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>
                                        <CompIcons />
                                    </td>
                                </tr> */}
                        </tbody>
                    ))
                }
            </Table>
        </div>
    )
}

export default Calon;