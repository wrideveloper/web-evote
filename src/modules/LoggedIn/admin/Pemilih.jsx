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

    const [user, setUser] = useState([]);

    const getUser = async () => {
        try {
          const response = await axios.get('http://evote.ceban-app.com/user');
          setUser(response.data);
          //console.log("halo ini data calon", response.data);
        } catch (error) {
          console.error(error);
        }
      }
    
      React.useEffect(() => {
          getUser()
      }, [user])

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
                        <Input type="text" name="nama" id="nama" /><br />
                    </FormGroup>
                    <Form>
                        <FormGroup>
                            <Label for="Username"><b>Username</b></Label>
                            <Input type="text" name="username" id="username" /><br />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password"><b>Password</b></Label>
                            <Input type="password" name="password" id="password" /><br />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Role"><b>Role</b></Label>
                            <Input value={role} type="select" name="role" id="role" onChange={changeRole}>
                                <option value="role1"></option>
                                <option value="role2"></option>
                                <option value="role3"></option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ backgroundColor: '#f7b217' }} onClick={handleModal}>Batal</Button>
                    <Button style={{ backgroundColor: '#547a95' }} onClick={handleModal}>Tambah</Button>
                </ModalFooter>
            </Modal>

            <Table striped bordered hover>
            <thead>
              <tr style={{textAlign: 'center',cellpadding:'10px'}}>
                <th>Nim</th>
                <th>Nama</th>
                <th>Miniclass</th>
                <th>Action</th>
              </tr>
            </thead>
            {
              user.map((data) => (
              <>
                <tbody>
                <tr>
                  <td>{data.nim}</td>
                  <td>{data.nama}</td>
                  <td>{data.miniclass}</td>
                  <td>
                    <CompIcons/>
                  </td>
                </tr>
              </tbody>
                </>
              ))
            }
          </Table> 
        </div>
    )
}


export default Pemilih
