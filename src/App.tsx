/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Layout, 
  Smartphone,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const PROJECTS = [
  {
    title: "E-Commerce Experience",
    description: "A high-end fashion store focusing on minimalist aesthetics and fluid transitions.",
    image: "https://picsum.photos/seed/fashion/800/600",
    tags: ["React", "Tailwind", "Motion"],
    link: "#"
  },
  {
    title: "Architectural Portfolio",
    description: "A clean, grid-based showcase for a leading architectural firm.",
    image: "https://picsum.photos/seed/architecture/800/600",
    tags: ["Next.js", "TypeScript", "Framer"],
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "A data-dense yet intuitive interface for cloud management.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["D3.js", "React", "Tailwind"],
    link: "#"
  }
];

const SKILLS = [
  { name: "UI/UX Design", icon: <Palette className="w-5 h-5" /> },
  { name: "Frontend Dev", icon: <Code className="w-5 h-5" /> },
  { name: "Responsive Layouts", icon: <Layout className="w-5 h-5" /> },
  { name: "Mobile First", icon: <Smartphone className="w-5 h-5" /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter uppercase">JC.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-sm font-medium uppercase tracking-wider"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              Available for projects
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Jayavihan <br />
              <span className="text-white/40 italic font-serif">Chamodye</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              A Web Designer crafting digital experiences that balance bold aesthetics with functional precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-6 ml-4">
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/designer/800/800" 
              alt="Jayavihan Chamodye" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500 mb-6">About Me</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-8">Designing with purpose, building with passion.</h3>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                I am Jayavihan Chamodye, a dedicated Web Designer based in Sri Lanka. My approach to design is rooted in minimalism—stripping away the unnecessary to let the core message shine. I believe that every pixel should serve a purpose.
              </p>
              <p>
                With a background in both visual arts and technical development, I bridge the gap between how a site looks and how it performs. I specialize in creating responsive, high-performance websites that tell a story and drive engagement.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500 mb-6">Selected Work</h2>
              <h3 className="text-5xl font-bold tracking-tight">Recent Projects</h3>
            </div>
            <a href="#" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
              View All Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                    Case Study <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500 mb-6">Expertise</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-16">My Skill Set</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col items-center gap-4 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  {skill.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500 mb-6">Get in touch</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">Let's build something <span className="text-white/40 italic font-serif">extraordinary</span> together.</h3>
          <p className="text-xl text-white/60 mb-12">
            Currently accepting new projects and collaborations. If you have an idea, let's talk.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:hello@jayavihan.com" 
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <div className="flex gap-6">
              <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
          <div>© 2026 Jayavihan Chamodye. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
