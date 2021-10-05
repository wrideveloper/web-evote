import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Table, Button } from 'reactstrap';

const Pemilih = () => {
    return (
        <div>
            <Button color="secondary" style={{marginLeft:'30px'}}>
            Tambah Pemilih
            </Button>
            <br /><br />
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
