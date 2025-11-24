import React from 'react';
import { AirplaneIcon } from './icons';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SectionSeparator: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();

    // The SVG path for the airplane to follow
    const adventurePath = "M 50 20 C 250 20, 200 280, 500 250 S 800 50, 1150 280";

    return (
        <div ref={sectionRef} className="relative h-[30vh] min-h-[250px] lg:h-[40vh] lg:min-h-[350px] w-full my-8 lg:my-16 animate-on-scroll animate-fadeInUp-scroll">
            {/* The airplane that will fly along the path */}
            <div className="absolute inset-0 w-full h-full plane-container">
                 <AirplaneIcon 
                    className="w-8 h-8 text-red-500 plane-to-fly" 
                    style={{ 
                        offsetPath: `path('${adventurePath}')`,
                        offsetDistance: '0%', // Set initial position
                    }}
                 />
            </div>
            {/* The SVG containing the visible path and text */}
            <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 300">
                <title>An animated path showing the way to the next vacation.</title>
                <defs>
                    <mask id="separator-mask">
                        <path
                            d={adventurePath}
                            stroke="white"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            className="path-to-draw"
                        />
                    </mask>
                </defs>

                <path 
                    id="adventure-path-id" // Added ID for textPath
                    d={adventurePath}
                    stroke="#1E40AF" 
                    strokeWidth="2"
                    strokeDasharray="5 10"
                    strokeLinecap="round"
                    className="" /* Removed path-to-draw from here */
                    mask="url(#separator-mask)"
                />
                <text className="reveal-text-on-scroll font-script text-gray-700" style={{ fontSize: '28px', fillOpacity: 0 }} fill="currentColor">
                    <textPath xlinkHref="#adventure-path-id" startOffset="50%" textAnchor="middle">
                        Way to your next vacation
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default SectionSeparator;