import React from 'react';
import Navbar from '../pages/Shared/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className='text-center my-10'>
                <h3 className='text-4xl'>The resource you are looking for is </h3>
                <h1 className='text-9xl font-bold'>404</h1>
                <h2 className='text-7xl font-semibold'>Not Found</h2>
            </div>
        </div>
    );
};

export default ErrorPage;