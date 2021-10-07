import React, {useState} from 'react'
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Input, Label} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const Pemilih = () => {

    const [modal, setModal] = useState(false);
    const [role, setRole] = useState();

    const handleModal = () => setModal(!modal);

    const changeRole = e => {
        let value = e.target.value;
        setRole(value);
    }

    return (
        <div>
            <Button type="button" style={{backgroundColor: '#3F3D56'}} onClick={handleModal}>Tambah Pemilih</Button>
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
                            <Input type="select" name="role" id="role" onChange={changeRole}>
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
            <Table striped style={{width:'96%',marginLeft:'30px', marginTop:'5px', marginRight:'20px',cellpadding:'10', cellspacing:'5', border:'1', borderColor:'lightgray'}}>
            <thead>
              <tr style={{textAlign: 'center',cellpadding:'10px'}}>
                <th style={{width:'19%', fontSize:'18px'}}>Nim</th>
                <th style={{width:'40%', fontSize:'18px'}}>Nama</th>
                <th style={{width:'14%', fontSize:'18px'}}>Kelas</th>
                <th style={{width:'23%', fontSize:'18px'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>
                  <div style={{display: 'flex', flexdirection:'row',justifyContent:'center',padding:'7px'}}>
                    <div style={{margin:'2px'}}>
                      <Button color="primary">
                      <FontAwesomeIcon icon={faEye}/>
                      </Button>
                    </div>
                    <div  style={{margin:'2px'}}>
                      <Button color="danger">
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                    <div style={{margin:'2px'}}>
                      <Button color="warning">
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>
                <div style={{display: 'flex', flexdirection:'row',justifyContent:'center',padding:'7px'}}>
                    <div style={{margin:'2px'}}>
                      <Button color="primary">
                      <FontAwesomeIcon icon={faEye}/>
                      </Button>
                    </div>
                    <div  style={{margin:'2px'}}>
                      <Button color="danger">
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                    <div style={{margin:'2px'}}>
                      <Button color="warning">
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>
                <div style={{display: 'flex', flexdirection:'row',justifyContent:'center',padding:'7px'}}>
                    <div style={{margin:'2px'}}>
                      <Button color="primary">
                      <FontAwesomeIcon icon={faEye}/>
                      </Button>
                    </div>
                    <div  style={{margin:'2px'}}>
                      <Button color="danger">
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                    <div style={{margin:'2px'}}>
                      <Button color="warning">
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    )
}


export default Pemilih
