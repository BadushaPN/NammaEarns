import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'customer' | 'student' | 'admin' | null;

interface User {
    id: string;
    name: string;
    phone: string;
    role: Role;
    area: string;
    status: 'pending' | 'approved' | 'active';
}

interface AuthContextType {
    user: User | null;
    login: (phone: string, role: Role) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('stc_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (phone: string, role: Role) => {
        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name: 'User ' + phone.slice(-4),
            phone,
            role,
            area: 'Anna Nagar',
            status: role === 'student' ? 'pending' : 'approved',
        };
        setUser(newUser);
        localStorage.setItem('stc_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('stc_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
