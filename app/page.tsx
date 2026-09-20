'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  FileCheck,
  GraduationCap,
  History,
  Inbox,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  PlusCircle,
  Send,
  Sparkles,
  Trophy,
  UploadCloud,
  Users,
  X
} from 'lucide-react';

export default function SaitRedesignChallenge() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Tab States
  const [teamTab, setTeamTab] = useState<'exec' | 'tech' | 'media' | 'events' | 'pr'>('exec');
  const [eventTab, setEventTab] = useState<'upcoming' | 'past'>('upcoming');
  const [loggerTab, setLoggerTab] = useState<'submit' | 'feed'>('submit');

  // Activity Logger Form State
  const [activities, setActivities] = useState([
    {
      id: 1,
      studentName: 'Naveen Kurian (S5 IT)',
      eventName: 'Smart India Hackathon 2026',
      type: 'Technical Hackathon',
      role: 'Team Lead',
      proofUrl: 'https://drive.google.com/proof-sih',
      status: 'Verified',
      points: '+100 Activity Pts',
      date: 'Aug 28, 2026'
    },
    {
      id: 2,
      studentName: 'Aiswarya Raj (S7 IT)',
      eventName: 'IEEE Kerala Section Conf Paper Publication',
      type: 'Research Paper',
      role: 'First Author',
      proofUrl: 'https://ieee.org/abstract/98231',
      status: 'Verified',
      points: '+80 Activity Pts',
      date: 'Jul 14, 2026'
    }
  ]);

  const [formInput, setFormInput] = useState({
    name: '',
    eventName: '',
    type: 'Hackathon',
    role: 'Participant',
    proofUrl: ''
  });

  const [formSuccess, setFormSuccess] = useState(false);

  const handleActivitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formInput.name || !formInput.eventName) return;
    const newEntry = {
      id: activities.length + 1,
      studentName: formInput.name,
      eventName: formInput.eventName,
      type: formInput.type,
      role: formInput.role,
      proofUrl: formInput.proofUrl || 'https://cusat.ac.in',
      status: 'Pending Verification',
      points: '+50 Pts (Pending)',
      date: 'Just now'
    };
    setActivities([newEntry, ...activities]);
    setFormSuccess(true);
    setFormInput({ name: '', eventName: '', type: 'Hackathon', role: 'Participant', proofUrl: '' });
    setTimeout(() => setFormSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white antialiased">

      {/* TOP NOTIFICATION BANNER */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-violet-700 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-purple-300 animate-ping"></span>
        <span><strong>SAIT Notice:</strong> Division of IT Odd-Semester Internal Assessment Schedules Released!</span>
        <a href="#notifications" className="underline font-bold hover:text-purple-200 ml-1">View Details</a>
      </div>

      {/* HEADER & NAVIGATION WITH SAIT LOGO */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* SAIT LOGO */}
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-500/40 p-1 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <img 
                src="https://soe.cusat.ac.in/images/soe_logo.png" 
                alt="SAIT Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback logo badge if external asset is blocked
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-extrabold text-purple-400 text-xs">SAIT</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-lg tracking-tight">SAIT</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">SOE CUSAT</span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">Division of Information Technology</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#people" className="hover:text-purple-400 transition">Team</a>
            <a href="#events" className="hover:text-purple-400 transition">Events</a>
            <a href="#placements" className="hover:text-purple-400 transition">Careers</a>
            <a href="#alumni" className="hover:text-purple-400 transition">Alumni</a>
            <a href="#achievements" className="hover:text-purple-400 transition">Hall of Fame</a>
            <a href="#activity-logger" className="text-purple-400 flex items-center gap-1 hover:text-purple-300 transition">
              <Sparkles size={13} /> Activity Logger
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#activity-logger"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide transition shadow-lg shadow-purple-600/30 flex items-center gap-1.5"
            >
              <PlusCircle size={14} /> Log Activity
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-900/98 px-6 py-5 space-y-3 text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">About & Faculty</a>
            <a href="#people" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Association & Teams</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Events & Workshops</a>
            <a href="#placements" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Placements & Recruiter Marquee</a>
            <a href="#alumni" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Alumni Spotlight</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Achievements</a>
            <a href="#activity-logger" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-purple-400 font-semibold">Student Activity Logger</a>
            <a href="#notifications" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Notices</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-300 hover:text-purple-400">Contact & Map</a>
          </div>
        )}
      </header>

      {/* SECTION A: HERO / LANDING */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-semibold mb-6 shadow-inner">
            <Sparkles size={14} className="text-purple-400 animate-pulse" />
            <span>Students Association of Information Technology &bull; SOE CUSAT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Where Code Meets Curiosity,{' '}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Engineered for Excellence.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Representing 400+ undergraduate technologists in the Division of Information Technology at Cochin University of Science and Technology.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#events"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
            >
              Explore Flagship Events <ChevronRight size={16} />
            </a>
            <a
              href="#activity-logger"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition flex items-center justify-center gap-2"
            >
              <FileCheck size={16} className="text-purple-400" /> Student Activity Logger
            </a>
          </div>

          {/* Department Campus Hero Photo */}
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
            <img 
              src="https://cusat.ac.in/images/slider/1.jpg" 
              alt="CUSAT SOE Campus" 
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { val: '1995', label: 'Estd. at CUSAT' },
              { val: '95%+', label: 'Placement Ratio' },
              { val: '₹28 LPA', label: 'Highest Package' },
              { val: '1,500+', label: 'Global Tech Alumni' }
            ].map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                <p className="text-3xl font-black text-white">{stat.val}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B: ABOUT THE DEPARTMENT & SAIT */}
      <section id="about" className="py-20 border-t border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Heritage & Leadership</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">About Division of IT & SAIT</h2>
            <p className="text-slate-400 text-sm mt-2">
              Pioneering computing education, cutting-edge software systems, and student leadership since 1995 under the School of Engineering.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Department Vision</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                To emerge as a centre of excellence in Information Technology education and applied research, empowering students to innovate ethically, address societal challenges, and adapt to disruptive computational paradigms.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Department Mission</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Provide comprehensive, industry-relevant curriculum in software engineering, cybersecurity, and artificial intelligence, backed by hands-on labs, faculty-led research, and student-run technical societies like SAIT.
              </p>
            </div>
          </div>

          {/* Faculty & Administration Directory with Photos */}
          <div className="mb-14">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-purple-400" /> Faculty & Staff Administration
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { 
                  name: 'Dr. Jabir', 
                  role: 'Head of Division (HoD)', 
                  spec: 'Artificial Intelligence & Distributed Systems',
                  img: 'https://soe.cusat.ac.in/images/faculty/jabir.jpg' 
                },
                { 
                  name: 'Dr. Santosh Kumar M. B.', 
                  role: 'Staff Coordinator, SAIT', 
                  spec: 'Network Security & High Performance Computing',
                  img: 'https://soe.cusat.ac.in/images/faculty/santosh.jpg' 
                },
                { 
                  name: 'Dr. Preetha S.', 
                  role: 'Associate Professor', 
                  spec: 'Machine Learning & Cloud Architecture',
                  img: 'https://soe.cusat.ac.in/images/faculty/preetha.jpg' 
                },
              ].map((faculty, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-purple-500/40 bg-slate-800">
                    <img 
                      src={faculty.img} 
                      alt={faculty.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-white text-base">{faculty.name}</h4>
                  <p className="text-purple-400 text-xs font-semibold mt-0.5">{faculty.role}</p>
                  <p className="text-slate-400 text-xs mt-2">{faculty.spec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Academic Resource Links */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white text-sm">Official Academic Portals</h4>
              <p className="text-xs text-slate-400">Curriculum syllabus, CUSAT exam results, and course regulation documents.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://cusat.ac.in" target="_blank" rel="noreferrer" className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 flex items-center gap-1">
                CUSAT Portal <ExternalLink size={12} />
              </a>
              <a href="https://soe.cusat.ac.in" target="_blank" rel="noreferrer" className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 flex items-center gap-1">
                SOE Academic Regulation <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: ASSOCIATION & PEOPLE */}
      <section id="people" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold flex items-center justify-center gap-1">
            <Users size={15} /> Student Committee
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">SAIT Association & Teams</h2>
          <p className="text-slate-400 text-sm mt-2">
            Meet the students driving technology, event production, logistics, and content for the IT division.
          </p>

          {/* Team Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { id: 'exec', label: 'Executive Council' },
              { id: 'tech', label: 'Tech & Dev' },
              { id: 'events', label: 'Events & Ops' },
              { id: 'media', label: 'Media & Design' },
              { id: 'pr', label: 'PR & Content' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTeamTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  teamTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Member Cards with Existing Website Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Kiran Kuruvilla', role: teamTab === 'exec' ? 'President' : 'Team Lead', batch: 'B.Tech IT 2023-27', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80' },
            { name: 'Devika Nair', role: teamTab === 'exec' ? 'Vice President' : 'Sub-Lead', batch: 'B.Tech IT 2023-27', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80' },
            { name: 'Aakash Mathew', role: teamTab === 'exec' ? 'Secretary' : 'Associate', batch: 'B.Tech IT 2024-28', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80' },
            { name: 'Fathima S.', role: teamTab === 'exec' ? 'Treasurer' : 'Associate', batch: 'B.Tech IT 2023-27', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80' },
          ].map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center group hover:border-purple-500/40 transition">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-slate-800 group-hover:ring-purple-400 transition">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-white text-base">{m.name}</h4>
              <p className="text-purple-400 text-xs font-semibold mt-0.5">{m.role}</p>
              <p className="text-slate-400 text-xs mt-1">{m.batch}</p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION D: EVENTS & ACTIVITIES */}
      <section id="events" className="py-20 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Calendar</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Events & Workshops</h2>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setEventTab('upcoming')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                  eventTab === 'upcoming' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setEventTab('past')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                  eventTab === 'past' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                }`}
              >
                Past Event Archive
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(eventTab === 'upcoming' ? [
              {
                title: 'HackIT 2026: 36h Intra-College Hackathon',
                type: 'Flagship Hackathon',
                date: 'OCT 24-25, 2026',
                venue: 'IT Software Labs 1 & 2',
                desc: '36 hours of relentless development focusing on Web3, AI Copilots, and Smart CUSAT Campus solutions. Prizes worth ₹60,000.',
                open: true,
                img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=80'
              },
              {
                title: 'Hands-on Kubernetes & Docker Lab',
                type: 'Technical Workshop',
                date: 'NOV 07, 2026',
                venue: 'Seminar Hall, IT Block',
                desc: 'Alumni-led boot camp on microservice architectures, cluster orchestration, and production deployment best practices.',
                open: true,
                img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80'
              },
              {
                title: 'Competitive DSA Sprint Series',
                type: 'Coding Contest',
                date: 'NOV 20, 2026',
                venue: 'HackerRank & IT Lab 3',
                desc: 'Comprehensive algorithmic speed programming round designed to prep 2nd and 3rd-year students for product company drives.',
                open: false,
                img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=80'
              },
            ] : [
              {
                title: 'Linux Kernel & Open Source Day 2025',
                type: 'Archive 2025',
                date: 'MARCH 15, 2025',
                venue: 'SOE Auditorium',
                desc: 'Over 200 students installed Arch Linux, built custom kernels, and contributed their first PRs to active open source repos.',
                open: false,
                img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80'
              },
              {
                title: 'CyberDefend CTF Invitational',
                type: 'Archive 2025',
                date: 'JAN 22, 2025',
                venue: 'Virtual CUSAT Servers',
                desc: 'Intense 12-hour capture-the-flag tournament testing cryptanalysis, reverse engineering, and web vulnerability exploits.',
                open: false,
                img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=80'
              },
              {
                title: 'DevOps & AWS Cloud Immersion',
                type: 'Archive 2024',
                date: 'OCT 10, 2024',
                venue: 'IT Seminar Hall',
                desc: 'Hands-on deployment of production Next.js apps with automated PostgreSQL failovers and terraform configuration.',
                open: false,
                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80'
              },
            ]).map((evt, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between">
                <div className="h-40 overflow-hidden relative">
                  <img src={evt.img} alt={evt.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-900/90 text-purple-200 border border-purple-500/40 backdrop-blur-sm">
                      {evt.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-purple-400 flex items-center gap-1 mb-2">
                      <Calendar size={13} /> {evt.date}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{evt.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{evt.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-4 flex items-center gap-1">
                      <MapPin size={13} className="text-purple-400" /> {evt.venue}
                    </p>
                    <button
                      disabled={!evt.open}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                        evt.open ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/30' : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      {evt.open ? 'Register on Luma' : 'Registration Closed'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: PLACEMENTS & CAREERS */}
      <section id="placements" className="py-16 border-t border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Career Matrix</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Placements & Corporate Partners</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Our students consistently secure roles across cloud infrastructure, machine learning engineering, and product management.
          </p>
        </div>

        {/* Infinite Recruiters Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {['Cisco', 'Amazon', 'IBM', 'Oracle', 'TCS Digital', 'Infosys', 'Cognizant', 'UST Global', 'Wipro', 'SAP Labs', 'Accenture', 'KeyValue', 'Cisco', 'Amazon', 'IBM', 'Oracle'].map((c, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm">
                <CheckCircle2 size={16} className="text-purple-400" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: ALUMNI SPOTLIGHT */}
      <section id="alumni" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Legacy</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Alumni Community Spotlight</h2>
          <p className="text-slate-400 text-xs mt-2">
            Graduates from the Division of IT shaping leading global tech organizations and high-growth ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Abhiram Chandran',
              batch: 'Class of 2018',
              designation: 'Senior Infrastructure Engineer @ AWS',
              achievement: 'Architected distributed caching layers processing 1.4M QPS. Active mentor for SAIT cloud bootcamps.',
            },
            {
              name: 'Gopika B.',
              batch: 'Class of 2020',
              designation: 'Staff Security Researcher @ Cisco',
              achievement: 'Discovered zero-day vulnerability in SDN flow controllers (CVE-2023). Regular speaker at nullcon.',
            },
            {
              name: 'Fahad Mohammed',
              batch: 'Class of 2021',
              designation: 'Founder & CTO @ ScaleLogic AI',
              achievement: 'YC-backed founder developing AI agents for automated code compliance. Raised $2.4M seed funding.',
            },
          ].map((alum, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {alum.batch}
              </span>
              <h3 className="font-bold text-white text-lg mt-3">{alum.name}</h3>
              <p className="text-purple-400 text-xs font-semibold mt-0.5">{alum.designation}</p>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed">{alum.achievement}</p>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-purple-400 font-semibold mt-4">
                View LinkedIn Profile <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION G: ACHIEVEMENTS / HALL OF FAME */}
      <section id="achievements" className="py-20 border-t border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold flex items-center justify-center gap-1">
              <Trophy size={16} /> Hall of Fame
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Student & Department Accolades</h2>
            <p className="text-slate-400 text-xs mt-2">
              Recognizing national hackathon triumphs, published research, and technical distinctions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Smart India Hackathon (SIH) 1st Prize</h3>
                <p className="text-xs text-amber-400 font-semibold mt-0.5">Ministry of Jal Shakti Track &bull; ₹1,00,000</p>
                <p className="text-xs text-slate-400 mt-2">Built an automated edge-AI river pollution detection model with low-power solar sensors.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Best Paper Award @ IEEE CSNT</h3>
                <p className="text-xs text-purple-400 font-semibold mt-0.5">Undergraduate Research Division</p>
                <p className="text-xs text-slate-400 mt-2">Published novel benchmark on Federated Learning privacy preservation in edge health systems.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Kochi Cyber Police Hackathon Champions</h3>
                <p className="text-xs text-emerald-400 font-semibold mt-0.5">Digital Forensics Track</p>
                <p className="text-xs text-slate-400 mt-2">Created automated malware analysis sandbox for identifying UPI phishing vectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: STUDENT ACTIVITY LOGGER */}
      <section id="activity-logger" className="py-20 border-t border-slate-900 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-bold flex items-center justify-center gap-1.5">
              <FileCheck size={16} /> Interactive Feature
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Student Activity Logger & Portfolio</h2>
            <p className="text-slate-400 text-xs mt-2">
              Log your technical competitions, workshop certifications, and paper presentations to earn verified KTU/CUSAT activity points.
            </p>

            <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 mt-6">
              <button
                onClick={() => setLoggerTab('submit')}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                  loggerTab === 'submit' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <PlusCircle size={14} /> Submit New Activity
              </button>
              <button
                onClick={() => setLoggerTab('feed')}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                  loggerTab === 'feed' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers size={14} /> Verified Feed & Leaderboard ({activities.length})
              </button>
            </div>
          </div>

          {loggerTab === 'submit' ? (
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Record an Extracurricular or Technical Milestone</h3>
              <p className="text-xs text-slate-400 mb-6">Submissions will be cross-checked by SAIT faculty coordinators for activity point approval.</p>

              {formSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Activity logged successfully! Check the &quot;Verified Feed&quot; tab to inspect status.
                </div>
              )}

              <form onSubmit={handleActivitySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Student Name & Roll No.</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sen (S6 IT)"
                      value={formInput.name}
                      onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Event / Competition Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HackIT 2026 or Coursera ML"
                      value={formInput.eventName}
                      onChange={(e) => setFormInput({ ...formInput, eventName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Activity Category</label>
                    <select
                      value={formInput.type}
                      onChange={(e) => setFormInput({ ...formInput, type: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="Hackathon">Hackathon / Coding Contest</option>
                      <option value="Workshop">Technical Workshop / Bootcamp</option>
                      <option value="Research Paper">Research Paper Publication</option>
                      <option value="Volunteering">SAIT Organizing Committee</option>
                      <option value="Online Course">NPTEL / Coursera Certification</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Role</label>
                    <input
                      type="text"
                      required
                      placeholder="Participant / Winner / Speaker"
                      value={formInput.role}
                      onChange={(e) => setFormInput({ ...formInput, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Proof URL (Drive Link / Certificate / GitHub)</label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/file/d/..."
                    value={formInput.proofUrl}
                    onChange={(e) => setFormInput({ ...formInput, proofUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 mt-4"
                >
                  <UploadCloud size={16} /> Submit for SAIT Verification
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {activities.map((act) => (
                <div key={act.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm">{act.studentName}</h4>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                        act.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        {act.status}
                      </span>
                    </div>
                    <p className="text-purple-400 font-semibold text-xs mt-1">{act.eventName} &bull; <span className="text-slate-400">{act.role}</span></p>
                    <p className="text-slate-400 text-[11px] mt-1">Category: {act.type} &bull; Logged: {act.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      {act.points}
                    </span>
                    <a
                      href={act.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1"
                    >
                      Proof <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION I: NOTIFICATIONS & ANNOUNCEMENTS */}
      <section id="notifications" className="py-20 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Live Noticeboard</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Official Notices & Circulars</h2>
            </div>
            <p className="text-xs text-slate-400">Regularly updated with department alerts, exam forms, and hall tickets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'S3, S5, S7 B.Tech End-Semester Lab Exam Time Table', date: 'Published: Sept 18, 2026', tag: 'Exams' },
              { title: 'Campus Drive: Cisco Systems (Software Engineer 1) Shortlist', date: 'Published: Sept 15, 2026', tag: 'Placements' },
              { title: 'SAIT Website Redesign Challenge Final Submission Guidelines', date: 'Published: Sept 10, 2026', tag: 'SAIT Event' },
              { title: 'Hostel Re-admission and Mess Fee Notice for Odd Semester', date: 'Published: Sept 02, 2026', tag: 'Hostel' },
            ].map((n, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-purple-400">{n.tag}</span>
                  <h4 className="font-bold text-white text-sm mt-1">{n.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{n.date}</p>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex-shrink-0">
                  Read PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION L: FOOTER & CONTACT */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950 py-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Info & Campus Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-white text-base">
              <GraduationCap className="text-purple-400" size={20} /> Division of Information Technology
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              School of Engineering, Cochin University of Science and Technology (CUSAT), South Kalamassery, Kochi, Kerala 682022.
            </p>
            <div className="space-y-1 text-xs">
              <p><strong className="text-white">Email:</strong> sait@cusat.ac.in</p>
              <p><strong className="text-white">Phone:</strong> +91 484 2575534</p>
            </div>
            {/* Map Frame UI */}
            <div className="w-full h-32 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden relative flex items-center justify-center">
              <div className="text-center p-3">
                <MapPin className="text-purple-400 mx-auto mb-1" size={20} />
                <p className="text-white font-bold text-[11px]">IT Block, SOE CUSAT Campus</p>
                <a
                  href="https://maps.google.com/?q=School+of+Engineering+CUSAT+Kalamassery"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 text-[10px] underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-3">Redesign Hub</p>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-purple-400 transition">About & Vision</a></li>
                <li><a href="#people" className="hover:text-purple-400 transition">Exec Committee</a></li>
                <li><a href="#events" className="hover:text-purple-400 transition">HackIT 2026</a></li>
                <li><a href="#placements" className="hover:text-purple-400 transition">Placements Marquee</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-3">Portals</p>
              <ul className="space-y-2">
                <li><a href="#activity-logger" className="hover:text-purple-400 transition">Activity Logger</a></li>
                <li><a href="#achievements" className="hover:text-purple-400 transition">Hall of Fame</a></li>
                <li><a href="#notifications" className="hover:text-purple-400 transition">Official Notices</a></li>
                <li><a href="https://cusat.ac.in" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">CUSAT Main Site</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Form UI */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5">
              <MessageSquare size={16} className="text-purple-400" /> Send a Note to SAIT
            </h3>
            <p className="text-[11px] text-slate-400 mb-4">Have an idea for a workshop or partnership? Drop a message.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent to SAIT Executive Team!'); }} className="space-y-3">
              <input
                type="email"
                required
                placeholder="your.email@cusat.ac.in"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
              />
              <textarea
                required
                rows={2}
                placeholder="How can SAIT support your project or query?"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500 resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-lg shadow-purple-600/30"
              >
                <Send size={13} /> Send Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 text-center text-slate-400 text-[11px]">
          &copy; {new Date().getFullYear()} Students Association of Information Technology (SAIT), SOE, CUSAT. Submitted for the SAIT Website Redesign Challenge.
        </div>
      </footer>
    </div>
  );
}

