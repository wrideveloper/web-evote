import React, { useState, useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    FormGroup,
    Label,
    Input,
    Table,
    CardFooter,
} from 'reactstrap';
import axios from 'axios';
import '../../../components/responsiveHarapan.css';
// import { MyContext } from '../../../contexts/Api-Context'
import { convertToCapitalFirstLetter } from '../../../helper/string';
import Pagination from '../../../components/Pagination';

export default function Harapan() {
    // const { vote, getAllVote, setVote } = useContext(MyContext)
    const [harapan, setHarapan] = useState([]);
    const [postLength, setPostLength] = useState(0);
    const [user, setUser] = useState([]);

    const [pageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePagination = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }
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

    const [inputHarapan, setInputHarapan] = useState("")

    const newHarapan = {
        id_user: user.id_user,
        deskripsi: inputHarapan,
    }

    async function postHarapan() {
        await axios.post('https://evote.ceban-app.com/harapan', newHarapan)
            .then(() => {
                alert('Terima kasih, Anda Telah Mengisi Form Harapan')
                setPostLength(postLength + 1)
            }).catch(err => {
                alert(err)
                console.error(err)
            })
        setInputHarapan("")
    }

    async function getAllHarapan() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/harapan')
            setHarapan(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    const handleInputHarapan = (event) => {
        setInputHarapan(event.target.value);
        // console.log(inputHarapan)
    }

    useEffect(() => {
        getAllHarapan()
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, [postLength])

    const FilterHarapan = harapan.length > 0 && harapan.filter(item => item.harapan !== "")
        .sort((a, b) => b.id_harapan - a.id_harapan)

    let pagesCount = Math.ceil((FilterHarapan.length > 0) && FilterHarapan.length / pageSize);

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
                                    <h5>{convertToCapitalFirstLetter(user.nama)}</h5><br />
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
                                        maxLength="150"
                                        placeholder="Tulis Harapan"
                                        style={{ height: "230px", padding: '5%', verticalAlign: 'middle' }}
                                        onChange={(event) => handleInputHarapan(event)}
                                        value={inputHarapan}
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
                            <tr />
                            <tbody>
                                {
                                    FilterHarapan && FilterHarapan.slice(
                                        currentPage * pageSize,
                                        (currentPage + 1) * pageSize
                                    ).map((listHarapan) => (
                                        <tr key={listHarapan.id_vote}>
                                            <td className="nama w-25" style={{ paddingTop: '5%', paddingBottom: '5%', fontWeight: 'bold' }}>
                                                {convertToCapitalFirstLetter(listHarapan.nama)}
                                            </td>
                                            <td className="nama" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                                                {listHarapan.deskripsi}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <Pagination
                            currentPage={currentPage}
                            pagesCount={pagesCount}
                            handlePagination={handlePagination}
                        />
                    </CardBody>
                </Card>

            </Container>
        </div>
    )
}