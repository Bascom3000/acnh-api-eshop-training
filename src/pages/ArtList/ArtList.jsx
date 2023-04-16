import React from 'react';
import { useState, useEffect } from 'react';
import {getArt} from '../../services/api-calls'   
import Art from '../../components/Art/Art';


const ArtList = () => {
    const [art, setArt] = useState([])

    useEffect(()=> {
        getArt()
        .then(artData => setArt(artData.slice(0,5)))
    }, [])

    return (
        <>
        <div className='artList-container'>
            <h2>Art Category</h2>
                <div className='art-container'>
                    {art.map(work =>
                    
                        <Art key={work.id} workArt={work}/>
                        
                    
                    )}

                </div>
        </div>
        </>
    );
};

export default ArtList;