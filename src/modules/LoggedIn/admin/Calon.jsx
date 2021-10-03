import React from 'react';
import { Table, Button } from 'reactstrap';
import CompIcons from '../../../components/CompIcons';

const Calon = () => {

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
                    <td><CompIcons name="test"/></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                        <CompIcons />
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Calon;
