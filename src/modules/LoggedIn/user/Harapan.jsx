import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, CardBody, CardTitle, CardSubtitle, FormGroup, Label, Input, Table, CardFooter } from 'reactstrap';
import axios from 'axios';
import { dateNumber } from '../../../helper/date';
import '../../../components/responsiveHarapan.css';

export default function Harapan() {

    // console.log(dateNumber)
    // const [inputStr, setInputstr] = useState('');
    // const [showPicker, setShowPicker] = useState(false);

    // const onEmojiClick = (event, emojiObject) => {
    //     setInputstr(prevInput => prevInput + emojiObject.emoji);
    //     setShowPicker(false);
    // };

    // const hitung = () => {

    //     const myTextArea = document.getElementById('my-textarea');
    //     const remainingCharsText = document.getElementById('my-textarea-remaining-chars');
    //     const MAX_CHARS = 150;

    //     myTextArea.addEventListener('input', () => {
    //         const remaining = MAX_CHARS - myTextArea.value.length;

    //         remainingCharsText.textContent = `${remaining} characters remaining`;
    //     });
    // }

    const [harapan, setHarapan] = useState([])

    async function getHarapan() {
        try {
            const response = await axios.get('http://evote.ceban-app.com/vote');
            setHarapan(response.data)
            console.log("Halo ini Data Calon", response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const [inputHarapan, setInputHarapan] = useState("")

    async function postHarapan() {
        try {
            const response = await axios.post('http://evote.ceban-app.com/vote', {
                id_calon: '3',
                id_user: '3',
                harapan: inputHarapan,
                waktu_vote: dateNumber
            });
            alert('berhasil');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputHarapan = (event) => {
        setInputHarapan(event.target.value);
        console.log(inputHarapan)
    }

    //console.log(getCalon);

    React.useEffect(() => {
        getHarapan()
    })

    return (
        <div>
            <center><h1 className="judul" style={{ marginTop: '83px' }}>Sampaikan Harapanmu</h1>
                <h1 style={{ borderBottom: 'solid #f7b217 10px', width: '23%', borderRadius: '20px', margin: '20px 0px 60px 0px' }}> </h1>
            </center>
            <Container>
                <Row>
                    <Col className="inputt" xs="3" style={{ textAlign: 'center' }}>
                        <img className="log" src='/images/logo.png' alt="" style={{ width: '70%' }} />
                    </Col>
                    <Col >
                        <Card>
                            <CardBody style={{ padding: '60px' }}>
                                <CardTitle tag="h5">
                                    <h5><img src="/images/Rectangle 103.png" alt="" style={{ marginRight: '15px', width: '19px' }} />Harapan Untuk Caketum</h5><br />
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    Nama
                                </CardSubtitle>
                                <CardTitle tag="h5">
                                    <h5>Anonymous</h5><br />
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    <Label for="my-textarea">
                                        Harapan
                                    </Label>
                                </CardSubtitle>
                                <FormGroup>
                                    <Input
                                        className="inputArea"
                                        id="my-textarea"
                                        name="text"
                                        type="textarea"
                                        maxlength="150"
                                        placeholder="Tulis Harapan"
                                        style={{ height: "230px", padding: '5%', verticalAlign: 'middle' }}
                                        onChange={(event) => handleInputHarapan(event)}
                                    />
                                    {/* <div className="my-textarea-remaining-chars">150 characters remaining</div> */}
                                </FormGroup>
                                {/* Emoticon */}
                                {/* <div className="picker-container" style={{textAlign: 'right', paddingTop: '40px'}}>
                                    <input style={{width: '180px', height: '30px', borderRadius: '50px', padding: '20px', margin: '20px'}}
                                        className="input-style"
                                        value={inputStr}  
                                        onChange={e => setInputstr(e.target.value)} />
                                        <img className="emoji-icon" src="https://cdn-icons-png.flaticon.com/512/197/197571.png" width="20px" 
                                        onClick={() => setShowPicker (val => !val)} />
                                        {showPicker && <Picker 
                                            pickerStyle={{width: '100%'}}
                                            onEmojiClick={onEmojiClick} />}
                                </div> */}
                            </CardBody>
                            <CardFooter style={{ padding: "45px 68px 45px 45px", textAlign: 'right' }}>
                                <Button onClick={postHarapan} color="warning" style={{ color: 'white', width: '150px', borderRadius: '100px' }}>
                                    Submit
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
            <br /><br />
            <Container style={{ marginBottom: '50px' }}>

                <Card>
                    <CardBody style={{ marginLeft: '5%', marginRight: '5%' }}>
                        <h5 style={{ marginTop: '58px' }}><img src="/images/Rectangle 92 .png" alt="" style={{ marginRight: '15px', width: '19px' }}></img>Harapan kami</h5>
                        <Table style={{ marginTop: '45px' }}>
                            <thead >
                                <tr >

                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            {
                                harapan.map((listHarapan) => (
                                    <>
                                        <tbody>
                                            <tr>
                                                <td className="nama" style={{ paddingTop: '5%', paddingBottom: '5%', fontWeight: 'bold' }}>
                                                    {listHarapan.nama_pemilih}
                                                </td>
                                                <td className="nama" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                                                    {listHarapan.harapan}</td>
                                            </tr>

                                            {/* Fetching */}
                                        </tbody>
                                    </>
                                ))
                            }

                        </Table>
                    </CardBody>
                </Card>

            </Container>
        </div>
    )
}