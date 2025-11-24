import React from 'react';
import { BlogPost } from '../types';
import BlogPostPreview from '../components/BlogPostPreview';

const blogPosts: BlogPost[] = [
    {
        id: 1,
        category: 'Uttarakhand',
        title: 'Seven Reasons to Explore the Himalayas',
        tag: 'ADVENTURE',
        excerpt: 'Version of eam fuisset cui voluptua ea editie Lorem Ipsum. Has eruditi singulis principes ad, pro ceteros adipiscim sed. Semper adversarium ad, eum ne facete delectus. Viris maiorum lucilius eum ei. Vel summo maluisset ea, nec cu vivendum disputationi. Alia exerci eam an. Lobortis definitiones te pro. Et dicam ceteros sea, mutat iisque',
        imageUrl: 'https://picsum.photos/seed/himalayas-blog/800/1000',
        alignment: 'right',
    },
    {
        id: 2,
        category: 'Varanasi',
        title: 'Finding Peace by the Ganges',
        tag: 'SPIRITUAL',
        excerpt: 'Version of eam fuisset cui voluptua ea editie Lorem Ipsum. Has eruditi singulis principes ad, pro ceteros adipiscim sed. Semper adversarium ad, eum ne facete delectus. Viris maiorum lucilius eum ei. Vel summo maluisset ea, nec cu vivendum disputationi. Alia exerci eam an. Lobortis definitiones te pro. Et dicam ceteros sea, mutat iisque',
        imageUrl: 'https://picsum.photos/seed/varanasi-blog/800/1000',
        alignment: 'left',
    },
    {
        id: 3,
        category: 'Kerala',
        title: 'A Journey Through the Backwaters',
        tag: 'NATURE',
        excerpt: 'Version of eam fuisset cui voluptua ea editie Lorem Ipsum. Has eruditi singulis principes ad, pro ceteros adipiscim sed. Semper adversarium ad, eum ne facete delectus. Viris maiorum lucilius eum ei. Vel summo maluisset ea, nec cu vivendum disputationi. Alia exerci eam an. Lobortis definitiones te pro. Et dicam ceteros sea, mutat iisque',
        imageUrl: 'https://picsum.photos/seed/kerala-blog/800/1000',
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
