import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeviceCard from '../device-card/DeviceCard';
import './DeviceDetails.css'

type DeviceDetailsProps = {
    id: number;
    name: string;
    price: number;
    monthlyRate: number;
    img: string;
}

function DeviceDetails() {

    const [details, setDetails] = useState<DeviceDetailsProps>();
    
    const params = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/device/${params.id}`)
        .then((response: any) => setDetails(response.data))
      }, []);

      
    return(
        <div>
            <h1>{details?.name}</h1>
           <div className='details-img'>
            {details ? <img className='details-imgn' src={require(`../assets/${details.img}`)} />: null}  {/* operator ternar */}
            </div>
            <div className='device-price'>
            <h3>{details?.price}MDL <br />
            {details?.monthlyRate}MDL/Month</h3>
            </div>
        </div>
    )
}

export default DeviceDetails;