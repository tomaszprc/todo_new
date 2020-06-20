import React from 'react';

const Button = (props) => (

    <button 
        onClick={props.click} 
        className={`bg-blue-500 hover:bg-blue-700 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${props.class ? props.class : ''}`}
        id={props.id}
    >
        {props.value}
    </button>
)

export default Button;