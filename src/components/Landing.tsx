import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ShieldCheck,
    MapPin,
    Clock,
    Star,
    ArrowRight,
    Car,
    Wrench,
    ShoppingBag,
    Brush,
    Calendar,
    MessageCircle,
    Users,
    PlusCircle,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="glass-nav sticky top-0 z-50">
            <div className="container" style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ backgroundColor: '#3b82f6', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Calendar size={20} />
                        </div>
                        <span style={{ fontWeight: '800', fontSize: '24px', letterSpacing: '-0.5px' }}>
                            Namma<span style={{ color: '#3b82f6' }}>Earns</span>
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#services" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '600', fontSize: '15px' }}>Services</a>
                    <a href="#how-it-works" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '600', fontSize: '15px' }}>How it Works</a>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <button className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '15px' }}>Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '15px' }}>Post a Task</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export const Hero = () => {
    return (
        <section className="hero-section text-center">
            <div className="container">
                <div style={{ margin: '0 auto', maxWidth: '900px' }}>
                    <span className="badge-premium">Verified College Students • Chennai</span>
                    <h1 className="title-gradient" style={{ fontSize: '64px', marginBottom: '24px' }}>
                        Local Students. <br />
                        Stronger Community.
                    </h1>
                    <p style={{ fontSize: '22px', color: '#64748b', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
                        Connecting Chennai residents with verified college students for on-demand errands, cleaning, car wash, and more.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/signup">
                            <button className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '18px' }}>
                                Post a Task <ArrowRight size={20} />
                            </button>
                        </Link>
                        <button className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '18px' }}>
                            Earn as Student
                        </button>
                    </div>

                    <div className="flex justify-center gap-8" style={{ marginTop: '80px' }}>
                        <div className="flex items-center gap-2">
                            <div style={{ color: '#10b981' }}><ShieldCheck size={24} /></div>
                            <div style={{ fontWeight: '700', fontSize: '15px' }}>ID Verified</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div style={{ color: '#3b82f6' }}><Users size={24} /></div>
                            <div style={{ fontWeight: '700', fontSize: '15px' }}>Student Powered</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div style={{ color: '#f59e0b' }}><Star size={24} /></div>
                            <div style={{ fontWeight: '700', fontSize: '15px' }}>Top Rated</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const services = [
    { icon: <Brush size={28} />, title: 'Home Cleaning', desc: 'Deep cleaning, dusting, and organizing.' },
    { icon: <Car size={28} />, title: 'Car/Bike Wash', desc: 'Professional wash at your doorstep.' },
    { icon: <ShoppingBag size={28} />, title: 'Grocery Pickup', desc: 'Local errands and shopping assistance.' },
    { icon: <Wrench size={28} />, title: 'Tech Support', desc: 'Software installs and hardware setup.' },
    { icon: <Calendar size={28} />, title: 'Event Help', desc: 'Assistance for weddings and parties.' },
    { icon: <Clock size={28} />, title: 'Moving Help', desc: 'Packing and lifting heavy objects.' },
];

export const Services = () => {
    return (
        <section id="services" style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="text-center mb-8" style={{ marginBottom: '64px' }}>
                    <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>Our Services</h2>
                    <p style={{ color: '#64748b', fontSize: '20px' }}>What can our students help you with today?</p>
                </div>
                <div className="grid w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {services.map((s, i) => (
                        <div key={i} className="card">
                            <div style={{ color: '#3b82f6', marginBottom: '24px' }}>{s.icon}</div>
                            <h3 style={{ marginBottom: '16px', fontSize: '22px' }}>{s.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '16px' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const reviews = [
    { name: 'Arjun Ram', role: 'Customer', msg: 'Prompt service and very helpful. The student from Anna University arrived on time for the car wash.', rating: 5 },
    { name: 'Deepika S.', role: 'Student', msg: 'Great way to earn pocket money during weekends. The platform is safe and the customers are verified.', rating: 5 },
    { name: 'Karthik Raja', role: 'Customer', msg: 'Needed help with shifting my apartment in Mogappair. Three students helped me pack everything efficiently.', rating: 5 },
];

export const Testimonials = () => {
    return (
        <section style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="text-center mb-8" style={{ marginBottom: '64px' }}>
                    <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>What People Say</h2>
                    <p style={{ color: '#64748b', fontSize: '20px' }}>Built on trust and student reliability across Chennai.</p>
                </div>
                <div className="grid w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
                    {reviews.map((r, i) => (
                        <div key={i} className="card review-card">
                            <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '20px' }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
                            </div>
                            <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '32px', fontSize: '18px', lineHeight: '1.6' }}>"{r.msg}"</p>
                            <div className="flex items-center gap-4">
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: '#3b82f6', fontSize: '18px' }}>
                                    {r.name[0]}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', color: '#1e293b' }}>{r.name}</div>
                                    <div style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600' }}>{r.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ServiceAreas = () => {
    return (
        <section style={{ padding: '100px 0', background: 'white' }}>
            <div className="container text-center">
                <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>Serving Across Chennai</h2>
                <p style={{ color: '#64748b', marginBottom: '56px', fontSize: '20px' }}>Active students available in your neighborhood.</p>
                <div className="flex justify-center w-full" style={{ flexWrap: 'wrap', gap: '16px' }}>
                    {['Anna Nagar', 'Mogappair', 'Kilpauk', 'Aminjikarai', 'T. Nagar', 'Adyar', 'Velachery', 'Besant Nagar', 'Mylapore', 'Nungambakkam'].map(area => (
                        <div key={area} className="area-bubble">
                            <MapPin size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> {area}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '80px 0 40px' }} className="w-full">
            <div className="container">
                <div className="grid w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '60px' }}>
                    <div>
                        <div className="flex items-center gap-2" style={{ marginBottom: '24px' }}>
                            <div style={{ backgroundColor: '#3b82f6', width: '32px', height: '32px', borderRadius: '8px' }} className="flex items-center justify-center">
                                <Calendar size={18} />
                            </div>
                            <span style={{ fontWeight: '800', fontSize: '22px' }}>NammaEarns</span>
                        </div>
                        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                            Empowering students and strengthening the Chennai community. Verified college students at your service.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '24px' }}>Platform</h4>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '12px' }}>How it Works</li>
                            <li style={{ marginBottom: '12px' }}>Student Registration</li>
                            <li style={{ marginBottom: '12px' }}>Customer Dashboard</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '24px' }}>Support</h4>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '12px' }}>Terms & Conditions</li>
                            <li style={{ marginBottom: '12px' }}>Privacy Policy</li>
                            <li style={{ marginBottom: '12px' }}>Contact Support</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '24px' }}>Contact</h4>
                        <button className="btn btn-primary w-full" style={{ marginBottom: '16px' }}>
                            <MessageCircle size={18} /> WhatsApp Us
                        </button>
                        <p style={{ color: '#64748b', fontSize: '12px' }} className="text-center">Available 9 AM - 8 PM</p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #1e293b', marginTop: '80px', paddingTop: '40px', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
                    © 2026 NammaEarns Chennai. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
export const PostTaskForm = ({ onTaskAdded }: { onTaskAdded: (task: any) => void }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            description: desc,
            budget,
            status: 'requested',
            createdAt: new Date().toISOString()
        };
        onTaskAdded(newTask);
        setTitle('');
        setDesc('');
        setBudget('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <PlusCircle size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Post a New Task</h3>
            </div>

            <div className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Task Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Car Wash, Grocery Pickup"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Description</label>
                    <textarea
                        placeholder="What needs to be done? Be specific about quantity, time, etc."
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all h-36 font-medium text-slate-900"
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Budget (₹)</label>
                    <div className="relative group">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold group-focus-within:text-blue-500">₹</span>
                        <input
                            type="number"
                            placeholder="Your offer"
                            className="w-full pl-10 pr-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900"
                            required
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transform transition-all active:scale-[0.98] shadow-lg shadow-blue-200 mt-2"
                >
                    Post Task Now <ArrowRight size={18} />
                </button>
            </div>
        </form>
    );
};

export const TaskList = ({ tasks }: { tasks: any[] }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900">Your Requested Tasks</h3>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">
                    {tasks.length} {tasks.length === 1 ? 'Task' : 'Tasks'}
                </span>
            </div>

            {tasks.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-sm">
                    <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="text-slate-300" size={32} />
                    </div>
                    <p className="text-slate-400 font-medium text-lg">No tasks posted yet. Create your first task to see it here!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tasks.map(task => (
                        <div key={task.id} className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${task.status === 'requested' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
                                        }`}>
                                        {task.status}
                                    </div>
                                    <div className="text-blue-600 font-black text-xl">₹{task.budget}</div>
                                </div>
                                <h4 className="font-extrabold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight line-clamp-1">{task.title}</h4>
                                <p className="text-slate-500 font-medium line-clamp-3 leading-relaxed mb-6">{task.description}</p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                    <Clock size={14} className="text-blue-400" />
                                    {new Date(task.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                </div>
                                <button className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                                    Details <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
