import React from 'react';

const SelectedCommute = (props) => {
    const {type, img} = props.info;
    return (
        <div>
            <img src={img} alt={type}/>
            <img src={img} alt={type}/>
            <img src={img} alt={type}/>
        </div>
    );
};

export default SelectedCommute;