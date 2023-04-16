import React from 'react';


const Art = ({workArt}) => {

    

    return (
        <div>

            <div className='art'>
                <img src={workArt.image_uri} alt='artwork'></img>
                <h3>{workArt.name['name-EUfr']}</h3>
                <p className='museumDesc'>{workArt['museum-desc']}</p>
                <p> Price: {workArt['sell-price']}🔔</p>
                <button className='btnAddToCart'>Add to Cart</button>
            </div>

        </div>
    );
};

export default Art;