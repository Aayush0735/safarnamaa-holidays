import React from 'react';

export interface Trip {
    id: number;
    title: string;
    imageUrl: string;
    peopleGoing: number;
    duration: string;
    price: string;
}

export interface Photo {
    id: number;
    src: string;
    alt: string;
    location: string;
    description: string;
    className: string;
    animationDelay: string;
}

export interface MapLocation {
    name: string;
    date: string;
    imageUrl: string;
    position: { top?: string; bottom?: string; left?: string; right?: string; };
    pinPosition: {};
    animationDelay: string;
}

export interface Category {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    count: number;
}

export interface Destination {
    slug: string;
    name: string;
    tagline: string;
    categories: string;
    cardImage: string;
    heroImage: string;
    description: string[];
    gallery: string[];
    itinerary: {
        day: string;
        title: string;
        description: string;
    }[];
    highlights: {
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
        title: string;
        description: string;
    }[];
}

export interface Slide {
    imageUrl: string;
    caption: string;
}

export interface TripHighlight {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    text: string;
}

export interface CarouselItem {
    src: string;
    title: string;
    description: string;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  tag: string;
  excerpt: string;
  imageUrl: string;
  alignment: 'left' | 'right';
}
