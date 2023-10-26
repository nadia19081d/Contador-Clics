import React from "react";
import '../hojas-estilo/contador.css'


function Contador ({numClic}) {
    return (

        <div className="contador">
               {numClic}
        </div>
    )
}
export  default Contador;