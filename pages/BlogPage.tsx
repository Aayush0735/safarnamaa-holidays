import React from 'react';
import { BlogPost } from '../types';
import BlogPostPreview from '../components/BlogPostPreview';

const blogPosts: BlogPost[] = [
    {
        id: 1,
        category: 'Uttarakhand',
        title: 'Seven Reasons to Explore the Himalayas',
        tag: 'ADVENTURE | NATURE | SPIRITUAL ESCAPE',
        excerpt: 'From snow-kissed peaks to mystical trails wrapped in pine-scented air, Uttarakhand is where adventure meets serenity. Trek through ancient paths, chase waterfalls, breathe in fresh mountain air, and discover why travelers call it a paradise. Whether you seek thrill, peace, or breathtaking views — the Himalayas never disappoint.',
        imageUrl: '/images/himalaya.jpg',
        alignment: 'right',
    },
    {
        id: 2,
        category: 'Varanasi',
        title: 'Finding Peace by the Ganges',
        tag: 'SPIRITUAL | CULTURE | HERITAGE',
        excerpt: 'Where time slows and spirituality fills the air — Varanasi is not just a destination, it is an experience. Witness the soulful Ganga Aarti, explore ancient ghats, and feel the sacred rhythm of life along the river. Here, every sunrise tells a story older than history itself.',
        imageUrl: '/images/ganga_aarti.jpg',
        alignment: 'left',
    },
    {
        id: 3,
        category: 'Kerala',
        title: 'A Journey Through the Backwaters',
        tag: 'NATURE | RELAXATION | CULTURE',
        excerpt: 'Sail through tranquil backwaters lined with palm trees, golden sunsets, and floating villages. Kerala is where nature whispers softly, and life moves at a peaceful, dreamy pace. From Ayurvedic retreats to wildlife and pristine beaches, it’s the perfect escape for those seeking calm and beauty.',
        imageUrl: '/images/b2.jpg',
        alignment: 'right',
    },
];


const BlogPage: React.FC = () => {
    return (
        <main>
            <header className="py-16 text-center">
                <h1 className="font-script text-5xl md:text-6xl text-gray-800">From Our Blog</h1>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Stories, tips, and inspiration from our travels across India. Your next adventure starts with a single story.</p>
            </header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
                {blogPosts.map((post) => (
                    <BlogPostPreview key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
};

export default BlogPage;
