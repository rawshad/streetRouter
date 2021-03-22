import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import SelectedCommute from '../SelectedCommute/SelectedCommute';


const Confirmation = () => {
    const {type} = useParams();
    const [info, setInfo] = useContext(UserContext);
    useEffect(() => {
        setInfo(type);
    }, [type]);
    console.log(type, info);
    return (
        <div>
            <SelectedCommute></SelectedCommute>
        </div>
    );
};

export default Confirmation;