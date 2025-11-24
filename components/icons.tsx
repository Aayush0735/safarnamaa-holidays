import React from 'react';

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3.75c-2.485 0-4.5 4.03-4.5 9s2.015 9 4.5 9 4.5-4.03 4.5-9-2.015-9-4.5-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.28-.662 1.6 0l1.983 4.093a1 1 0 00.753.548l4.52.657c.725.105 1.015.988.49 1.488l-3.27 3.187a1 1 0 00-.288.885l.772 4.502c.124.722-.63.127-1.283.935l-4.042-2.125a1 1 0 00-.935 0l-4.042 2.125c-.653.343-1.407-.213-1.283-.935l.772-4.502a1 1 0 00-.288-.885l-3.27-3.187c-.525-.5-.235-1.383.49-1.488l4.52-.657a1 1 0 00.753.548L9.267 2.884z" clipRule="evenodd" />
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const CartIconSide = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.44a1.125 1.125 0 00-1.087-1.462H5.25l-.337-1.18a1.125 1.125 0 00-1.087-.835H2.25z" />
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const LinesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const AirplaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const PaperPlaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const BridgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 100 C 150 100, 200 20, 300 60 S 450 120, 600 60 S 750 0, 900 60 S 1050 100, 1200 100" stroke="currentColor" strokeWidth="2" fill="transparent" />
        <path d="M50 100 V 50" stroke="currentColor" strokeWidth="2"/>
        <path d="M150 100 V 40" stroke="currentColor" strokeWidth="2"/>
        <path d="M250 100 V 45" stroke="currentColor" strokeWidth="2"/>
        <path d="M350 100 V 70" stroke="currentColor" strokeWidth="2"/>
        <path d="M450 100 V 90" stroke="currentColor" strokeWidth="2"/>
        <path d="M550 100 V 70" stroke="currentColor" strokeWidth="2"/>
        <path d="M650 100 V 45" stroke="currentColor" strokeWidth="2"/>
        <path d="M750 100 V 25" stroke="currentColor" strokeWidth="2"/>
        <path d="M850 100 V 45" stroke="currentColor" strokeWidth="2"/>
        <path d="M950 100 V 70" stroke="currentColor" strokeWidth="2"/>
        <path d="M1050 100 V 90" stroke="currentColor" strokeWidth="2"/>
        <path d="M1150 100 V 100" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

// FIX: Updated component to accept all SVG props to allow for `style` and other attributes.
export const PinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.615-.454L16 14.55V9.87a8 8 0 10-12 0v4.68l4.068 4.068c.215.183.43.354.615.454.094.05.186.1.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
);

export const BeachIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M32 12 C 20 12 16 24 16 32 S 20 52 32 52 S 48 52 48 40 C 48 28 44 12 32 12 Z" />
        <path d="M32 52 L 32 60" />
        <path d="M12 24 L 52 48" />
        <path d="M52 24 L 12 48" />
        <path d="M22 18 L 42 18" />
        <path d="M 8 60 C 16 52, 48 52, 56 60" />
    </svg>
);

export const AdventureIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M8 56 L 24 24 L 32 40 L 44 16 L 56 56 Z" />
        <circle cx="44" cy="12" r="4" fill="currentColor"/>
    </svg>
);

export const FoodIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M12 32 C 12 20 20 12 32 12 C 44 12 52 20 52 32 C 52 44 44 52 32 52 C 20 52 12 44 12 32 Z" />
        <path d="M18 36 C 24 44, 40 44, 46 36" />
        <path d="M24 28 A 4 4 0 0 1 28 24" />
        <path d="M40 28 A 4 4 0 0 0 36 24" />
        <path d="M8 32 L 4 36" />
        <path d="M56 32 L 60 36" />
    </svg>
);

export const HeritageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M12 56 L 52 56" />
        <path d="M16 56 L 16 24 L 32 8 L 48 24 L 48 56" />
        <path d="M24 56 L 24 32" />
        <path d="M40 56 L 40 32" />
        <path d="M20 20 L 44 20" />
    </svg>
);

export const SpiritualIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M32 12 C 44 12 52 20 52 32 S 44 52 32 52 12 44 12 32 20 12 32 12 Z" />
        <path d="M32 20 V 44" />
        <path d="M20 32 H 44" />
        <path d="M24 24 L 40 40" />
        <path d="M40 24 L 24 40" />
    </svg>
);

export const BudgetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <rect x="8" y="16" width="48" height="32" rx="4" />
        <path d="M16 24 L 16 40" />
        <path d="M48 24 L 48 40" />
        <path d="M28 28 H 36" />
        <path d="M24 32 S 28 36, 32 32 S 36 28, 40 32" />
    </svg>
);

export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

export const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.353 2.82 8.058 6.726 9.43.033-.243.05-.62.15-1.025.12-.47.76-3.22.76-3.22s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .81.41.81.9s-.33 1.55-.5 2.42c-.15.7.35 1.28.98 1.28 1.18 0 2.08-1.44 2.08-3.53 0-1.63-1.09-2.82-2.54-2.82-1.84 0-2.91 1.38-2.91 2.72 0 .54.19.98.44 1.28.08.09.09.18.06.31l-.2.82c-.03.14-.14.18-.28.1-.88-.26-1.44-.95-1.44-1.9 0-1.44 1.15-2.83 3.19-2.83 2.29 0 3.86 1.63 3.86 3.32 0 2.24-1.28 4.02-3.07 4.02-.62 0-1.2-.32-1.4-.69 0 0-.32 1.27-.39 1.54-.15.54-.57 1.18-.84 1.59C9.8 21.78 10.88 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
);

export const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const RssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.18 15.64a2.18 2.18 0 11-4.36 0 2.18 2.18 0 014.36 0zM4 4.44v2.83c5.5 0 10 4.44 10 9.94h2.83C16.83 10.15 11.08 4.44 4 4.44zm0 5.66v2.83c2.75 0 5 2.22 5 4.95h2.83c0-4.3-3.48-7.78-7.83-7.78z"/>
  </svg>
);

export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.05 20.21c-1.5 0-2.97-.39-4.27-1.13l-.3-.17-3.17.83.85-3.09-.19-.31c-.81-1.3-1.24-2.8-1.24-4.32 0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.52-6.14c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81 1-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.88.85-.88 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.62.7 1.95.56 2.65.52.77-.04 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.25-.18-.5-.3z"/>
    </svg>
);

export const IndiaMapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 550" fill="currentColor" stroke="none" {...props}>
        <path d="M375.3,439.2c-5.9,1.2-11.8,2.4-17.6,3.4c-28.7,4.8-57.5,9.7-86.2,14.4c-26.6,4.3-53.2,8.4-79.8,12.3 c-28.5,4.1-57.1,7.3-85.7,9.3c-1.3,0.1-2.5,0.1-3.8,0.2c-1.4-0.1-2.7-0.1-4.1-0.2c-2.3-0.2-4.6-0.4-6.9-0.6 c-15.1-1.6-30.2-3.8-45.2-6.5c-7.5-1.3-15-2.9-22.4-4.6c-4.9-1.2-9.8-2.4-14.6-3.8c-12-3.5-23.7-7.8-35.1-12.8 c-1-0.4-2-0.9-3-1.3c-1.4,1.4-2.7,2.7-4.1,4.1c-1.1,1.1-2.2,2.2-3.3,3.3c-1,1-2,2-3,3c-4.4,4.4-8.8,8.8-13.1,13.2 c-1.3,1.3-2.6,2.6-3.9,3.9c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.2,0.2c0.2,0.6,0.3,1.2,0.5,1.8 c1,2.8,2,5.5,3.3,8.2c1.3,2.7,2.8,5.3,4.4,7.8c1.7,2.5,3.4,5,5.4,7.3c1,1.1,2,2.3,3,3.4c2.1,2.3,4.3,4.5,6.6,6.6 c3,2.7,6.1,5.2,9.3,7.5c1.4,1,2.8,2,4.2,2.9c3.1,2.1,6.2,4,9.5,5.7c3.2,1.7,6.5,3.2,9.8,4.5c1.1,0.4,2.2,0.8,3.3,1.2 c2.1,0.7,4.2,1.4,6.3,2c2.1,0.6,4.2,1.2,6.3,1.7c2.1,0.5,4.3,1,6.4,1.4c4.3,0.8,8.6,1.6,12.9,2.2c2.1,0.3,4.3,0.6,6.4,0.8 c2.1,0.2,4.3,0.4,6.4,0.6c1,0.1,2.1,0.2,3.1,0.2c-0.1,0.1-0.2,0.2-0.3,0.4c-0.8,0.9-1.6,1.9-2.4,2.8c-1.8,2.1-3.6,4.2-5.4,6.3 c-0.9,1.1-1.8,2.2-2.7,3.3c-0.9,1.1-1.8,2.1-2.7,3.2c-0.9,1.1-1.8,2.2-2.7,3.2c-0.9,1.1-1.8,2.2-2.6,3.2 c-2,2.4-3.9,4.8-5.8,7.1c-0.9,1.1-1.9,2.2-2.8,3.3c-0.9,1.1-1.8,2.2-2.7,3.3c-0.9,1.1-1.8,2.2-2.6,3.3 c-0.9,1.1-1.7,2.1-2.6,3.2c-0.9,1.1-1.7,2.1-2.5,3.1c-0.8,1-1.6,2-2.4,3c-0.8,1-1.6,2-2.4,2.9c-0.8,0.9-1.6,1.9-2.3,2.8 c-1.6,1.9-3.1,3.8-4.6,5.7c-0.8,0.9-1.5,1.9-2.3,2.8c-0.8,0.9-1.5,1.8-2.2,2.7c-0.7,0.9-1.4,1.8-2.1,2.7 c-0.7,0.9-1.4,1.7-2.1,2.6c-0.7,0.9-1.4,1.7-2,2.6c-1.4,1.7-2.7,3.4-4,5.1c-0.7,0.8-1.3,1.7-2,2.5c-0.7,0.8-1.3,1.6-2,2.4 c-0.7,0.8-1.3,1.6-1.9,2.4c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.6-1.8,2.3c-1.2,1.5-2.4,3-3.6,4.5 c-0.6,0.7-1.2,1.5-1.8,2.2c-1.8,2.2-3.6,4.4-5.3,6.5c-0.9,1.1-1.7,2.1-2.6,3.1c-0.8,1-1.7,2-2.5,2.9 c-0.8,1-1.6,1.9-2.4,2.9c-0.8,1-1.6,1.9-2.4,2.8c-0.8,0.9-1.5,1.9-2.3,2.8c-0.8,0.9-1.5,1.8-2.2,2.7 c-0.7,0.9-1.4,1.8-2.1,2.6c-0.7,0.9-1.4,1.7-2,2.6c-0.7,0.8-1.3,1.7-2,2.5c-0.6,0.8-1.3,1.6-1.9,2.4 c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.5-1.8,2.3c-1.1,1.5-2.3,2.9-3.4,4.4c-1.1,1.4-2.2,2.8-3.3,4.2 c-0.5,0.7-1.1,1.4-1.6,2.1c-1.1,1.3-2.1,2.7-3.1,4c-1,1.3-2,2.6-3,3.8c-1,1.3-2,2.5-2.9,3.7c-0.9,1.2-1.9,2.4-2.8,3.6 c-0.9,1.2-1.8,2.4-2.6,3.5c-0.9,1.2-1.7,2.3-2.6,3.4c-0.8,1.1-1.7,2.2-2.5,3.3c-1.6,2.1-3.2,4.2-4.8,6.3 c-0.8,1-1.6,2.1-2.4,3.1c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,2-2.3,2.9c-0.7,0.9-1.5,1.9-2.2,2.8 c-0.7,0.9-1.4,1.8-2.1,2.7c-0.7,0.9-1.4,1.7-2,2.6c-0.7,0.9-1.3,1.7-1.9,2.5c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.6-1.7,2.4 c-0.6,0.8-1.1,1.5-1.7,2.3c-0.5,0.8-1.1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.5,2.2 c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2c-0.5,0.7-0.9,1.4-1.4,2.1c-0.9,1.4-1.9,2.8-2.8,4.1 c-0.9,1.4-1.8,2.7-2.7,4c-0.9,1.3-1.8,2.6-2.6,3.8c-0.9,1.2-1.7,2.4-2.6,3.6c-0.8,1.2-1.7,2.3-2.5,3.4 c-0.8,1.1-1.6,2.2-2.5,3.2c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,1.9-2.2,2.8c-0.7,0.9-1.5,1.9-2.2,2.8 c-0.7,0.9-1.4,1.8-2.1,2.6c-0.7,0.9-1.3,1.7-1.9,2.6c-0.6,0.8-1.3,1.7-1.9,2.5c-0.6,0.8-1.2,1.6-1.8,2.4 c-0.6,0.8-1.2,1.6-1.7,2.4c-0.6,0.8-1.1,1.5-1.7,2.3c-0.5,0.8-1.1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.6,2.3 c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2c-0.5,0.7-0.9,1.4-1.4,2.1 c-0.9,1.4-1.9,2.8-2.8,4.1c-0.9,1.4-1.8,2.7-2.7,4c-0.9,1.3-1.8,2.6-2.6,3.8c-0.9,1.2-1.7,2.4-2.6,3.6 c-0.8,1.2-1.7,2.3-2.5,3.4c-0.8,1.1-1.6,2.2-2.5,3.2c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,1.9-2.2,2.8 c-0.7,0.9-1.5,1.9-2.2,2.8c-0.7,0.9-1.4,1.8-2.1,2.6c-0.7,0.9-1.3,1.7-1.9,2.6c-0.6,0.8-1.3,1.7-1.9,2.5 c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.6-1.7,2.4c-0.6,0.8-1.1,1.5-1.7,2.3c-0.5,0.8-1.1,1.5-1.6,2.3 c-0.5,0.8-1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2 c-0.5,0.7-0.9,1.4-1.4,2.1c-0.9,1.4-1.9,2.8-2.8,4.1c-0.9,1.4-1.8,2.7-2.7,4c-0.9,1.3-1.8,2.6-2.6,3.8 c-0.9,1.2-1.7,2.4-2.6,3.6c-0.8,1.2-1.7,2.3-2.5,3.4c-0.8,1.1-1.6,2.2-2.5,3.2c-0.8,1-1.5,2-2.3,3 c-0.8,1-1.5,1.9-2.2,2.8c-0.7,0.9-1.5,1.9-2.2,2.8c-0.7,0.9-1.4,1.8-2.1,2.6c-0.7,0.9-1.3,1.7-1.9,2.6 c-0.6,0.8-1.3,1.7-1.9,2.5c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.6-1.7,2.4c-0.6,0.8-1.1,1.5-1.7,2.3 c-0.5,0.8-1.1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2c-0.5,0.7-0.9,1.4-1.4,2.1c-0.9,1.4-1.9,2.8-2.8,4.1 c-0.9,1.3-1.8,2.6-2.6,3.8c-0.9,1.2-1.7,2.4-2.6,3.6c-0.8,1.2-1.7,2.3-2.5,3.4c-0.8,1.1-1.6,2.2-2.5,3.2 c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,1.9-2.2,2.8c-0.7,0.9-1.5,1.9-2.2,2.8c-0.7,0.9-1.4,1.8-2.1,2.6 c-0.7,0.9-1.3,1.7-1.9,2.6c-0.6,0.8-1.3,1.7-1.9,2.5c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.6-1.7,2.4 c-0.6,0.8-1.1,1.5-1.7,2.3c-0.5,0.8-1.1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.5,2.2 c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2c-0.5,0.7-0.9,1.4-1.4,2.1c-0.9,1.4-1.9,2.8-2.8,4.1 c-0.9,1.4-1.8,2.7-2.7,4c-0.9,1.3-1.8,2.6-2.6,3.8c-0.9,1.2-1.7,2.4-2.6,3.6c-0.8,1.2-1.7,2.3-2.5,3.4 c-0.8,1.1-1.6,2.2-2.5,3.2c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,1.9-2.2,2.8c-0.7,0.9-1.5,1.9-2.2,2.8 c-0.7,0.9-1.4,1.8-2.1,2.6c-0.7,0.9-1.3,1.7-1.9,2.6c-0.6,0.8-1.3,1.7-1.9,2.5c-0.6,0.8-1.2,1.6-1.8,2.4 c-0.6,0.8-1.2,1.6-1.7,2.4c-0.6,0.8-1.1,1.5-1.7,2.3c-0.5,0.8-1.1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.6,2.3 c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2c-0.5,0.7-0.9,1.4-1.4,2.1c-0.9,1.4-1.9,2.8-2.8,4.1 c-0.9,1.4-1.8,2.7-2.7,4 c-0.9,1.3-1.8,2.6-2.6,3.8c-0.9,1.2-1.7,2.4-2.6,3.6c-0.8,1.2-1.7,2.3-2.5,3.4c-0.8,1.1-1.6,2.2-2.5,3.2 c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,1.9-2.2,2.8c-0.7,0.9-1.5,1.9-2.2,2.8c-0.7,0.9-1.4,1.8-2.1,2.6 c-0.7,0.9-1.3,1.7-1.9,2.6c-0.6,0.8-1.3,1.7-1.9,2.5c-0.6,0.8-1.2,1.6-1.8,2.4c-0.6,0.8-1.2,1.6-1.7,2.4 c-0.6,0.8-1.1,1.5-1.7,2.3c-0.5,0.8-1.1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.6,2.3c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.5,2.2c-0.5,0.8-1,1.5-1.4,2.2c-0.5,0.7-0.9,1.4-1.4,2.1c-0.9,1.4-1.9,2.8-2.8,4.1 c-0.9,1.4-1.8,2.7-2.7,4c-0.9,1.3-1.8,2.6-2.6,3.8c-0.9,1.2-1.7,2.4-2.6,3.6c-0.8,1.2-1.7,2.3-2.5,3.4 c-0.8,1.1-1.6,2.2-2.5,3.2c-0.8,1-1.5,2-2.3,3c-0.8,1-1.5,1.9-2.2,2.8c-0.7,0.9-1.5,1.9-2.2,2.8 c-0.7,0.9-1.4,1.8-2.1,2.6c-0.7,0.9-1.3,1.7-1.9,2.6c-0.6,0.8-1.3,1.7-1.9,2.5 c-0.6,0.8-1.2,1.6-1.8,2"/>
    </svg>
);

export const SafarnamaaLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g>
            {/* Blue pin shape */}
            <path
                d="M50 0 C22.4 0 0 22.4 0 50 C0 85 50 125 50 125 S100 85 100 50 C100 22.4 77.6 0 50 0 Z M50 75 C36.2 75 25 63.8 25 50 S36.2 25 50 25 S75 36.2 75 50 S63.8 75 50 75 Z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#1E40AF"
            />
            {/* Red inner circle */}
            <circle cx="50" cy="50" r="22" fill="#EF4444" />
            {/* Red airplane */}
            <path 
                d="M40.1,64.3l18.8-10.7l-4.5-5.1l-11.6,6.6l-8.1-8.1l-3,3l8.1,8.1l-6.6,11.6l5.1,4.5L40.1,64.3z"
                fill="#EF4444"
                transform="rotate(10 45 60)"
            />
        </g>
    </svg>
);

// FIX: Add missing UserCircleIcon
export const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// FIX: Add missing HomeIcon
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

// FIX: Add missing CalendarIcon
export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
    </svg>
);

// FIX: Add missing UsersIcon
export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.063M16.5 7.875a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.375m-13.5 0h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.375m13.5-6.375v-1.5c0-.621-.504-1.125-1.125-1.125h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-3.75a1.125 1.125 0 01-1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5A1.125 1.125 0 005.25 9v1.5c0 .621.504 1.125 1.125 1.125h.375m6-1.5v-1.5c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v1.5" />
    </svg>
);

// FIX: Add missing ChevronDownIcon
export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// FIX: Add missing EyeIcon
export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.418-5.58a1.012 1.012 0 011.59 0l4.418 5.58a1.012 1.012 0 010 .639l-4.418 5.58a1.012 1.012 0 01-1.59 0l-4.418-5.58z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// FIX: Add missing CurrencyDollarIcon
export const CurrencyDollarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// FIX: Add missing LightBulbIcon
export const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.628 6.01 6.01 0 00-1.5 11.628zM12 18H9.75M12 18h2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18a2.25 2.25 0 01-2.25-2.25V13.5A2.25 2.25 0 019.75 11.25h4.5A2.25 2.25 0 0116.5 13.5v2.25a2.25 2.25 0 01-2.25 2.25M9.75 18h4.5" />
    </svg>
);

// FIX: Add missing BookOpenIcon
export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

// FIX: Add missing LinkIcon
export const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

// FIX: Add missing ChatBubbleLeftIcon
export const ChatBubbleLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
);

// FIX: Add missing TrainIcon
export const TrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M12 52 H 52" />
        <rect x="8" y="24" width="48" height="24" rx="4" />
        <path d="M16 24 V 16 H 48 V 24" />
        <circle cx="20" cy="48" r="4" />
        <circle cx="44" cy="48" r="4" />
        <path d="M8 40 H 56" />
        <path d="M28 32 H 36" />
        <path d="M20 16 L 24 8 H 40 L 44 16" />
    </svg>
);

// FIX: Add missing BusIcon
export const BusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h12V6.375c0-.621-.504-1.125-1.125-1.125H4.5A1.125 1.125 0 003.375 6.375v12.375z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5h.008v.008H12v-.008z" />
    </svg>
);

// FIX: Add missing ChevronLeftIcon
export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

// FIX: Add missing ChevronRightIcon
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

// FIX: Add missing SafariIcon
export const SafariIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <rect x="8" y="28" width="48" height="20" rx="4" />
        <path d="M16 28 L 24 16 H 40 L 48 28" />
        <circle cx="18" cy="48" r="5" />
        <circle cx="46" cy="48" r="5" />
        <path d="M8 36 H 56" />
        <path d="M20 20 H 44" />
    </svg>
);

// FIX: Add missing BonfireIcon
export const BonfireIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M20 56 L 44 56" />
        <path d="M24 52 L 40 52" />
        <path d="M28,56 C 28,48, 24,40, 32,32 C 40,40, 36,48, 36,56" />
        <path d="M32,32 C 32,24, 28,16, 24,12" />
        <path d="M32,32 C 32,24, 36,16, 40,12" />
    </svg>
);

// FIX: Add missing RaftingIcon
export const RaftingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M8,48 C 16,40, 48,40, 56,48 L 52,56 H 12 Z" />
        <circle cx="32" cy="28" r="4" />
        <path d="M32,32 V 16 L 48,24" />
        <path d="M10,40 C 18,44, 26,44, 34,40" strokeDasharray="3 5"/>
        <path d="M30,46 C 38,50, 46,50, 54,46" strokeDasharray="3 5"/>
    </svg>
);

// FIX: Add missing MusicIcon
export const MusicIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V7.5A2.25 2.25 0 0013.5 6h-5.25a2.25 2.25 0 00-2.25 2.25v3.75m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0l10.5-3" />
    </svg>
);