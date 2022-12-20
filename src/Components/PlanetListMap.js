import React from "react";
import Planets from './Planets.css'
function PlanetListMap(){
    const pnames=['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
    return(
        <div> 
            {
                pnames.map(name => <table><tr><td>{name}</td></tr></table>)
            }
        </div>
    )
    
}
export default PlanetListMap