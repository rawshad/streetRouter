import React from 'react';
import '../Commuters/Commuters.css'
import { Link, useParams } from 'react-router-dom';

const Commuters = (props) => {
    const { type, img } = props.info;
    return (
        <div className="container">
            <div className="card-container">
                <div className="card">
                    <img src={img} alt={type} />
                    <button><Link to={`/confirmation/${type}`}>{type}</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Commuters;