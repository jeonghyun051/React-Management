import React from 'react';

const Customer = (props) => {
    const { id, name, birthday, gender, job, image } = props.customer;

    return (
        <div>
            <h2>{name}</h2>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
            <div>
                <img src={image} alt="profile" />
            </div>
        </div>
    );
};

export default Customer;