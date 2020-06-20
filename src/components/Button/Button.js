import React from 'react';

const Button = (props) => (

    <button className={`bg-blue-500 hover:bg-blue-700 my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${props.class}`}
    >
        {props.value}
    </button>
)

export default Button;