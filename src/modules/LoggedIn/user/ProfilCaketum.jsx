import React, { useState, useEffect, useContext } from 'react'
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from '../../../contexts/Api-Context';
import { dateNumber } from '../../../helper/date';

const ProfilCaketum = () => {
    let { id } = useParams();
    let history = useHistory();
    const { vote, getAllVote, } = useContext(MyContext);
    const [calon, setCalon] = useState([]);
    const [user, setUser] = useState([]);
    const [modal, setModal] = useState(false);

    const handleModal = () => setModal(prev => !prev);

    const postVote = async () => {
        try {
            await axios.post("https://evote.ceban-app.com/vote", {
                id_calon: id,
                id_user: user.id_user,
                harapan: "",
                waktu_vote: dateNumber,
            });
            history.push('/done')
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
                const response = await axios.get(`https://evote.ceban-app.com/calon/${id}`);
                setCalon(response.data);
                console.log("halo ini data calon", response);
            } catch (error) {
                console.error(error);
            }
        }
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
        getAllVote()
        getCalon()
    }, [id, getAllVote])

    if (!vote) return ""

    const filterVoteSameNimUser = vote.length !== 0 && vote.filter(item => item.nim_pemilih === user.nim)


    return (
        <div>
            {
                calon.map((data) => (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif' }}>
                            <h4
                                style={{ display: 'block', padding: '10px', fontSize: '48px', borderBottom: '14px solid #F7B217', fontWeight: '400', marginBottom: '35px', marginTop: '66px' }}>
                                Profil Caketum
                            </h4>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', width: '97%' }}>
                            <div style={{ border: '2px solid #C4C4C4', borderRadius: '10px', margin: '30px', minHeight: '565px' }}>
                                <img src={data.foto} alt=""
                                    style={{ width: '331px', height: '250px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                                <div style={{ padding: '10px', width: '60%', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'sans-serif' }}>
                                    <div style={{ marginBottom: '20px', marginTop: '45px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#3F3D56', fontWeight: '700' }}>{data.nama}</h3>
                                        <p style={{ margin: '0', fontSize: '16px', color: '#7B7899' }}>Calon {data.id_calon}</p>
                                    </div>
                                    <div>
                                        <p style={{ marginBottom: '5px' }}>Kelas {data.kelas}</p>
                                        <p style={{ margin: '0' }}>Miniclass {data.miniclass}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{ border: '2px solid #D5D2EE', borderRadius: '10px', margin: '30px', maxHeight: '565px', padding: '20px', fontFamily: 'sans-serif', minWidth: '938px' }}>
                                <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '48px' }}>
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
                                        <li>{data.misi}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* profile caketum end*/}

                        {/* Video Orasi */}
                        <div style={{ border: '2px solid #D5D2EE', borderRadius: '10px', padding: '40px 55px', margin: '25px 10px 50px 10px', fontFamily: 'sans-serif' }}>
                            <div
                                style={{ display: 'inline-block', verticalAlign: 'middle', border: '2px solid black', width: '20px', height: '20px', borderRadius: '50%', marginLeft: '20px', marginRight: '10px', backgroundColor: '#5CE1FF' }}>
                            </div>
                            Video Orasi
                            {/* <h1>Tempat Halaman home page</h1> */}
                            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', marginTop: '30px', marginBottom: '10%' }}>
                                <iframe width="1280" height="662" src={data.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen'></iframe>
                            </div>
                        </div>
                        {/* Video Orasi End */}
                    </>
                ))
            }

            {/* button */}
            <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '122px' }}>
                <Link to="/">
                    <Button style={{ padding: '20px 80px', borderRadius: '50px', marginRight: '57px', border: '2px solid #E9E8F6', backgroundColor: 'white', color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Kembali</Button>
                </Link>
                {
                    filterVoteSameNimUser.length > 0 ?
                        <Button
                            className="mb-1"
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "15px 60px",
                                borderRadius: "25px",
                            }}
                            disabled
                        >Berhasil Voting</Button>
                        :
                        <Button
                            className="mb-1"
                            color="warning"
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "15px 60px",
                                borderRadius: "25px",
                            }}
                            onClick={() => {
                                handleModal();
                            }}
                        >
                            Vote
                        </Button>
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
                                Kamu hanya bisa memilih satu Caketum. NIM yang sudah digunakan
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
        </div>

    )
}

export default ProfilCaketum
