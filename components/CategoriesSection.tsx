import React from 'react';
import { Category } from '../types';
import { BeachIcon, AdventureIcon, FoodIcon, HeritageIcon, SpiritualIcon, BudgetIcon } from './icons';
import useScrollAnimation from '../hooks/useScrollAnimation';

const categories: Category[] = [
    { name: 'BEACHES', icon: BeachIcon, count: 4 },
    { name: 'ADVENTURE', icon: AdventureIcon, count: 5 },
    { name: 'FOOD TOURS', icon: FoodIcon, count: 3 },
    { name: 'HERITAGE', icon: HeritageIcon, count: 8 },
    { name: 'SPIRITUAL', icon: SpiritualIcon, count: 6 },
    { name: 'LOW BUDGET', icon: BudgetIcon, count: 4 },
];

const CategoryItem: React.FC<{ category: Category; index: number }> = ({ category, index }) => {
    const ref = useScrollAnimation<HTMLDivElement>();
    return (
        <div 
            ref={ref} 
            className="flex flex-col items-center text-center group animate-on-scroll animate-fadeInUp-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <category.icon className="w-16 h-16 text-gray-700 transition-transform group-hover:-translate-y-1" />
            <h3 className="mt-4 font-bold tracking-widest text-sm">{category.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{category.count} DESTINATIONS</p>
        </div>
    );
};

const CategoriesSection: React.FC = () => {
    const headerRef = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="py-24 text-center">
            <div ref={headerRef} className="animate-on-scroll animate-fadeInUp-scroll">
                <h2 className="text-3xl md:text-4xl font-light tracking-wider">TOP CATEGORIES</h2>
                <p className="mt-4 text-gray-500">We are Safarnamaa Holidays, your India travel experts!</p>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
                {categories.map((cat, index) => (
                    <CategoryItem key={cat.name} category={cat} index={index} />
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;