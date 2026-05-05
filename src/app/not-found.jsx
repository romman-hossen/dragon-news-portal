import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-200 min-w-full'>
            <div>

            <h1 className='text-3xl text-center mt-20'>404 Page Not Found</h1>
            <Link href='/'>
            <button className='bg-pink-600 btn text-white  rounded mt-5 block mx-auto'>Go Back Home</button>
            </Link>
            </div>
            
        </div>
    );
};

export default NotFound;