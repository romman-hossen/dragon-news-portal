import React from 'react';

const NewsBar = ({news}) => {
    return (
        <div className='p-5 border mb-5'>
            <h2>{news.title}</h2>
            
        </div>
    );
};

export default NewsBar;