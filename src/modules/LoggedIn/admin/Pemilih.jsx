import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Input, Label} from "reactstrap";

const Pemilih = () => {

    const [modal, setModal]=useState(false);
    const [role, setRole] = useState();

    const changeRole = e => {
        let value = e.target.value;
        setRole(value);
    }

    return (
        <div>
            <Button type="button" style={{backgroundColor: '#3F3D56'}} onClick={()=>setModal(true)}>
                Tambah Pemilih</Button>
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
                    <Button style={{ backgroundColor: '#f7b217' }} onClick={()=>setModal(false)}>Batal</Button>
                    <Button style={{ backgroundColor: '#547a95' }} onClick={()=>setModal(false)}>
                        Tambah
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}


export default Pemilih
