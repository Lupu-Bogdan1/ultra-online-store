import React from "react";
import './DeviceCard.css';
import {Routes, Route, useNavigate} from 'react-router-dom';


type DeviceProps = {
    id: number;
     name: string;
     price: number;
     monthlyRate: number;
     img: string;
}


function DeviceCard(props: DeviceProps) {

    const navigate = useNavigate();

const deviceDetails = () => {
    navigate(`/device-details/${props.id}`, {replace: true});
}

    return (
        <div onClick={deviceDetails} className='card'>
            <div className="img-size">
        <img className="device-img" src={require(`../assets/${props.img}`)}/>
        </div>
        <h4>{props.name}</h4>
        <p className="price-place">{props.price}<strong>MDL</strong></p>
        <div className="rate-place">
        <p><strong>{props.monthlyRate}MDL/Month</strong></p>
        </div>
        </div>
    );
};

export default DeviceCard;