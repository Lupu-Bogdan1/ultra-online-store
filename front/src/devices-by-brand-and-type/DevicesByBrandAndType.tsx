import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import DeviceCardList from '../device-card-list/DeviceCardList';
import DeviceCard from '../device-card/DeviceCard';


function DevicesByBrandAndType() {

    interface deviceProps {
        id: number;
        name: string;
        price: number;
        monthlyRate: number;
        img: string;
    }

    const [deviceList, setDeviceList] = useState<deviceProps[]>([]);

    const params = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/device?typeId=${params.typeId}&brandId=${params.brandId}`)
        .then((response: any) => 
        {
            setDeviceList(response.data.rows);
            console.log(response.data.rows);
        })
      }, [])

      

    //   const renderedDevices = brand.map(device => 
    //     <DeviceCard id={device.id} key={device.id} name={device.name}
    //     price={device.price}
    //     monthlyRate={device.monthlyRate}
    //     img={device.img}
    //     />)


    return(
        <div>
            <DeviceCardList devices={deviceList}/>
        </div>
    )
}


export default DevicesByBrandAndType;

