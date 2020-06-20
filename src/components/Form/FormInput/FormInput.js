import React from 'react';

const FormInput = ({title, change, name, value}) => (
    <>
         <label className="block text-gray-700 text-sm font-bold mb-2">
            {title}
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={change}
                type="text" 
                name={name}
                value={value}
            />
        </label>
    </>
)

export default FormInput;