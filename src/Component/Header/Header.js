import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
           <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/confirmation">Confirmation</Link>
                    </li>
                </ul>
            </nav> 
        </div>
    );
};

export default Header;