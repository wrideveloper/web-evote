import React from 'react'
import { Table } from 'reactstrap';

const HasilPemilihan = (props) => {
return (
    <div><h1>Daftar Hasil pemilihan</h1>
    
    <Table striped>
    <thead>
        <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Kelas</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td></td>
        <td></td>
        <td></td>
        </tr>
    </tbody>
    </Table>
    </div>
);
}

export default HasilPemilihan;
