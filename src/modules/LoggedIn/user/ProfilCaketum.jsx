import React from 'react'
import {Button} from "reactstrap";

const ProfilCaketum = (props) => {
    return (
        <div>
        {/* profile caketum */}
        <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif' }}>
                <h4
                    style={{ display: 'block', padding: '10px', fontSize: '48px', borderBottom: '14px solid #F7B217', fontWeight: '400', marginBottom: '35px', marginTop: '66px' }}>
                    Profil Caketum
                </h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', width: '97%' }}>
                <div style={{ border: '2px solid #C4C4C4', borderRadius: '10px', margin: '30px', minHeight: '565px' }}>
                    <img src={props.image} alt=""
                        style={{ width: '331px', height: '250px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                    <div style={{ padding: '10px', width: '60%', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'sans-serif' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#3F3D56' }}>{props.name}</h3>
                            <p style={{ margin: '0', fontSize: '16px', color: '#7B7899' }}>{props.nomorcalon}</p>
                        </div>
                        <div>
                            <p style={{ marginBottom: '5px' }}>Kelas {props.kelas}</p>
                            <p style={{ margin: '0' }}>Miniclass {props.miniclass}</p>
                        </div>
                    </div>
                </div>
                <div
                    style={{ border: '2px solid #D5D2EE', borderRadius: '10px', margin: '30px', maxHeight: '565px', padding: '20px', fontFamily: 'sans-serif', minWidth: '938px' }}>
                    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
                        <div
                            style={{ display: 'inline-block', border: '2px solid black',verticalAlign:'middle', width: '20px', height: '20px', borderRadius: '50%', marginRight: '10px', backgroundColor: '#5CE1FF', fontSize: '16px' }}>
                        </div>
                        Tentang Saya
                    </div>
                    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', marginTop: '50px' }}>
                        <h4 style={{ color: '#7B7899', fontSize: '16px' }}>Visi</h4>
                        <p style={{ lineHeight: '24px', fontSize: '16px' }}>{props.visi}</p>
                    </div>
                    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h4 style={{ color: '#7B7899', fontSize: '16px' }}>Misi</h4>
                        <ol style={{ lineHeight: '24px', fontSize: '16px' }}>
                            {props.misi}
                        </ol>
                    </div>
                </div>
            </div>
            {/* profile caketum end*/}
        {/* Video Orasi */}
        <div style={{border:'2px solid #D5D2EE', borderRadius:'10px', padding:'40px 55px', margin:'25px 10px 50px 10px', fontFamily: 'sans-serif'}}>
                <div 
                    style={{display: 'inline-block', verticalAlign:'middle', border: '2px solid black', width: '20px', height: '20px', borderRadius: '50%',marginLeft: '20px', marginRight:'10px', backgroundColor: '#5CE1FF'}}>   
                </div>
            Video Orasi
            {/* <h1>Tempat Halaman home page</h1> */}
            <div style={{display:'flex', justifyContent:'center', marginLeft:'20px',marginRight:'20px', marginTop:'30px', marginBottom:'10%'}}>
                <iframe width="1280" height="662" src="https://www.youtube.com/embed/slV8Hr3HJUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen'></iframe>
            </div>
        </div>
        {/* Video Orasi End */}
        
            {/* button */}
            <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '122px' }}>
                <Button style={{ padding: '20px 80px', borderRadius: '50px', marginRight: '57px', border: '2px solid #E9E8F6', backgroundColor: 'white', color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Kembali</Button>
                <Button style={{ padding: '20px 80px', borderRadius: '50px', marginRight: '10px', backgroundColor: '#F7B217', fontSize: '14px', fontWeight: 'bold', border: 'none' }}>Vote</Button>
            </div>
            {/* button end */}  
        </div>
    )
}

export default ProfilCaketum
