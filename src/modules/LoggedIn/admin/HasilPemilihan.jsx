import React from 'react'
import { Table } from 'reactstrap'
import CardHarapan from '../../../components/Card/CardHarapan'

const HasilPemilihan = () => {
    return (
        <div>
        <h1>Daftar Hasil pemilihan</h1>
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
            <CardHarapan
                name='Adelina Indra'
                harapan='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
                saran='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
            />
        </div>
    )
}




export default HasilPemilihan