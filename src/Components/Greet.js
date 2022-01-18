import React from "react";

// arrow
const Greet = (props) => {
    const {name, heroName} = props
    return (
    <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
        {props.children}
    </div>
    );
}

// using default will allow us to import this component with any name
export default Greet