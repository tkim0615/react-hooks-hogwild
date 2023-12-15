import React from 'react';
import HogCard from './HogCard';

function Tile({hogs}){

   function handleClick(){ 

}
const tileELements = hogs.map(hog =>{
    return( <HogCard key={Math.random()} hog={hog}/>)
})

    return(
        <>
        {tileELements}
        </>
    )
}


export default Tile