import React from 'react';

const FormInput = (props) => (
    <>
         <label className="block text-gray-700 text-sm font-bold mb-2">
            {props.title}
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={props.change}
                type="text" 
                name={props.name}
                value={props.value}
            />
        </label>
    </>
)

export default FormInput;