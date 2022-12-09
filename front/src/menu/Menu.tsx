import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Menu.css';
import DevicesByBrand from '../devices-by-brand-and-type/DevicesByBrandAndType';

const Menu = () => {

    const [shownCategory, setShownCategory] = useState(0)

    const [categories, setCategories] = useState([
        {
            name: 'Smartphones',
            categories: [
                {
                    id: 4,
                    name: 'Smartphones',
                    brands: [
                        {
                            id: 1,
                            name: 'Apple'
                       },
                        {
                            id: 2,
                            name: 'Samsung'
                        }],
                },

            ]
        },
        {
            name: 'TV',
            categories: [
                {
                    id: 5,
                    name: 'TV',
                    brands: [
                        {
                            id: 2,
                            name: 'Samsung'
                        }, {
                            id: 3,
                            name: 'Hisense'
                        }],
                }
            ]
        },
        {
            name: 'Refrigerators',
            categories: [
                {
                    id: 6,
                    name: 'Refrigerators',
                    brands: [
                        {
                            id: 2,
                            name: 'Samsung'
                        }, {
                            id: 3,
                            name: 'Hisense'
                        }],
                }
            ]
        }
    ]);
    return (
        <div className='menuContainer'>
            <div>
                {
                    categories.map((category, index) => <p onMouseEnter={() => setShownCategory(index)}>{category.name}</p>)
                }

            </div>
            <div className='categoryInner'>
                {
                    categories[shownCategory].categories.map((category) => {
                        return (<div onClick={DevicesByBrand} className='subCategory'><p><strong>{category.name}</strong></p>
                            {category.brands.map((brand) => <p className='subCategoryStyle'>
                                <Link
                                    to={`/devices/${category.id}/${brand.id}`}
                                >{brand.name}</Link>

                            </p>)}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default Menu;