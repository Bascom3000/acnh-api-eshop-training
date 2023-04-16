import React from 'react';
import { useState, useEffect } from 'react';
import {getHouseware} from '../../services/api-calls'   
import Houseware from '../../components/Houseware/Houseware';


const HousewareList = (props) => {

    const [housewares, setHousewares] = useState([])

    useEffect(()=> {
        getHouseware()
        .then(housewaresData => setHousewares(housewaresData.slice(0,5)))
    }, [])

    return (
        <div className='housewareList-container'>
            <h2>Housewares Category</h2>
                <div className='houseware-container'>
                    {housewares.map(houseware =>
                        <Houseware key={houseware[0].name['name-EUfr']} houseware={houseware[0]}/>
                    )}

                </div>
        </div>
    );
};

export default HousewareList;