import React from 'react'
import { Link } from 'react-router-dom'
import {Button,Form,FormGroup,Label,Input, Card, Container} from 'reactstrap';

const Login = () => {
    return (
        <Container style={{padding: '100px 0px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <Card style={{padding: '20px',maxheight: '50%', minWidth: '50%'}}>
                <h3>E-Vote WRI</h3>
            <Form>
                <FormGroup style={{marginBottom: '20px'}}>
                        <Label for="exampleEmail" style={{marginBottom: '5px'}}>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com" />
                </FormGroup>
                    <FormGroup style={{marginBottom: '20px'}}>
                        <Label for="examplePassword" style={{marginBottom: '5px'}}>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                    </FormGroup>
                <hr></hr>
                <Link to="/evote/admin/dashboard">
                        <Button class= "float-right !important" color="primary">Login</Button>
                </Link>
            </Form>
        </Card>
        </Container>
    )
}

export default Login
