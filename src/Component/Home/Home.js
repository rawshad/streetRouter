import React, { useEffect, useState } from 'react';
import Commuters from '../Commuters/Commuters';
import details from '../../data/data.json';
import '../Home/Home.css'

const Home = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        setInfo(details);
    }, []);
    console.log(info);
    return (
        <div>
            <h1>This is Home</h1>
            <div className="card-box">
            {
                info.map(info => <Commuters info={info} key={info.id}></Commuters>)
            }
            </div>
        </div>
    );
};

export default Home;