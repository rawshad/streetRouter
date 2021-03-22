import React, { useEffect, useState } from 'react';
import Commuters from '../Commuters/Commuters';
import details from '../../data/data.json';

const Home = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        setInfo(details);
    }, []);
    console.log(info);
    return (
        <div>
            <h1>This is Home</h1>
            {
                info.map(info => <Commuters info={info} key={info.type}></Commuters>)
            }
        </div>
    );
};

export default Home;