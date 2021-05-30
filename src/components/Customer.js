import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Customer = (props) => {
    const { id, name, birthday, gender, job, image } = props.customer;

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} alt="profile" /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
        </TableRow>
    );
};

export default Customer;