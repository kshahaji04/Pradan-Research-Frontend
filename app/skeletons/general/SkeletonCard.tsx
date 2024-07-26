import React from 'react';

const SkeletonCard: React.FC<{
    Component: React.ComponentType;
    limit?: number; 
}> = ({ Component, limit = 2 }) => {
    return (
        <div className='d-flex gap-4'>
            {Array.from({ length: limit }).map((_, index) => (
                <Component key={index} />
            ))}
        </div>
    );
}

export default SkeletonCard;
