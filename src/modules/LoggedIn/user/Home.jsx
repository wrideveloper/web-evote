import React, {useState} from 'react'
import {
    Button, Modal, ModalBody, ModalFooter, 
    Card, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, CardImg, Row, Col
} from 'reactstrap';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

    const [modal, setModal] = useState(false);

    const handleModal = () => setModal(!modal);

    return (
        <>
            <div 
                style={{
                    backgroundImage: 'url("../images/home-image.png")',
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    justifyContent: "center",
                    padding:"150px 0px"}}>
                <div>
                    <center>
                    <span 
                        style={{backgroundColor:"#f7b217", fontSize:"48px", color:"#fce4ae", 
                        borderRadius:"10px", fontWeight:"600", padding:"20px 80px"}}>
                            E-Vote Pilketum WRI 2021
                    </span><br /><br /><br />
                    </center>
                    <h4
                        style={{
                            color: "#FFFFFF",
                            letterSpacing: "0.0025em",
                            textAlign: "center",
                            lineHeight: "46px",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "34px"}}>
                        "Buatlah Perubahan Dengan Pilihanmu"
                    </h4>
                </div>
            </div>
            <Card className="mb-3" style={{margin:"50px",padding:"50px 70px",borderWidth:"2px",borderColor:"#e9e8f6", borderRadius:"10px"}}>
                <CardBody style={{borderLeft:"solid #f7b217 15px",padding:"20px 50px"}}>
                    <Row>
                        <Col style={{paddingBottom: "30px"}}>
                            <CardTitle tag="h2" style={{color:"#3f3d56"}}>Selamat Datang di Pilketum WRI {(new Date().getFullYear())}</CardTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardText className="text-muted" style={{lineHeight: "1.8"}}>
                                Halo WRI Crew! <br />
                                Terima kasih sudah berpartisipasi di Pilketum WRI 2021. <br /><br />
                                Silahkan untuk memilih salah satu dari tiga Calon Ketua Umum yang ada, Kalau kamu masih bingung,
                                silahkan lihat profil masing-masing Caketum untuk info lebih detailnya ya.
                            </CardText>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <center>
            <h1 
                className="mt-5 mb-3 pb-3"
                id="card-title" 
                style={{color: "#2e2c49",fontWeight:"450",borderBottom: "solid #f7b217 13px", width:"300px"}}>
                    Para Caketum
            </h1>
            <CardGroup className="mb-5 d-flex justify-content-center">
                <Card className="m-4" style={{maxWidth:"300px",borderRadius:"10px"}}>
                    <CardImg 
                        className="d-flex justify-content-left"
                        alt="foto calon 1" 
                        src="https://images.bisnis-cdn.com/posts/2019/09/25/1152077/images-58-600x400.jpeg" 
                        top width="100%" 
                        style={{borderRadius:"10px 10px 0px 0px", marginBottom:"-27px"}}/>
                    <span
                        className="p-1"
                        style={{fontSize:"13px",color:"white",backgroundColor:"#3f3d56",maxWidth:"80px",borderRadius:"0px 5px 0px 0px"}}>
                            Calon 1
                    </span>
                    <CardBody>
                        <CardTitle className="mt-4" tag="h5">Shawn Mendes</CardTitle>
                        <CardSubtitle className="mb-3 text-muted" tag="h6">Miniclass UI/UX</CardSubtitle>
                        <CardText>
                            "Wujudkan WRI Bersama-sama"
                        </CardText>
                        <div>
                            <Button 
                                className="mb-1"
                                color="warning" 
                                style={{fontSize:"12px", fontWeight:"bold",padding:"15px 60px", borderRadius:"25px"}}
                                onClick={handleModal}>
                                    Vote
                            </Button>
                        </div>
                        <div>
                            <Button 
                                className="mb-3"
                                style={{color:"black", fontSize:"12px", fontWeight:"bold",padding:"15px 41px", 
                                borderRadius:"25px", borderColor:"#e9e8f6", backgroundColor:"transparent"}}>
                                    Lihat Profil
                            </Button>
                        </div>
                    </CardBody>
                </Card>
                <Card className="m-4" style={{maxWidth:"300px",borderRadius:"10px"}}>
                    <CardImg 
                        alt="foto calon 2" 
                        src="https://www.dailysia.com/wp-content/uploads/2019/10/shawn-mendes__.jpg" 
                        top width="100%" 
                        style={{borderRadius:"10px 10px 0px 0px", marginBottom:"-27px"}}/>
                    <span
                        className="p-1"
                        style={{fontSize:"13px",color:"white",backgroundColor:"#3f3d56",maxWidth:"80px",borderRadius:"0px 5px 0px 0px"}}>
                            Calon 2
                    </span>
                    <CardBody>
                        <CardTitle className="mt-4" tag="h5">Shawn Mendes</CardTitle>
                        <CardSubtitle className="mb-3 text-muted" tag="h6">Miniclass UI/UX</CardSubtitle>
                        <CardText>
                            "Wujudkan WRI Bersama-sama"
                        </CardText>
                        <div>
                            <Button 
                                className="mb-1"
                                color="warning" 
                                style={{fontSize:"12px", fontWeight:"bold",padding:"15px 60px", borderRadius:"25px"}}
                                onClick={handleModal}>
                                    Vote
                            </Button>
                        </div>
                        <div>
                            <Button 
                                className="mb-3"
                                style={{color:"black", fontSize:"12px", fontWeight:"bold",padding:"15px 41px", 
                                borderRadius:"25px", borderColor:"#e9e8f6", backgroundColor:"transparent"}}>
                                    Lihat Profil
                            </Button>
                        </div>
                    </CardBody>
                </Card>
                <Card className="m-4" style={{maxWidth:"300px",borderRadius:"10px"}}>
                    <CardImg 
                        alt="foto calon 3" 
                        src="https://imgx.sonora.id/crop/127x31:1440x916/360x240/photo/2020/10/01/304423769.jpg" 
                        top width="100%" 
                        style={{borderRadius:"10px 10px 0px 0px", marginBottom:"-27px"}}/>
                    <span
                        className="p-1"
                        style={{fontSize:"13px",color:"white",backgroundColor:"#3f3d56",maxWidth:"80px",borderRadius:"0px 5px 0px 0px"}}>
                            Calon 3
                    </span>
                    <CardBody>
                        <CardTitle className="mt-4" tag="h5">Shawn Mendes</CardTitle>
                        <CardSubtitle className="mb-3 text-muted" tag="h6">Miniclass UI/UX</CardSubtitle>
                        <CardText>
                            "Wujudkan WRI Bersama-sama"
                        </CardText>
                        <div>
                            <Button 
                                className="mb-1"
                                color="warning" 
                                style={{fontSize:"12px", fontWeight:"bold",padding:"15px 60px", borderRadius:"25px"}}
                                onClick={handleModal}>
                                    Vote
                            </Button>
                        </div>
                        <div>
                            <Button 
                                className="mb-3"
                                style={{color:"black", fontSize:"12px", fontWeight:"bold",padding:"15px 41px", 
                                borderRadius:"25px", borderColor:"#e9e8f6", backgroundColor:"transparent"}}>
                                    Lihat Profil
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </CardGroup>
            </center>

            <Modal isOpen={modal} size="lg">
                <center>
                <ModalBody style={{color: "#2e2c49"}}>
                    <FontAwesomeIcon 
                        className="mt-5"
                        icon={faExclamationTriangle}
                        style={{minWidth: "65px", minHeight: "65px", color:"#ff6159"}} />
                    <br /><br />
                    <h4>Apakah Kamu yakin?</h4><br />
                    <p className="text-muted mb-5">Kamu hanya bisa memilih satu Caketum. PIN yang sudah digunakan untuk vote tidak bisa digunakan lagi</p>
                </ModalBody>
                </center>
                <ModalFooter style={{backgroundColor:"#e9e8f6"}}>
                    <Button 
                        style={{backgroundColor: "#ffffff", color:"black", fontSize:"12px", fontWeight:"bold",padding:"15px 41px", borderWidth:"0px",borderRadius:"25px"}} 
                        onClick={handleModal}>
                            Kembali
                    </Button>
                    <Button 
                        style={{backgroundColor: "#f7b217", fontSize:"12px", fontWeight:"bold",padding:"15px 40px", borderWidth:"0px",borderRadius:"25px" }} 
                        onClick={handleModal}>
                            Vote Now
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Home
