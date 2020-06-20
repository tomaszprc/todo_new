import React from 'react';

const ListElement = (props) => (
    <div className="w-1/2 m-0 m-auto bg-yellow-400 border-2 border-white">
        <p className="text-lg font-bold">{props.title}</p>
        <p>{props.description}</p>
    </div>
)

export default ListElement;