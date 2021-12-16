import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Row,
  Col,
  Container,
} from "reactstrap";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import { dateNumber } from "../../../../helper/date";
import { useHistory } from 'react-router-dom'
import "./Home.css";
import { MyContext } from "../../../../contexts/Api-Context";

const Home = () => {
  const [user, setUser] = useState([]);
  const { id_user } = user
  const [calon, setCalon] = useState("");
  // const [vote, setVote] = useState([]);
  const [dataCalon, setDataCalon] = useState([]);
  const [voteId, setVoteId] = useState([]);
  const history = useHistory()
  const { vote, getAllVote, } = useContext(MyContext);
  const getData = async () => {
    try {
      const response = await axios.get("https://evote.ceban-app.com/calon");
      setDataCalon(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(id_user)
  useEffect(() => {

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    const getVoteById = async () => {
      try {
        const response = await axios.get(`https://evote.ceban-app.com/vote/${id_user}`);
        setVoteId(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllVote()
    getData();
    getVoteById();
  }, [getAllVote, id_user]);
  // console.log("haloo calon", calon)
  // console.log(voteId.length)
  const postVote = async () => {
    try {
      if (voteId.length === 0) {
        await axios.post("https://evote.ceban-app.com/vote", {
          id_calon: calon,
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

  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

  if (!vote) return ""

  const filterVoteSameNimUser = vote.length !== 0 && vote.filter(item => item.nim_pemilih === user.nim)
  // console.log(user)
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("../images/home-image.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "0 5px",
        }}
      >
        <div className="hero">
          <span className="title">E-Vote Pilketum WRI 2021</span>
          <h4 className="desc">"Buatlah Perubahan Dengan Pilihanmu"</h4>
        </div>
      </div>
      <Card className="card__welcome">
        <CardBody
          style={{ borderLeft: "solid #f7b217 15px", padding: "20px 35px" }}
        >
          <Row>
            <Col style={{ paddingBottom: "30px" }}>
              <CardTitle tag="h2" style={{ color: "#3f3d56" }}>
                Selamat Datang di Pilketum WRI {new Date().getFullYear()}
              </CardTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardText className="text-muted" style={{ lineHeight: "1.8" }}>
                Halo WRI Crew! <br />
                Terima kasih sudah berpartisipasi di Pilketum WRI 2021. <br />
                <br />
                Silahkan untuk memilih salah satu dari tiga Calon Ketua Umum
                yang ada, Kalau kamu masih bingung, silahkan lihat profil
                masing-masing Caketum untuk info lebih detailnya ya.
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <center>
        <h1
          className="mt-5 mb-3 pb-3"
          id="card-title"
          style={{
            color: "#2e2c49",
            fontWeight: "450",
            borderBottom: "solid #f7b217 13px",
            width: "300px",
          }}
        >
          Para Caketum
        </h1>
        <Container>
          <Row className="mb-5 justify-content-center">
            {dataCalon.map((menampilkanData) => (
              <Col lg="4" sm="12" key={menampilkanData.id_calon}>
                <Card
                  key={menampilkanData.id_calon}
                  className="m-4"
                  style={{ maxWidth: "450px", borderRadius: "10px" }}
                >
                  <CardImg
                    className="d-flex justify-content-left"
                    alt="foto calon"
                    src={menampilkanData.foto}
                    top
                    width="100%"
                    style={{
                      borderRadius: "10px 10px 0px 0px",
                      marginBottom: "-27px",
                      minHeight: "250px",
                      maxHeight: "250px",
                      objectFit: "cover"
                    }}
                  />
                  <span
                    className="p-1"
                    style={{
                      fontSize: "13px",
                      color: "white",
                      backgroundColor: "#3f3d56",
                      maxWidth: "80px",
                      borderRadius: "0px 5px 0px 0px",
                    }}
                  >
                    Calon {menampilkanData.id_calon}
                  </span>
                  <CardBody>
                    <CardTitle className="mt-4" tag="h5">
                      {menampilkanData.nama}
                    </CardTitle>
                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                      Miniclass {menampilkanData.miniclass}
                    </CardSubtitle>
                    <CardText className="descriptionVisi">"{menampilkanData.visi}"</CardText>

                    <div>
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
                          >Sudah Voting</Button>
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
                              setCalon(menampilkanData.id_calon);
                            }}
                          >
                            Vote
                          </Button>
                      }

                    </div>
                    <div>
                      <Link to={`/profile-caketum/${menampilkanData.id_calon}`}>
                        <Button
                          className="mb-3 mt-1"
                          style={{
                            color: "black",
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "15px 41px",
                            borderRadius: "25px",
                            borderColor: "#e9e8f6",
                            backgroundColor: "transparent",
                          }}
                        >
                          Lihat Profil
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </center>

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
              Kamu hanya bisa memilih satu Caketum. PIN yang sudah digunakan
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
            onClick={() => {
              handleModal();
              postVote();
            }}
          >
            Vote Now
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Home;
