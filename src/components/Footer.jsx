import { useState, useEffect, useRef } from "react";

const INFO = {
    name: "Soumya Ranjan Sahoo",
    initials: "SRS",
    email: "soumya1874@gmail.com",
    phone: "+91 7609838533",
    city: "Bhubaneswar, Odisha",
    linkedin: "https://www.linkedin.com/in/soumya1974",
    github: "https://github.com/Soumya1974",
    discord: "https://discord.com/users/843507182020067339",
};

const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Techstack", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const SERVICES = [
    "Web Development",
    "UI/UX Design",
    "API Integration",
    "Open Source",
];

const MARQUEE_ITEMS = [
    "React", "Tailwind CSS", "Node.js", "TypeScript", "UI/UX Design",
    "Blender", "REST APIs", "Open to Work", "Bhubaneswar", "Full Stack Dev",
];

const IconGitHub = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const IconLinkedIn = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const IconDiscord = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

function Logo() {

    return (

        <div className="flex items-center gap-3 cursor-pointer select-none group">

            <div className="relative w-12 h-12 flex items-center justify-center">
                <svg
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:rotate-180"
                    viewBox="0 0 48 48" fill="none"
                >
                    <polygon points="24,2 44,13 44,35 24,46 4,35 4,13"
                        stroke="white" strokeWidth="1.2" fill="none" />
                    <polygon points="24,7 39,15.5 39,32.5 24,41 9,32.5 9,15.5"
                        stroke="white" strokeWidth="0.4" fill="none" opacity="0.25" />
                </svg>
                <span className="text-white text-xs font-medium tracking-widest z-10">SRS</span>
            </div>

            <div>
                <div className="text-white text-sm font-medium tracking-wider leading-tight">
                    Soumya Ranjan
                </div>
                <div className="text-neutral-500 text-xs tracking-widest">Sahoo</div>
            </div>
        </div>
    );
}

function useInView(ref) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return visible;
}

export default function Footer() {
    const ref = useRef(null);
    const visible = useInView(ref);
    const year = new Date().getFullYear();

    const reveal = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s cubic-bezier(.22,1,.36,1)`,
    });

    return (
        <>
            <style>{`
 
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes shimmer-text {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes divider-sweep {
          from { left: -60%; }
          to   { left: 110%; }
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .4; transform: scale(.7); }
        }
        @keyframes scanline {
          0%   { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes logo-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,.15); }
          50%      { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
 
        .marquee-track {
          animation: marquee 20s linear infinite;
          white-space: nowrap;
          display: inline-flex;
        }
        .marquee-track:hover { animation-play-state: paused; }
 
        .cursor-blink { animation: blink 1.1s step-end infinite; }
 
        .shimmer-headline {
          background: linear-gradient(90deg, #fff 0%, #fff 38%, #a3a3a3 50%, #fff 62%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: 3.5s linear infinite;
        }
 
        .link-ul {
          position: relative;
          display: inline-block;
          transition: color .2s;
        }
        .link-ul::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          height: 1px; width: 0;
          background: #fff;
          transition: width .25s cubic-bezier(.22,1,.36,1);
        }
        .link-ul:hover::after { width: 100%; }
        .link-ul:hover { color: #fff !important; }
 
        .social-icon-btn {
          border: 1px solid #2a2a2a;
          color: white;
          transition: border-color .2s, background .2s, transform .18s, color .2s;
        }
        .social-icon-btn:hover {
          border-color: #fff;
          background: #fff;
          color: #000;
          transform: translateY(-4px);
        }
 
        .dot-pulse-anim { animation: dot-pulse 1.5s ease-in-out infinite; }
 
        .noise-texture {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0; opacity: .022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }
        
        .scanline-wrap { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
        .scanline-el {
          position: absolute; left: 0; right: 0; height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,.025), transparent);
          animation: scanline 6s linear infinite;
        }
 
        .cta-btn {
          position: relative; overflow: hidden;
          border: 1px solid #fff; color: #fff;
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .75rem; letter-spacing: .12em;
          padding: 12px 20px;
          transition: color .25s;
          text-decoration: none;
        }
        .cta-btn::before {
          content: ''; position: absolute; inset: 0;
          background: #fff; transform: translateX(-101%);
          transition: transform .3s cubic-bezier(.22,1,.36,1); z-index: 0;
        }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { color: #000; }
        .cta-btn > * { position: relative; z-index: 1; }
      `}</style>

            <footer
                ref={ref}
                className="footer-root relative w-full bg-gray-900 overflow-hidden"
            >


                <div className="relative z-10 border-t border-b overflow-hidden py-3"
                    style={{ borderColor: "#1a1a1a" }}>
                    <div className="flex">
                        <div className="marquee-track">
                            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                                <span key={i} className="flex items-center gap-3 px-6 text-xs text-neutral-500 tracking-widest">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-14 pb-8">

                    <div className="mb-12" style={reveal(0)}>
                        <h2
                            className="shimmer-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-3 font-bold"
                        >
                            Let's build<br />
                            <span>something</span> great.
                        </h2>
                        <p className="text-neutral-500 text-xs tracking-widest mt-4 flex items-center gap-2">
                            <span className="dot-pulse-anim inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                            Available for freelance &amp; full-time roles
                        </p>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                        <div className="flex flex-col gap-5" style={reveal(0.05)}>
                            <Logo />
                            <p className="text-neutral-600 text-xs leading-relaxed max-w-50">
                                Full‑stack developer crafting clean, performant web experiences from Bhubaneswar.
                            </p>
                        </div>

                        <div style={reveal(0.12)}>
                            <p className="text-neutral-600 text-xs tracking-widest uppercase mb-5">Navigate</p>
                            <ul className="space-y-3">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <li key={label}>
                                        <a href={href} className="link-ul text-neutral-300 text-sm tracking-wide">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={reveal(0.2)}>
                            <p className="text-neutral-600 text-xs tracking-widest uppercase mb-5">Contact</p>
                            <ul className="space-y-3">
                                <li>
                                    <a href={`mailto:${INFO.email}`}
                                        className="link-ul text-neutral-300 text-sm tracking-wide break-all">
                                        {INFO.email}
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+917609838533"
                                        className="link-ul text-neutral-300 text-sm tracking-wide">
                                        {INFO.phone}
                                    </a>
                                </li>
                                <li>
                                    <span className="text-neutral-500 text-sm">{INFO.city}</span>
                                </li>
                                <li>
                                    <a href={INFO.discord} target="_blank" rel="noopener noreferrer"
                                        className="link-ul text-neutral-300 text-sm tracking-wide flex items-center gap-2">
                                        <span className="opacity-60 flex"><IconDiscord /></span>
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div style={reveal(0.28)}>
                            <p className="text-neutral-600 text-xs tracking-widest uppercase mb-5">Services</p>
                            <ul className="space-y-2 mb-6">
                                {SERVICES.map(s => (
                                    <li key={s}><span className="text-neutral-400 text-sm">{s}</span></li>
                                ))}
                            </ul>
                            <a href={`mailto:${INFO.email}`} className="cta-btn">
                                <span>Start a Project</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                        style={{ opacity: visible ? 1 : 0, transition: "opacity .9s .5s ease" }}
                    >

                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-neutral-600 text-xs tracking-widest">
                                © {year} <span className="text-neutral-300">Soumya Ranjan Sahoo</span>. All rights reserved.
                            </span>
                            <span className="cursor-blink text-white text-xs">_</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <a href={INFO.github} target="_blank" rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="social-icon-btn w-9 h-9 flex items-center justify-center">
                                <IconGitHub />
                            </a>
                            <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="social-icon-btn w-9 h-9 flex items-center justify-center">
                                <IconLinkedIn />
                            </a>
                            <a href={INFO.discord} target="_blank" rel="noopener noreferrer"
                                aria-label="Discord"
                                className="social-icon-btn w-9 h-9 flex items-center justify-center">
                                <IconDiscord />
                            </a>
                        </div>
                    </div>


                    <div
                        className="mt-7 text-neutral-700 text-xs tracking-widest text-center"
                        style={{ opacity: visible ? 1 : 0, transition: "opacity 1s .7s ease" }}
                    >
                        Designed &amp; built by Soumya.
                    </div>
                </div>
            </footer>
        </>
    );
}