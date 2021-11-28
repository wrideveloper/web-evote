import React, {useState} from 'react'
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Input, Label} from "reactstrap";
import CompIcons from '../../../components/CompIcons';
import axios from 'axios';

const Pemilih = () => {

    const [modal, setModal] = useState(false);
    const [role, setRole] = useState();

    const handleModal = () => setModal(!modal);

    const changeRole = e => {
        let value = e.target.value;
        setRole(value);
    }

    const [inputNamaPemilih, setNamaPemilih] = useState("")
    const [inputMiniclass, setMiniclass] = useState("")
    const [inputNim, setNim] = useState("")
    const [inputPassword, setPassword] = useState("")
    const [inputRolee, setRolee] = useState("")

    async function postPemilih() {
        try {
            const response = await axios.post('https://evote.ceban-app.com/user', {
                nama: inputNamaPemilih,
                miniclass: inputMiniclass,
                nim: inputNim,
                password: inputPassword,
                role: inputRolee
            });
            alert('Data Berhasil Ditambahkan');
            console.log(response);
        }catch (error){
            console.error(error);
        }
    }

    const handleInputNamaPemilih = (event) => {
        setNamaPemilih(event.target.value);
        console.log(inputNamaPemilih)
    }

    const handleInputMiniclass = (event) => {
        setMiniclass(event.target.value);
        console.log(inputMiniclass)
    }

    const handleInputNim = (event) => {
        setNim(event.target.value);
        console.log(inputNim)
    }

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
        console.log(inputPassword)
    }

    const handleInputRole = (event) => {
        setRolee(event.target.value);
        console.log(inputRolee)
    }

    return (
        <div>
            <Button type="button" className="mb-3" style={{backgroundColor: '#3F3D56'}} onClick={handleModal}>Tambah Pemilih</Button>
            <Modal isOpen={modal} size="lg" style={{maxWidth: '400px'}}>
                <ModalHeader style={{color: '#547a95'}}>
                    <b>Tambah Pemilih</b>
                </ModalHeader>
                <ModalBody style={{color: '#547a95'}}>
                    <FormGroup>
                        <Label for="Nama"><b>Nama</b></Label>
                        <Input onChange={(event) => handleInputNamaPemilih(event)} type="text" name="nama" id="nama" /><br />
                    </FormGroup>
                    <Form>
                        <FormGroup>
                            <Label for="Username"><b>Username</b></Label>
                            <Input onChange={(event) => handleInputMiniclass(event)} type="text" name="username" id="username" /><br />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password"><b>Password</b></Label>
                            <Input onChange={(event) => handleInputPassword(event)} type="password" name="password" id="password" /><br />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Role"><b>Role</b></Label>
                            <Input value={role} type="select" name="role" id="role" onChange={changeRole, handleInputRole}>
                                <option value="role1">Admin</option>
                                <option value="role2" selected>Pemilih</option>
                                <option value="role3"></option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ backgroundColor: '#f7b217' }} onClick={handleModal}>Batal</Button>
                    <Button style={{ backgroundColor: '#547a95' }} onClick={postPemilih}>Tambah</Button>
                </ModalFooter>
            </Modal>
            <Table striped bordered hover>
            <thead>
              <tr style={{textAlign: 'center',cellpadding:'10px'}}>
                <th>Nim</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>
                  <CompIcons />
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>
                  <CompIcons />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    )
}


export default Pemilih
