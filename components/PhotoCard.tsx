import React from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
    photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
    // A single regex to find the rotation value, positive or negative.
    const rotationMatch = photo.className.match(/(?:-)?rotate-\[?(-?\d+\.?\d*)deg\]?/);
    const endRotateDeg = rotationMatch ? parseFloat(rotationMatch[1]) : 0;
    
    // Start rotation will be the end rotation minus some value to give it a swing.
    const startRotateDeg = endRotateDeg - 15;

    return (
        <div 
            className={`absolute bg-white p-2 pb-6 shadow-xl animate-dropIn ${photo.className}`}
            style={{ 
              animationDelay: photo.animationDelay,
              '--end-rotate': `${endRotateDeg}deg`,
              '--start-rotate': `${startRotateDeg}deg`
            } as React.CSSProperties}
            >
            <img src={photo.src} alt={photo.alt} className="w-full h-auto" />
            <div className="mt-2 text-center px-1">
                <h3 className="font-bold text-sm text-gray-800">{photo.location}</h3>
                <p className="text-xs text-gray-500 truncate">{photo.description}</p>
            </div>
        </div>
    );
};

export default PhotoCard;