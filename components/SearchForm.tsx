import React from 'react';
import { HomeIcon, CalendarIcon, UsersIcon, ChevronDownIcon } from './icons';

interface SearchFieldProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    isDropdown?: boolean;
    isLast?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({ icon, label, value, isDropdown = true, isLast = false }) => (
    <div className={`flex-1 flex items-center p-3 md:p-4 ${!isLast ? 'md:border-r border-gray-300/50' : ''}`}>
        <div className="text-[#E9A971] mr-3">{icon}</div>
        <div className="flex-grow">
            <label className="text-xs text-gray-500">{label}</label>
            <p className="font-semibold text-sm text-[#5C4B40]">{value}</p>
        </div>
        {isDropdown && <ChevronDownIcon className="w-5 h-5 text-gray-400" />}
    </div>
);


const SearchForm: React.FC = () => {
    return (
        <div className="bg-white/50 backdrop-blur-lg border border-white/60 rounded-full shadow-xl flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto overflow-hidden">
            <div className="w-full md:flex-1 grid grid-cols-2 md:grid-cols-4">
                 <SearchField icon={<HomeIcon className="w-6 h-6" />} label="Accommodation" value="6730 Luna Land North" />
                 <SearchField icon={<CalendarIcon className="w-6 h-6" />} label="Check-in" value="19.06.2019" />
                 <SearchField icon={<CalendarIcon className="w-6 h-6" />} label="Check-out" value="24.06.2019" />
                 <SearchField icon={<UsersIcon className="w-6 h-6" />} label="Guests" value="4 adults" isLast={true} />
            </div>
            <div className="p-2 w-full md:w-auto">
                 <button className="bg-[#E9A971] text-white font-semibold rounded-full px-8 py-3 w-full md:w-auto hover:bg-[#d9985f] transition-colors duration-300 shadow-md">
                     Search
                 </button>
            </div>
        </div>
    );
};

export default SearchForm;