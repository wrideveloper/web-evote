import React from 'react';
import { Button, Table } from 'reactstrap';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calon = () => {

    const Action = () =>{
        return(
            <div className="contents" style={{textAlign: 'center', padding: '10px 0px'}}>
                <Button color="primary" size="sm" style={{marginRight: '7px'}}>
                    <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button color="danger" size="sm" variant="danger" style={{marginRight: '7px'}}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button color="warning" size="sm">
                    <FontAwesomeIcon icon={faEdit} />
                </Button>       
            </div>
        )
    }

    return (
        <div className="container">
            <div className="tambahCalon">
                <Button style={{marginBottom: '25px', width: '200px', backgroundColor: '#3F3D56', color: 'white', padding: '15px 15px', borderRadius: '10px', fontStyle: 'Bold'}}>
                    Tambah Calon
                </Button>
            </div>
            <div className="Table-Calon">
            <Table striped bordered hover>
                <thead >
                    <tr style={{textAlign: 'center', padding: '800px'}}>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Foto</th>
                    <th colSpan="3" id="label-action" style={{textAlign: 'center'}}>Action</th>
                    </tr>
                </thead>
                <tbody style={{height: '85px'}}>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><Action name="test"/></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                        <Action />
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Calon;
