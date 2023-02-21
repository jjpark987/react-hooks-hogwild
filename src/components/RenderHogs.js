import React, { useState } from "react";

function RenderHogs({ hog }) {
    const [hogDetails, setHogDetails] = useState(false);
    function handleDetails() {
        setHogDetails(!hogDetails);
    }
    return (
        <div className="ui grid container" onClick={handleDetails}>
            <h1 className="ui eight wide column">{hog.name}</h1>
            <img 
                className="ui eight wide column"
                src={hog.image}
            />
            {hogDetails === false ? "" : 
                <div className="ui eight wide column">
                    <p>{"Specialty: " + hog.specialty}</p>
                    <p>{"Weight: " + hog.weight}</p>
                    <p>{"Greased: " + (hog.greased ? "Yes" : "No")}</p>
                    <p>{"Highest medal achieved: " + hog["highest medal achieved"]}</p>
                </div>
            }
        </div>
    )
}

export default RenderHogs;