import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Phone, User, MapPin, ArrowRight } from 'lucide-react';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        area: 'Anna Nagar'
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.phone.length >= 10 && formData.name) {
            // In a real app, we would call a register function
            login(formData.phone, 'customer');
            navigate('/dashboard');
        } else {
            alert('Please fill in all details correctly');
        }
    };

    const areas = ["Anna Nagar", "Adyar", "Mylapore", "T. Nagar", "Velachery", "Tambaram", "OMR", "Porur"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center">
                    <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <UserPlus className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h2>
                    <p className="mt-2 text-sm text-slate-600 font-medium">Join NammaEarns today and get your tasks done by students</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                                <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="appearance-none rounded-2xl relative block w-full pl-12 pr-4 py-4 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all bg-slate-50/50 hover:bg-white"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                                <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                            </div>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="appearance-none rounded-2xl relative block w-full pl-12 pr-4 py-4 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all bg-slate-50/50 hover:bg-white"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                                <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                            </div>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                className="appearance-none rounded-2xl relative block w-full pl-12 pr-10 py-4 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all bg-slate-50/50 hover:bg-white cursor-pointer"
                            >
                                {areas.map(area => (
                                    <option key={area} value={area}>{area}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <ArrowRight className="h-4 w-4 text-slate-400 rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all active:scale-[0.98] shadow-xl shadow-blue-200/50"
                        >
                            Sign Up as Customer
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-slate-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-blue-600 hover:text-blue-500 transition-colors">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
