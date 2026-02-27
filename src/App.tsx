import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar, Hero, Services, Testimonials, ServiceAreas, Footer } from './components/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { PlusCircle, Users, CheckCircle2 } from 'lucide-react'; // Assuming lucide-react for icons

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                <Hero />

                <section id="how-it-works" className="py-24 bg-slate-50/50">
                    <div className="container">
                        <div className="text-center mb-16 px-4">
                            <span className="badge-premium">Simple Process</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">How It Works</h2>
                            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Connecting Chennai residents with reliable students in three easy steps.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 card-hover-effect relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <div className="text-9xl font-black font-heading tracking-tighter text-blue-900 italic">01</div>
                                </div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-inner">
                                    <PlusCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Request Help</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">Describe what you need help with and specify your location in Chennai. Our verified students are ready to assist.</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 card-hover-effect relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <div className="text-9xl font-black font-heading tracking-tighter text-green-900 italic">02</div>
                                </div>
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 shadow-inner">
                                    <Users size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Select a Student</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">Verified students will show interest. Review their profiles, proximity, and ratings to choose the best fit.</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 card-hover-effect relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <div className="text-9xl font-black font-heading tracking-tighter text-amber-900 italic">03</div>
                                </div>
                                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 shadow-inner">
                                    <CheckCircle2 size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Pay After Work</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">The student completes the task, and you pay them directly offline. Transparent, simple, and fee-free!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Services />
                <Testimonials />
                <ServiceAreas />

                <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white text-center w-full relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="container relative z-10">
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">Ready to get <br className="hidden md:block" /> things done?</h2>
                        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">Join hundreds of Chennai residents using NammaEarns daily for their chores and errands.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/signup">
                                <button className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black text-lg shadow-2xl shadow-black/20 hover:scale-105 transition-transform">Get Help Now</button>
                            </Link>
                            <button className="px-10 py-5 bg-transparent border-2 border-white/50 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all">Become a Partner</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
