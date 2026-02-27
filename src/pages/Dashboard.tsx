import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navbar, Footer, PostTaskForm, TaskList } from '../components/Landing';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const savedTasks = localStorage.getItem(`tasks_${user.id}`);
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, [user, navigate]);

    const handleAddTask = (newTask: any) => {
        const updatedTasks = [newTask, ...tasks];
        setTasks(updatedTasks);
        if (user) {
            localStorage.setItem(`tasks_${user.id}`, JSON.stringify(updatedTasks));
        }
    };

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50/50">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                            Namaste, <span className="text-blue-600">{user.name}</span>!
                        </h1>
                        <p className="text-slate-600 mt-2 text-lg font-medium">Manage your requested tasks and connect with verified students across Chennai.</p>
                    </div>
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-100 hover:bg-red-50 font-bold transition-all duration-300 shadow-sm"
                    >
                        Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-4 sticky top-24">
                        <PostTaskForm onTaskAdded={handleAddTask} />
                    </div>
                    <div className="lg:col-span-8">
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
