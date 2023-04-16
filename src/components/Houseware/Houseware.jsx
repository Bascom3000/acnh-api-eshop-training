import React from 'react';

const Houseware = (props) => {
    return (
        <>
            
                <div className='houseware'>
                    <p className='tagObject'>#{props.houseware.tag}</p>
                    <img src={props.houseware.image_uri} alt='houseware'></img>
                    <h2>{props.houseware.name['name-EUfr']}</h2>
                    <p>Price: {props.houseware['sell-price']}🔔</p>
                    <button className='btnAddToCart'>Add to Cart</button>
                </div>
        </>
        
    );
};

export default Houseware;