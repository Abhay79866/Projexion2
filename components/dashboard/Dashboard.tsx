
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { LogOut, Save, TrendingUp, Users, Target, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Profile {
    id: string;
    full_name: string;
    website: string;
    goal: string;
    income: string;
    clients: number;
    email?: string; // Added email to interface, though it comes from auth user usually
}

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [userEmail, setUserEmail] = useState<string>('');

    // Form states
    const [goal, setGoal] = useState('');
    const [income, setIncome] = useState('');
    const [clients, setClients] = useState<number>(0);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            navigate('/login');
            return;
        }
        setUserEmail(user.email || '');
        fetchProfile(user.id);
    };

    const fetchProfile = async (userId: string) => {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error && error.code !== 'PGRST116') {
                console.error('Error fetching profile:', error);
            }

            if (data) {
                setProfile(data);
                setGoal(data.goal || '');
                setIncome(data.income || '');
                setClients(data.clients || 0);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    const handleSave = async () => {
        if (!profile) return;
        setSaving(true);
        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    goal,
                    income,
                    clients
                })
                .eq('id', profile.id);

            if (error) throw error;
            // Refresh local state to ensure consistency
            setProfile({ ...profile, goal, income, clients });
        } catch (error) {
            console.error('Error saving:', error);
            alert('Failed to save changes');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <Loader2 className="w-8 h-8 animate-spin text-[#CAF47E]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#CAF47E] selection:text-black pt-32">
            {/* Restored Navbar - Action Bar Style */}
            <nav className="fixed top-6 left-[200px] right-[200px] z-50 bg-white rounded-full py-3 px-6 shadow-xl shadow-black/20 text-slate-900 border border-white/20">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/20">
                            {/* Simple Circle Icon inside */}
                            <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold text-slate-900 hidden sm:block tracking-tight">
                            Projexion
                        </span>
                    </div>

                    {/* Center Navigation Links - Matching Image */}
                    <div className="hidden md:flex items-center gap-8">
                        <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</button>
                        <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Success Stories</button>
                        <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Audit Tool</button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Profile Name hidden to match image strictly or kept for utility? Image shows "Get Started" which implies public facing or different state. 
                                User asked for "UI as in the Image". Image has no profile name. 
                                However, this is a dashboard. I will keep the profile name but style it cleanly, 
                                OR replace it to match the image's "Get Started" button style but with "Logout" functionality. 
                                I'll keep the profile name for utility but make it subtle, and style the button like "Get Started" (Dark).
                             */}
                        <div className="text-right hidden lg:block pr-4 border-r border-slate-200 mr-2">
                            <p className="text-sm font-bold text-slate-900 leading-tight">{profile?.full_name || 'User'}</p>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-6 py-2.5 bg-[#0F172A] text-white rounded-full hover:bg-slate-800 transition-all font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Title Section (formerly Header) */}
                <header className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">Dashboard</h1>
                        <p className="text-zinc-400 text-lg">
                            Welcome back, <span className="text-[#CAF47E] font-semibold">{profile?.full_name || 'User'}</span>
                        </p>
                    </motion.div>
                </header>

                {/* User Info Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="bg-[#111] rounded-3xl p-8 mb-8 border border-zinc-900/50"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Email</label>
                            <p className="text-lg font-medium text-zinc-200 truncate">{userEmail}</p>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Name</label>
                            <p className="text-lg font-medium text-zinc-200 truncate">{profile?.full_name || '-'}</p>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Website</label>
                            <a href={profile?.website} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-zinc-200 hover:text-[#CAF47E] transition-colors truncate block">
                                {profile?.website || '-'}
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Main Stats / Inputs Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    {/* Goal Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-[#111] rounded-3xl p-6 border border-zinc-900 hover:border-zinc-800 focus-within:!border-[#CAF47E]/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#CAF47E] flex items-center justify-center text-black">
                                <Target className="w-6 h-6" />
                            </div>
                            <span className="text-lg font-bold">Goal</span>
                        </div>
                        <textarea
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            placeholder="What's your main goal?"
                            className="w-full bg-transparent text-zinc-300 placeholder:text-zinc-700 text-lg resize-none focus:outline-none min-h-[80px]"
                        />
                    </motion.div>

                    {/* Income Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative bg-[#111] rounded-3xl p-6 border border-zinc-900 hover:border-zinc-800 focus-within:!border-[#10B981]/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#10B981] flex items-center justify-center text-white">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <span className="text-lg font-bold">Monthly Income</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-2xl text-zinc-500 font-medium">$</span>
                            <input
                                type="text"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                placeholder="0"
                                className="w-full bg-transparent text-4xl font-bold text-white placeholder:text-zinc-800 focus:outline-none"
                            />
                        </div>
                    </motion.div>

                    {/* Clients Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group relative bg-[#111] rounded-3xl p-6 border border-zinc-900 hover:border-zinc-800 focus-within:!border-[#D946EF]/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#D946EF] flex items-center justify-center text-white">
                                <Users className="w-6 h-6" />
                            </div>
                            <span className="text-lg font-bold">Active Clients</span>
                        </div>
                        <input
                            type="number"
                            value={clients}
                            onChange={(e) => setClients(parseInt(e.target.value) || 0)}
                            placeholder="0"
                            className="w-full bg-transparent text-4xl font-bold text-white placeholder:text-zinc-800 focus:outline-none"
                        />
                    </motion.div>
                </div>

                {/* Save Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mb-16"
                >
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="group relative px-8 py-4 bg-[#CAF47E] hover:bg-[#bef264] text-black font-bold text-lg rounded-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {saving ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Saving...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Save className="w-5 h-5" />
                                Save Changes
                            </span>
                        )}
                        <div className="absolute inset-0 rounded-2xl bg-[#CAF47E] blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
                    </button>
                </motion.div>

                {/* Progress / Footer Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-[#111] rounded-3xl p-10 border border-zinc-900/50"
                >
                    <h3 className="text-2xl font-bold mb-8 text-zinc-100">Progress</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-bold text-[#D946EF]">{clients}</span>
                            <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Active Clients</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-bold text-[#10B981]">${income || '0'}</span>
                            <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Monthly Revenue</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-bold text-[#CAF47E]">{goal ? 'Set' : '-'}</span>
                            <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Goal Status</span>
                            {goal && <div className="h-1.5 w-12 bg-[#CAF47E] rounded-full mt-2" />}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Dashboard;
