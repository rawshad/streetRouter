import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Nav className="justify-content-end navigation" activeKey="/home">
                <Nav.Item>
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/destination">Destination</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link className="btn-book" to="/confirmation">Confirmation</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
                </Nav.Item>
            </Nav>  
        </div>
    );
};

export default Header;