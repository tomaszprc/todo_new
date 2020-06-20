import React from 'react';

const ListDescription = (props) => (
    <div className="mr-5">
        <p className="text-lg font-bold">{props.title}</p>
        <p>{props.description}</p>
    </div>
);

export default ListDescription;