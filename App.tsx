import React, { useState, useEffect, ReactNode } from 'react';
import { PROFILE, EXPERIENCES, PROJECTS, SKILLS, SOCIAL_LINKS, ORGANIZATIONS_VOLUNTEERS, CERTIFICATIONS } from './constants';
import { Project, Skill } from './types';

// --- Helper Components ---

const SectionTitle = ({ children, subtitle }: { children?: ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full opacity-80"></span>
    </h2>
    {subtitle && <p className="text-slate-600 dark:text-slate-200 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${active ? 'text-primary' : 'text-slate-700 hover:text-primary dark:text-slate-200 dark:hover:text-white'
      }`}
  >
    {label}
  </a>
);

// --- Main Sections ---

const Navbar = ({ isDarkMode, onToggleTheme }: { isDarkMode: boolean; onToggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'organizations', label: 'Organizations' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:bg-slate-900/90 dark:border-slate-800' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-slate-950 dark:text-white tracking-wider">
              MRA<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                label={item.label}
                active={false}
                onClick={() => { }}
              />
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-primary"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-primary"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white p-2"
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full dark:bg-slate-900 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 text-center sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:text-left">
        <div className="order-2 lg:order-1">
          <div className="glass-card inline-block px-4 py-1 rounded-full mb-6 shadow-sm dark:shadow-none">
            <span className="text-primary text-sm font-mono font-medium">Welcome To My Portfolio</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-6">
            {PROFILE.name}
          </h1>

          <p className="text-lg md:text-2xl text-primary font-medium mb-6">
            {PROFILE.role}
          </p>

          <p className="max-w-4xl mx-auto text-slate-700 dark:text-slate-200 text-base md:text-lg mb-10 leading-relaxed lg:mx-0">
            {PROFILE.bio}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:justify-start">
            <a href="#projects" className="px-8 py-3 bg-primary text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-white border border-slate-300 text-slate-900 font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-300 dark:bg-transparent dark:border-slate-600 dark:text-white">
              Contact Me
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-500 dark:text-slate-400 lg:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-950 dark:text-white">10+</div>
              <div className="text-xs uppercase tracking-wide mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-950 dark:text-white">1.5+</div>
              <div className="text-xs uppercase tracking-wide mt-1">Years Exp</div>
            </div>
            {/* <div className="text-center">
              <div className="text-2xl font-bold text-white">3.79</div>
              <div className="text-xs uppercase tracking-wide mt-1">GPA</div>
            </div> */}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30"></div>
            <img
              src="/foto/profile.jpg"
              alt={PROFILE.name}
              className="relative h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl shadow-emerald-500/20 dark:border-slate-700 dark:shadow-emerald-400/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Education & Skills
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="glass-card p-8 rounded-2xl h-full shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-3">
              <i className="fa-solid fa-graduation-cap text-primary"></i> Education
            </h3>
            <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-1">
              <h4 className="text-lg font-semibold text-slate-950 dark:text-white">{PROFILE.education.university}</h4>
              <p className="text-slate-600 dark:text-slate-200 text-sm mb-2">{PROFILE.education.degree}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-xs text-primary font-mono">{PROFILE.education.period}</span>
                <span className="text-slate-950 dark:text-white font-bold text-sm">GPA: {PROFILE.education.gpa}</span>
              </div>
            </div>
            <div className="mt-6">
              <ul className="space-y-3">
                {PROFILE.education.highlights.map((item, index) => (
                  <li key={index} className="flex items-start text-slate-600 dark:text-slate-200 text-sm leading-relaxed">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6">
            {SKILLS.map((skillGroup: Skill, index: number) => (
              <div key={index} className="glass-card p-6 rounded-2xl shadow-sm dark:shadow-none">
                <h4 className="text-slate-950 dark:text-white font-semibold mb-4 flex items-center gap-2">
                  <i className={`${skillGroup.icon} text-primary text-sm`}></i> {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-colors cursor-default dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Professional Experience
        </SectionTitle>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0 group">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>

              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-2 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

              <div className={`flex flex-col md:flex-row items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>

                {/* Dot */}
                <div className="absolute left-2 md:left-[50%] w-4 h-4 rounded-full bg-primary border-4 border-slate-50 dark:border-slate-900 -translate-x-1.5 md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

                {/* Content Spacer for Desktop */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Card */}
                <div className="w-full md:w-[45%] glass-card p-6 rounded-xl shadow-sm hover:bg-white transition-all duration-300 dark:shadow-none dark:hover:bg-slate-800/80">
                  {exp.imageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={exp.imageUrl}
                        alt={exp.company}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{exp.role}</h3>
                    <h4 className="text-primary font-medium text-sm">{exp.company}</h4>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span><i className="fa-regular fa-calendar mr-1"></i> {exp.period}</span>
                      <span><i className="fa-solid fa-location-dot mr-1"></i> {exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-200 text-sm flex items-start">
                        <span className="text-primary mr-2 mt-1.5 text-[8px]">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = [
    'All',
    'Data Science',
    'Database',
    'Data Visualization',
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 dark:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Projects
        </SectionTitle>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-primary text-slate-900'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-sm dark:shadow-none">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors dark:bg-slate-900/20"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-xs font-bold text-white rounded border border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {/* <p className="text-slate-200 text-sm mb-6 flex-1">
                  {project.description}
                </p> */}

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700/50">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary font-semibold hover:underline">
                      View Details <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OrganizationsVolunteers = () => {
  return (
    <section id="organizations" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Organizational & Volunteer Experience
        </SectionTitle>

        <div className="space-y-12">
          {ORGANIZATIONS_VOLUNTEERS.map((org, index) => (
            <div key={org.id} className="relative pl-8 md:pl-0 group">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>

              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-2 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

              <div className={`flex flex-col md:flex-row items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>

                {/* Dot */}
                <div className="absolute left-2 md:left-[50%] w-4 h-4 rounded-full bg-primary border-4 border-slate-50 dark:border-slate-900 -translate-x-1.5 md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

                {/* Content Spacer for Desktop */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Card */}
                <div className="w-full md:w-[45%] glass-card p-6 rounded-xl shadow-sm hover:bg-white transition-all duration-300 dark:shadow-none dark:hover:bg-slate-800/80">
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-bold rounded ${org.type === 'organization'
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                          : 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                        }`}>
                        {org.type === 'organization' ? 'Organization' : 'Volunteer'}
                      </span>
                    </div>
                    {org.imageUrl && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={org.imageUrl}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{org.organization}</h3>
                    <h4 className="text-primary font-medium text-sm">{org.role}</h4>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span><i className="fa-regular fa-calendar mr-1"></i> {org.period}</span>
                      <span><i className="fa-solid fa-location-dot mr-1"></i> {org.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {org.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-200 text-sm flex items-start">
                        <span className="text-primary mr-2 mt-1.5 text-[8px]">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900 dark:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Certifications
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-xl shadow-sm hover:bg-white transition-all duration-300 group dark:shadow-none dark:hover:bg-slate-800/80">
              <div className="flex items-start justify-between mb-4">
                {/* <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <i className="fa-solid fa-certificate text-primary text-xl"></i>
                </div> */}
                <span className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-200 text-sm">
                {cert.issuer}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-100 pt-20 pb-10 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* Left Column: Contact Details (Swapped) */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="group flex items-center gap-4 hover:text-slate-950 transition-colors dark:hover:text-white">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-colors shrink-0">
                <i className="fa-solid fa-envelope text-xl"></i>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-sm block">Email</span>
                <a href={`mailto:${PROFILE.email}`} className="text-lg font-medium text-slate-800 dark:text-slate-200">{PROFILE.email}</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 hover:text-slate-950 transition-colors dark:hover:text-white">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-colors shrink-0">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-sm block">LinkedIn</span>
                <a href="https://www.linkedin.com/in/ridhoalfa" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-800 dark:text-slate-200">Muhammad Ridho Alfarid</a>
                <span className="text-xs text-slate-500 dark:text-slate-400 block"></span>
              </div>
            </div>

            <div className="group flex items-center gap-4 hover:text-slate-950 transition-colors dark:hover:text-white">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-colors shrink-0">
                <i className="fa-brands fa-github text-xl"></i>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-sm block">GitHub</span>
                <a href="https://github.com/ridhoalfarid" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-800 dark:text-slate-200">ridhoalfarid</a>
                <span className="text-xs text-slate-500 dark:text-slate-400 block"></span>
              </div>
            </div>

            <div className="group flex items-center gap-4 hover:text-slate-950 transition-colors dark:hover:text-white">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-slate-50 dark:group-hover:bg-slate-700 transition-colors shrink-0">
                <i className="fa-brands fa-medium text-xl"></i>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-sm block">Medium</span>
                <a href="https://medium.com/@ridhoalfarid95" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-800 dark:text-slate-200">Muhammad Ridho Alfarid</a>
                <span className="text-xs text-slate-500 dark:text-slate-400 block"></span>
              </div>
            </div>
          </div>

          {/* Right Column: CTA (Swapped) */}
          <div className="flex flex-col md:items-start md:text-right">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-6">Let's Work Together</h2>
            <p className="text-slate-600 dark:text-slate-200 mb-8 max-w-md md:text-left">
              I am open to internship and full-time opportunities in Business Intelligence, Data Science, Machine Learning, and related fields.
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a href="https://www.linkedin.com/in/ridhoalfa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-colors">
                Say Hello
              </a>
              <a href="https://drive.google.com/drive/folders/16q3iZdy3kad0YyB_hzhKQP9fjrh6L8BJ?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors border border-slate-300 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:border-slate-700">
                Download CV
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Muhammad Ridho Alfarid. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-200 hover:text-primary transition-colors text-xl">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-300">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((current) => !current)} />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <OrganizationsVolunteers />
      <Certifications />
      <Footer />
    </div>
  );
};

export default App;
