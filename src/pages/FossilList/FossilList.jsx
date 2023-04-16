import React, { useState, useEffect } from 'react';
import Fossil from '../../components/Fossil/Fossil';
import {getFossils} from '../../services/api-calls';


const FossilList = (props) => {

    const [fossils, setFossils] = useState([])

    useEffect(()=> {
    getFossils()
    .then(fossilData => setFossils(fossilData.slice(0, 5)))
}, [])

    return (<>
       
        <div className='fossilList-container'>
            <h2>Fossil Category</h2>
            <div className='fossil-container'>
            {fossils.map(fossil =>
                <Fossil key={fossil['file-name']} fossil={fossil}/>
            )}
            </div>
            
        </div>
    </>
    );
};

export default FossilList;