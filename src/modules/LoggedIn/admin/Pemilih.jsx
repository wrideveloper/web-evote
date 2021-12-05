import React, { useState, useEffect } from 'react'
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";
import CompIcons from '../../../components/CompIcons';
import axios from 'axios';

const Pemilih = () => {

  const [modal, setModal] = useState(false);
  const [pemilih, setPemilih] = useState([])
  const [role, setRole] = useState("");

  const handleModal = () => setModal(!modal);

  const [inputNamaPemilih, setNamaPemilih] = useState("")
  const [inputMiniclass, setMiniclass] = useState("")
  const [inputNim, setNim] = useState("")
  const [inputPassword, setPassword] = useState("")

  async function postPemilih() {
    try {
      await axios.post('https://evote.ceban-app.com/user', {
        nama: inputNamaPemilih,
        miniclass: inputMiniclass,
        nim: inputNim,
        password: inputPassword,
        role: role
      });
      alert('Data Berhasil Ditambahkan');
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function getPemilih() {
      try {
        const response = await axios.get('https://evote.ceban-app.com/user');
        setPemilih(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPemilih()
  }, [])

  const handleInputNamaPemilih = (event) => {
    setNamaPemilih(event.target.value);
    // console.log(inputNamaPemilih)
  }

  const handleInputMiniclass = (event) => {
    setMiniclass(event.target.value);
    // console.log(inputMiniclass)
  }

  const handleInputNim = (event) => {
    setNim(event.target.value);
    // console.log(inputNim)
  }

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
    // console.log(inputPassword)
  }

  const handleInputRole = (event) => {
    setRole(event.target.value);
    // console.log(role)
  }

  return (
    <div>
      <Button type="button" className="mb-3" style={{ backgroundColor: '#3F3D56' }} onClick={handleModal}>Tambah Pemilih</Button>
      <Modal isOpen={modal} size="lg" style={{ maxWidth: '400px' }}>
        <ModalHeader style={{ color: '#547a95' }}>
          <b>Tambah Pemilih</b>
        </ModalHeader>
        <ModalBody style={{ color: '#547a95' }}>
          <FormGroup>
            <Label for="Nama"><b>Nama</b></Label>
            <Input onChange={(event) => handleInputNamaPemilih(event)} type="text" name="nama" id="nama" /><br />
          </FormGroup>
          <FormGroup>
            <Label for="Miniclass"><b>Miniclass</b></Label>
            <Input onChange={(event) => handleInputMiniclass(event)} type="text" name="miniclass" id="miniclass" /><br />
          </FormGroup>
          <FormGroup>
            <Label for="Nim"><b>Nim</b></Label>
            <Input onChange={(event) => handleInputNim(event)} type="text" name="nim" id="nim" /><br />
          </FormGroup>
          <Form>
            <FormGroup>
              <Label for="Password"><b>Password</b></Label>
              <Input onChange={(event) => handleInputPassword(event)} type="password" name="password" id="password" /><br />
            </FormGroup>
            <FormGroup>
              <Label for="Role"><b>Role</b></Label>
              <Input value={role} type="select" name="role" id="role" onChange={(event) => handleInputRole(event)}>
                <option value="" disabled> -- Pilih Role -- </option>
                <option value="admin">Admin</option>
                <option value="pemilih">Pemilih</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button style={{ backgroundColor: '#f7b217' }} onClick={handleModal}>Batal</Button>
          <Button style={{ backgroundColor: '#547a95' }} onClick={() => { handleModal(); postPemilih(); }}>Tambah</Button>
        </ModalFooter>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: 'center', cellpadding: '10px' }}>
            <th>Nim</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          pemilih.map((listPemilih, i) => (
            <tbody key={i}>
              <tr>
                <td>{listPemilih.nim}</td>
                <td>{listPemilih.nama}</td>
                <td>{listPemilih.miniclass}</td>
                <td>
                  <CompIcons />
                </td>
              </tr>
            </tbody>
          ))
        }
      </Table>
    </div>
  )
}


export default Pemilih
