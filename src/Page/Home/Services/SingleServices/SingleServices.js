import React from 'react';
import Card from 'react-bootstrap/Card';

const SingleServices = ({ service }) => {
    const { title, description, icon } = service;
    return (
        <Card className='flex justify-content-center align-items-center p-3 border-0 shadow services'>
            <Card.Img variant="top" className='w-25 ' src={icon} />
            <Card.Body className='text-center'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleServices;