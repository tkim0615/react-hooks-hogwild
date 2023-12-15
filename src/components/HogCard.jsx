import React from "react";

function HogCard({hog}) {

    return(
        <>
        <div className="ui eight wide column">
            <div id='image'>
                <img src={hog.image} alt={hog.name} />
            </div>
            <div>
                <h2>{hog.name}</h2>
                <div> {hog.specialty} </div>
            </div>
            

        </div>
        </>
    )
}

export default HogCard