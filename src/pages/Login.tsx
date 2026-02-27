import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
    const [role, setRole] = useState<'customer' | 'student'>('customer');
    const [phone, setPhone] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (phone.length >= 10) {
            login(phone, role);
            navigate('/dashboard');
        } else {
            alert('Please enter a valid phone number');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center">
                    <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <User className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
                    <p className="mt-2 text-sm text-slate-600">Please select your role and sign in to continue</p>
                </div>

                <div className="flex p-1.5 bg-slate-100/50 backdrop-blur-sm rounded-2xl mb-8 border border-slate-200/50">
                    <button
                        onClick={() => setRole('customer')}
                        className={`flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${role === 'customer'
                                ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                            }`}
                    >
                        <User className="w-4 h-4 mr-2" />
                        Customer
                    </button>
                    <button
                        onClick={() => setRole('student')}
                        className={`flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${role === 'student'
                                ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                            }`}
                    >
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Student Partner
                    </button>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="appearance-none rounded-xl relative block w-full px-4 py-4 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all"
                                placeholder="Phone Number (e.g. 9876543210)"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all active:scale-95 shadow-lg shadow-blue-200"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <ShieldCheck className="h-5 w-5 text-blue-300 group-hover:text-blue-200" aria-hidden="true" />
                            </span>
                            Sign In as {role === 'customer' ? 'Customer' : 'Student'}
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-slate-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-bold text-blue-600 hover:text-blue-500 transition-colors">
                            Create a Customer Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
