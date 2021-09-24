import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "reactstrap"

const Login = () => {
    return (
        <div style={{padding: '20px'}}>
            <Link to="/evote/admin/dashboard">
                <Button color="danger">Login...</Button>
            </Link>
        </div>
    )
}

export default Login
