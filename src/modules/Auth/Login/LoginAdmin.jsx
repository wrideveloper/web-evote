import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Card, Container } from 'reactstrap';

const LoginAdmin = () => {
    return (
        <Container className="p" style={{padding: '100px 0px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <Card style={{padding: '20px',maxheight: '50%', minWidth: '50%'}}>
                <h3>Admin Evote</h3>
            <Form>
                <FormGroup style={{marginBottom: '20px'}}>
                    <Label for="exampleEmail" style={{marginBottom: '5px'}}>Username</Label>
                    <Input type="text" name="username" id="username" placeholder="enter username" />
                </FormGroup>
                <FormGroup style={{marginBottom: '20px'}}>
                    <Label for="examplePassword" style={{marginBottom: '5px'}}>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                </FormGroup>
                <hr></hr>
                <Link to="/admin">
                        <Button class= "float-right !important" color="primary">Login</Button>
                </Link>
            </Form>
        </Card>
        </Container>
    )
}

export default LoginAdmin
