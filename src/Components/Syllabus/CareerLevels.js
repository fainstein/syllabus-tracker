import React from "react";
import Level from "./Level";


const CareerLevels = (props) => {

return <div>
{props.plan.niveles.map(nivel => (
    <Level nivel={nivel}></Level>

))}
</div>;
}

export default CareerLevels;