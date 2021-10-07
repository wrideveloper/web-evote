import React from 'react';
import { Button } from 'reactstrap';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompIcons = () =>{
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

export default CompIcons;