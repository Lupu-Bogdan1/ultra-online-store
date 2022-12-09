import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeviceCard from '../device-card/DeviceCard';
import SlickSlider from '../slider/Slider';

import './DeviceCardList.css'

interface DeviceCardListProps {
    devices?: deviceProps[];
}

interface deviceProps {
    id: number;
    name: string;
    price: number;
    monthlyRate: number;
    img: string;
}

function DeviceCardList(props: DeviceCardListProps) {

    const params = useParams();

    const [deviceList, setDeviceList] = useState<deviceProps[]>([]);

    useEffect(() => {
        if (params.brandId && params.typeId) {
            axios.get(`http://localhost:5000/api/device?typeId=${params.typeId}&brandId=${params.brandId}`)
                .then((response: any) => {
                    console.log(response.data);
                    setDeviceList(response.data.rows);

                })
        } else {
            axios.get('http://localhost:5000/api/device')
                .then((response: any) => {
                    console.log(response.data);
                    setDeviceList(response.data.rows);

                })
        }
    }, [])

    // const devices = [
    //     {
    //         id: 1,
    //         name: 'Iphone 14 Pro, 512GB',
    //         price: '35499 MDL',
    //         monthlyRate: '5917 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/114191eb-9ec3-44a0-a322-a69bb7a2e583.webp'
    //     },
    //     {
    //         id: 2,
    //         name: 'Iphone 14, 256GB',
    //         price: '24499 MDL',
    //         monthlyRate: '4084 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/ce0b82cc-e8f9-4e80-8afc-75721a44461e.webp'
    //     },
    //     {
    //         id: 3,
    //         name: 'Toaster',
    //         price: '3200 MDL',
    //         monthlyRate: '484 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/3f6998c2-3436-4fb2-b705-602187b9ac65.webp'
    //     },
    //     {
    //         id: 4,
    //         name: 'ASUS',
    //         price: '37900 MDL',
    //         monthlyRate: '6332 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/0022054b-ec1c-4cb8-b60d-d99274a942c4.webp'
    //     },
    //     {
    //         id: 5,
    //         name: 'Hisesnse',
    //         price: '8099 MDL',
    //         monthlyRate: '1250 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/8dd039fd-8412-41b7-966d-6c0a02740a52.webp'
    //     },
    //     {
    //         id: 6,
    //         name: 'LED Smart Samsung',
    //         price: '39949 MDL',
    //         monthlyRate: '6659 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/de8dab0a-a2a9-4e85-9c22-c59f44c1c39d.webp'
    //     },
    //     {
    //         id: 7,
    //         name: 'Refrigerator Samsung',
    //         price: '30499 MDL',
    //         monthlyRate: '5084 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/527dc584-ff7d-45ca-80c8-657151340d79.webp'
    //     },
    //     {
    //         id: 8,
    //         name: 'Refrigerator Hisense',
    //         price: '15999 MDL',
    //         monthlyRate: '1334 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/090c21ee-dcf0-4168-9657-2b4a5256c4be.webp'
    //     },
    //     {
    //         id: 9,
    //         name: 'Washing machine LG',
    //         price: '12499 MDL',
    //         monthlyRate: '2084 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/d6fabed7-074b-43ed-9469-ecf10d19552c.webp'
    //     },
    //     {
    //         id: 10,
    //         name: 'SONY playstation 5',
    //         price: '18499 MDL',
    //         monthlyRate: '3084 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/35ac5670-6437-49c4-80c6-84362aaeba66.webp'
    //     },
    //     {
    //         id: 11,
    //         name: 'XBOX Series X',
    //         price: '15999 MDL',
    //         monthlyRate: '2667 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/9ae2599e-14d9-43b3-a0c2-552fda7cc807.webp'
    //     },
    //     {
    //         id: 12,
    //         name: 'Conditioner Samsung',
    //         price: '18899 MDL',
    //         monthlyRate: '3150 MDL/month',
    //         img: 'https://cdn-ultra.esempla.com/storage/webp/6fe1d176-87ff-4cad-b6df-4873a74966a8.webp'
    //     }
    // ];

    const renderedDevices = deviceList.map(device =>
        <DeviceCard id={device.id} key={device.id} name={device.name}
            price={device.price}
            monthlyRate={device.monthlyRate}
            img={device.img}
        />
    )
    return (
        <>
              <SlickSlider />

        <div className='center'>
            <div className='list-wrapper'>
                {renderedDevices}
            </div>
        </div>
        </>

    )
}

export default DeviceCardList;