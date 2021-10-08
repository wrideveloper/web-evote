import react from 'react';
import { Col } from 'reactstrap';

const DeskripsiHasilPemilihan = (props) => {
    return(
        <Col className="contents" sm="5">
            <h1 className="total-suara">{props.jumlah}</h1>
            <div className="deskripsi">
                <p>Total - Suara</p>
                <p className="calon">{props.calon}</p>
            </div>
        </Col>
    )       
}

export default DeskripsiHasilPemilihan;