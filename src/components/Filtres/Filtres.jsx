import React from 'react';

const Filtres = () => {
    return (
    <div className='filterContainer'>
        <h3>Filtres: </h3>
            <div className='filters'>
                <button className='linkBtn'><a href='/fossils' >Fossils</a></button>
                <button className='linkBtn'><a href='/houseware'>Houseware</a></button>
                <button className='linkBtn'><a href='/art'>Art</a></button>
            </div>

    </div>
    );
};

export default Filtres;