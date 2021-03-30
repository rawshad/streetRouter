import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import details from '../../data/data.json';


const Confirmation = () => {
  const { type } = useParams();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(details);
  }, []);
  const selectedData = info.find(information => information.type === type);
  console.log('confirmation', selectedData);
  return (
    <div>
      <h1>Confirmation {selectedData.id}</h1>
      <img src={selectedData.img} alt="" />
    </div>
  );
};

export default Confirmation;