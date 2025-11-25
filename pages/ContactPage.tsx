import React, { useState } from 'react';
import { 
    AirplaneIcon, 
    IndiaMapIcon, 
    SafarnamaaLogoIcon, 
    InstagramIcon, 
    WhatsappIcon, 
    FacebookIcon, 
    TwitterIcon,
    PinterestIcon
} from '../components/icons';

// Component for the Floating Label Input
interface FloatingInputProps {
    label: string;
    id: string;
    type?: string;
    textarea?: boolean;
    focused: boolean;
    value: string;
    error?: string;
    onFocus: (id: string) => void;
    onBlur: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label, id, type = "text", textarea = false, focused, value, error, onFocus, onBlur, onChange }) => {
    const isActive = focused || value.length > 0;

    return (
        <div className="relative">
            {textarea ? (
                 <textarea
                    id={id}
                    className={`block w-full px-0 py-3 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer resize-none transition-colors duration-300 text-gray-900 ${error ? 'border-red-500' : (focused ? 'border-orange-500' : 'border-gray-300')}`}
                    placeholder=" "
                    rows={4}
                    onFocus={() => onFocus(id)}
                    onBlur={() => { onBlur(); }}
                    onChange={onChange}
                    value={value}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    className={`block w-full px-0 py-3 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors duration-300 text-gray-900 ${error ? 'border-red-500' : (focused ? 'border-orange-500' : 'border-gray-300')}`}
                    placeholder=" "
                    onFocus={() => onFocus(id)}
                    onBlur={() => { onBlur(); }}
                    onChange={onChange}
                    value={value}
                />
            )}
            <label
                htmlFor={id}
                className={`absolute text-base duration-300 transform top-3 origin-[0] pointer-events-none z-10 
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                ${isActive ? '-translate-y-6 scale-75 text-orange-500' : 'text-gray-500'}`}
            >
                {label}
            </label>
            {error && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{error}</span>}
        </div>
    );
};

const SocialButton: React.FC<{ icon: React.ReactNode, href?: string }> = ({ icon, href = "#" }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
    >
        <div className="w-5 h-5">
            {icon}
        </div>
    </a>
);

const ContactPage: React.FC = () => {
    // State for managing focus to trigger animations
    const [focusedField, setFocusedField] = useState<string | null>(null);
    
    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleFocus = (field: string) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        
        // Clear error when user types
        if (errors[id]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[id];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row animate-fadeInUp">
                  
            {/* Left Panel: Inspiration & Contact Info */}
            <div className="w-full md:w-5/12 bg-slate-900 relative p-10 md:p-14 lg:p-20 text-white flex flex-col justify-center overflow-hidden min-h-[500px]">
                
                {/* Background Pattern */}
                <IndiaMapIcon className="absolute -bottom-24 -right-24 w-96 h-96 text-white/5 pointer-events-none transform rotate-12" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90 pointer-events-none"></div>

                {/* Header Content */}
                <div className="relative z-10 pt-20 md:pt-0">
                    <div className="flex items-center space-x-3 mb-10 opacity-80">
                        <SafarnamaaLogoIcon className="w-8 h-8" />
                        <span className="font-script text-xl tracking-wide">Safarnamaa</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 font-serif">
                        Let's craft your <br/>
                        <span className="text-orange-400 font-script italic">dream journey.</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-md">
                        Ready to explore the unseen? Whether it's a custom itinerary or a partnership, we're here to guide you through the mystical lands of India.
                    </p>

                    {/* Contact Details List */}
                    <div className="space-y-8 text-slate-300">
                        <div className="flex items-start space-x-4 group">
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-orange-500/20 transition-colors shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Business Enquiries</p>
                                <a href="mailto:safarnamaaholidays@gmail.com" className="text-white hover:text-orange-400 transition-colors text-lg font-medium block">safarnamaaholidays@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 group">
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-orange-500/20 transition-colors shrink-0">
                                <WhatsappIcon className="h-6 w-6 text-orange-400" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">WhatsApp Us</p>
                                <a href="https://wa.me/918779988156" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors text-lg font-medium block">+91 87799 88156</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Socials */}
                <div className="relative z-10 mt-16 flex items-center space-x-4">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mr-2">Follow Us</span>
                    <SocialButton icon={<InstagramIcon />} href="https://www.instagram.com/safarnamaaholidays/#" />
                    <SocialButton icon={<FacebookIcon />} />
                    <SocialButton icon={<TwitterIcon />} />
                    <SocialButton icon={<PinterestIcon />} />
                </div>
            </div>

            {/* Right Panel: The Form */}
            <div className="w-full md:w-7/12 bg-white p-10 md:p-16 lg:p-24 flex flex-col justify-center min-h-[500px]">
                <div className="max-w-xl mx-auto w-full pt-10 md:pt-0">
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-widest mb-2 flex items-center">
                            Get In Touch
                            <span className="h-px w-20 bg-gray-300 ml-4 hidden sm:block"></span>
                        </h3>
                        <p className="text-slate-500 mt-2">Fill out the form below and our team will get back to you within 24 hours.</p>
                    </div>

                    <form className="space-y-12" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FloatingInput 
                                    label="First Name" 
                                    id="firstName" 
                                    value={formData.firstName}
                                    error={errors.firstName}
                                    focused={focusedField === 'firstName'} 
                                    onFocus={handleFocus} 
                                    onBlur={handleBlur} 
                                    onChange={handleChange}
                                />
                                <FloatingInput 
                                    label="Last Name" 
                                    id="lastName" 
                                    value={formData.lastName}
                                    error={errors.lastName}
                                    focused={focusedField === 'lastName'} 
                                    onFocus={handleFocus} 
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </div>
                            <FloatingInput 
                                label="Email Address" 
                                id="email" 
                                type="email" 
                                value={formData.email}
                                error={errors.email}
                                focused={focusedField === 'email'} 
                                onFocus={handleFocus} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <FloatingInput 
                                label="Your Message" 
                                id="message" 
                                textarea 
                                value={formData.message}
                                error={errors.message}
                                focused={focusedField === 'message'} 
                                onFocus={handleFocus} 
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />

                            <div className="pt-8">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`group relative overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-xl font-bold tracking-widest transition-all hover:shadow-xl hover:-translate-y-1 w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <span className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                    <span className="relative flex items-center justify-center md:justify-start z-10">
                                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                        {!isSubmitting && <AirplaneIcon className="ml-3 w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />}
                                    </span>
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fadeInUp">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-green-700 font-medium">Message sent successfully! We'll be in touch soon.</span>
                                    </div>
                                )}
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;