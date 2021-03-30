import React from 'react';


const SelectedCommute = (props) => {
    const {img, price, type} = props.info;
    return (
        <div>
            <h1>price: {price}</h1>
            <img src={img} alt={type}/>
        </div>
    );
};

export default SelectedCommute;