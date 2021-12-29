import React, { useState, useEffect, useContext } from 'react'
import {
    Container,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    Row,
    Col
} from "reactstrap";
import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from '../../../../contexts/Api-Context';
import { dateNumber } from '../../../../helper/date';
import { convertToCapitalFirstLetter, splitMisi } from '../../../../helper/string';
import './profileCaketum.css'

const ProfilCaketum = () => {
    let { id } = useParams();
    let history = useHistory();
    const { vote, getAllVote, } = useContext(MyContext);
    const [calon, setCalon] = useState([]);
    const [user, setUser] = useState([]);
    const [modal, setModal] = useState(false);
    const [voteId, setVoteId] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleModal = () => setModal(prev => !prev);

    const postVote = async () => {
        try {
            if (voteId.length === 0) {
                await axios.post("https://evote.ceban-app.com/vote", {
                    id_calon: id,
                    id_user: user.id_user,
                    harapan: "",
                    waktu_vote: dateNumber,
                });
                history.push('/done')
            } else {
                alert('Mohon maaf sepertinya anda sudah melakukan vote.')
            }

        } catch (error) {
            console.error(error);
        }
    };

    const onModal = () => {
        handleModal()
        postVote()
    }


    useEffect(() => {
        const getCalon = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://evote.ceban-app.com/calon/${id}`);
                setCalon(response.data);
                setLoading(false)
                // console.log("halo ini data calon", response);
            } catch (error) {
                console.error(error);
            }
        }
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
        const getVoteById = async () => {
            try {
                const response = await axios.get(`https://evote.ceban-app.com/vote/${id}`);
                setVoteId(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getAllVote()
        getCalon()
        getVoteById()
    }, [id, getAllVote])

    if (!vote) return ""

    const filterVoteSameNimUser = vote.length !== 0 && vote.filter(item => item.nim_pemilih === user.nim)


    return (
        <Container style={{ minHeight: '90vh' }}>
            {
                calon.map((data, index) => (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif' }}>
                            <h4
                                style={{ display: 'block', padding: '10px', fontSize: '48px', borderBottom: '14px solid #F7B217', fontWeight: '400', marginBottom: '35px', marginTop: '66px' }}>
                                Profil Caketum
                            </h4>
                        </div>
                        <Row>
                            <Col key={index} xs="12" md="6" lg="4" className="mb-3">
                                <div style={{ border: '2px solid #C4C4C4', borderRadius: '10px', minHeight: '565px' }}>
                                    <img src={data.foto} alt="" className="w-100"
                                        style={{
                                            borderTopLeftRadius: '8px',
                                            borderTopRightRadius: '8px',
                                            minHeight: "280px",
                                            maxHeight: "380px",
                                            width: "100%",
                                            objectPosition: '100% top',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div className="m-5" style={{ fontFamily: 'sans-serif' }}>
                                        <div>
                                            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#3F3D56', fontWeight: '700' }}>{convertToCapitalFirstLetter(data.nama)}</h3>
                                            <p style={{ margin: '0', fontSize: '16px', color: '#7B7899' }}>Calon {data.id_calon}</p>
                                        </div>
                                        <div className="mt-2">
                                            <p style={{ marginBottom: '5px' }}>Kelas {data.kelas}</p>
                                            <p style={{ margin: '0' }}>Miniclass {data.miniclass}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div
                                    style={{ border: '2px solid #D5D2EE', borderRadius: '10px', minHeight: '565px', padding: '20px', fontFamily: 'sans-serif' }}>
                                    <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '48px' }}>
                                        <div
                                            style={{ display: 'inline-block', border: '2px solid black', verticalAlign: 'middle', width: '20px', height: '20px', borderRadius: '50%', marginRight: '10px', backgroundColor: '#5CE1FF', fontSize: '16px' }}>
                                        </div>
                                        Tentang Saya
                                    </div>
                                    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', marginTop: '50px' }}>
                                        <h4 style={{ color: '#7B7899', fontSize: '16px', marginBottom: '14px' }}>Visi</h4>
                                        <p style={{ lineHeight: '24px', fontSize: '16px' }}>{data.visi}</p>
                                    </div>
                                    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                                        <h4 style={{ color: '#7B7899', fontSize: '16px', marginBottom: '14px' }}>Misi</h4>
                                        <ol style={{ lineHeight: '24px', fontSize: '16px' }}>
                                            {splitMisi(data.misi).map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        {/* profile caketum end*/}

                        {/* Video Orasi */}
                        <div className="mt-3 mb-5" style={{ border: '2px solid #D5D2EE', borderRadius: '10px', padding: '40px 55px', fontFamily: 'sans-serif' }}>
                            <div
                                style={{ display: 'inline-block', verticalAlign: 'middle', border: '2px solid black', width: '20px', height: '20px', borderRadius: '50%', marginLeft: '20px', marginRight: '10px', backgroundColor: '#5CE1FF' }}>
                            </div>
                            Video Orasi
                            {/* <h1>Tempat Halaman home page</h1> */}
                            <div className="iframeContainer w-100 mt-3">
                                {
                                    data.link === null ?
                                        <h5>Vidio Masih Kosong</h5> :
                                        <ReactPlayer url={data.link} className="w-100" height="500px"
                                            playIcon="true" />
                                }
                            </div>
                        </div>
                        {/* Video Orasi End */}
                    </>
                ))
            }

            {/* button */}
            <div className="d-flex justify-content-end">
                {
                    !loading &&
                    <>
                        <Link to="/">
                            <Button color="#fff" className="mb-5"
                                style={{ borderColor: '#E9E8F6', borderRadius: '50px', minWidth: "150px", padding: "15px", marginRight: '10px' }}
                            >Kembali</Button>
                        </Link>
                        {
                            filterVoteSameNimUser.length > 0 ?
                                <Button
                                    className="mb-5"
                                    style={{ borderColor: '#E9E8F6', borderRadius: '50px', minWidth: "150px", padding: "15px" }}
                                    disabled
                                >Sudah Voting</Button>
                                :
                                <Button
                                    className="mb-5"
                                    style={{ borderColor: '#E9E8F6', borderRadius: '50px', minWidth: "150px", padding: "15px" }}
                                    color="warning"
                                    onClick={() => {
                                        handleModal();
                                    }}
                                    disabled
                                >
                                    Vote
                                </Button>
                        }
                    </>

                }
                <Modal isOpen={modal} size="lg">
                    <center>
                        <ModalBody style={{ color: "#2e2c49" }}>
                            <FontAwesomeIcon
                                className="mt-5"
                                icon={faExclamationTriangle}
                                style={{ minWidth: "65px", minHeight: "65px", color: "#ff6159" }}
                            />
                            <br />
                            <br />
                            <h4>Apakah Kamu yakin?</h4>
                            <br />
                            <p className="text-muted mb-5">
                                Kamu hanya bisa memilih satu Caketum. Username yang sudah digunakan
                                untuk vote tidak bisa digunakan lagi
                            </p>
                        </ModalBody>
                    </center>
                    <ModalFooter style={{ backgroundColor: "#e9e8f6" }}>
                        <Button
                            style={{
                                backgroundColor: "#ffffff",
                                color: "black",
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "15px 41px",
                                borderWidth: "0px",
                                borderRadius: "25px",
                            }}
                            onClick={handleModal}
                        >
                            Kembali
                        </Button>
                        <Button
                            style={{
                                backgroundColor: "#f7b217",
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "15px 40px",
                                borderWidth: "0px",
                                borderRadius: "25px",
                            }}
                            onClick={onModal}
                        >
                            Vote Now
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
            {/* button end */}
        </Container>

    )
}

export default ProfilCaketum
