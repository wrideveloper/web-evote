import React from 'react';
import { Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = () =>{
    return(
        <div className="contents">
            <Button color="transparent">
                <SocialIcon style={{minWidth: '65px', minHeight: '65px'}} bgColor="#838392" url="https://www.instagram.com/wri_polinema/" />
            </Button>
            <Button color="transparent">
                <SocialIcon style={{minWidth: '65px', minHeight: '65px'}} bgColor="#838392" url="https://id-id.facebook.com/groups/wripolinema/" />
            </Button>
            <Button color="transparent">
                <SocialIcon style={{minWidth: '65px', minHeight: '65px'}} bgColor="#838392" url="https://medium.com/wripolinema" />
            </Button>
        </div>
    )
}

export default SocialIcons;