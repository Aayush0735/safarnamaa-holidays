import React from 'react';
import { BlogPost } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FacebookIcon, TwitterIcon, PinterestIcon } from './icons';

interface BlogPostPreviewProps {
    post: BlogPost;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();
    const isImageLeft = post.alignment === 'left';

    return (
        <div 
            ref={sectionRef} 
            className={`animate-on-scroll ${isImageLeft ? 'animate-slideInFromLeft' : 'animate-slideInFromRight'}`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image Section */}
                <div className={`w-full ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover shadow-xl"/>
                </div>

                {/* Text Content Section */}
                <div className={`w-full ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="font-script text-2xl text-gray-700">{post.category}</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-light tracking-wider uppercase">{post.title}</h2>
                    <p className="mt-4 text-xs text-red-500 tracking-[0.2em]">{post.tag}</p>
                    <p className="mt-6 text-gray-500 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="mt-8 flex items-center justify-between">
                         <a href="#" className="text-xs font-bold tracking-[0.2em] hover:text-red-500 transition-colors">KEEP READING...</a>
                         <div className="flex items-center space-x-3">
                            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors">
                                <FacebookIcon className="w-5 h-5"/>
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-sky-500 transition-colors">
                                <TwitterIcon className="w-5 h-5"/>
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors">
                                <PinterestIcon className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPreview;
