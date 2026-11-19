import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Server, ShieldCheck, Terminal, ExternalLink, FileText,
  MapPin, GraduationCap, Award, BriefcaseBusiness, CheckCircle2
} from 'lucide-react'
import { portfolio } from './data/portfolio.js'

const iconMap = { Code2, Database, Server, ShieldCheck, Terminal }

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
  return (
    <header className="site-header">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}><span>Shaik Riyaz Baji</span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="/Riyaz_Resume.pdf" target="_blank" rel="noreferrer"><FileText size={15} /> Resume</a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="pulse" /> JAVA BACKEND DEVELOPER</div>
        <p className="hero-kicker">HELLO, I'M RIYAZ</p>
        <h1>Talk is cheap.<br /><span>Show me the code.</span></h1>
        <p className="hero-description">I build backend applications, REST APIs and practical software using Java, Spring Boot and modern development tools.</p>
        <a className="hero-chat" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}&su=Hello%20Riyaz`}>LET'S CHAT! <ArrowUpRight size={16} /></a>
        <div className="hero-socials">
          <a href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${portfolio.email}`} aria-label="Email"><Mail size={18} /></a>
          <span className="social-location"><MapPin size={14} /> {portfolio.location}</span>
        </div>
      </div>
      <div className="hero-visual">
        <img className="hero-profile-image" src="/images/profile-java.png" alt="Shaik Riyaz Baji — Java Backend Developer with Java and Spring Boot technologies" />
      </div>
      <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  )
}

function About() {
  const facts = [
    { icon: GraduationCap, title: 'Education', value: 'B.Tech — Computer Science Engineering' },
    { icon: BriefcaseBusiness, title: 'Focus', value: 'Java Backend Development' },
    { icon: MapPin, title: 'Based in', value: portfolio.location },
  ]
  const specialties = [
    { title: 'Backend Development', desc: 'I build REST APIs and backend services with Java and Spring Boot.', count: 'JAVA · SPRING BOOT', icon: Server },
    { title: 'Databases', desc: 'I work with relational data, entity mapping and SQL queries.', count: 'POSTGRESQL · MYSQL', icon: Database },
    { title: 'Event-driven Systems', desc: 'I have built asynchronous workflows using Kafka and service discovery.', count: 'KAFKA · EUREKA', icon: Terminal },
  ]
  return (
    <section className="section container" id="about">
      <div className="about-grid">
        <div className="specialty-list">
          {specialties.map(({ title, desc, count, icon: Icon }) => <article className="specialty-card" key={title}><div className="specialty-card-head"><h3>{title}</h3><Icon size={20} /></div><p>{desc}</p><span>{count}</span></article>)}
        </div>
        <div className="about-text">
          <span className="eyebrow">INTRODUCE</span>
          <h2>Hello, I'm Riyaz Baji</h2>
          <h3>Building backend systems with clean code and practical thinking.</h3>
          <p>I’m a Computer Science graduate with a strong interest in Java backend development. My hands-on work includes building RESTful services with Spring Boot, mapping relational data with JPA and Hibernate, integrating PostgreSQL, and experimenting with event-driven communication using Apache Kafka.</p>
          <p>I enjoy understanding how systems work behind the scenes, solving problems, and improving my engineering skills through practical projects.</p>
          <div className="fact-inline">{facts.map(({ icon: Icon, title, value }) => <div key={title}><Icon size={15}/><span><small>{title}</small><strong>{value}</strong></span></div>)}</div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    { icon: Code2, title: 'Languages', items: ['Java', 'SQL'] },
    { icon: Server, title: 'Backend', items: ['Spring Boot', 'Spring MVC', 'REST APIs', 'JDBC', 'Hibernate', 'Spring Data JPA', 'Servlets'] },
    { icon: Database, title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
    { icon: ShieldCheck, title: 'Messaging & Tools', items: ['Apache Kafka', 'Eureka', 'Git', 'GitHub', 'Postman', 'Eclipse'] },
  ]
  return (
    <section className="section section-muted" id="skills">
      <div className="container">
        <SectionHeading eyebrow="02 / TOOLKIT" title="Technologies I work with" description="Tools and concepts I've used in coursework and hands-on projects." />
        <div className="skills-grid">
          {groups.map(({ icon: Icon, title, items }) => <article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><h3>{title}</h3></div><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}
        </div>
        <p className="skills-note"><Terminal size={15} /> Also familiar with OOP, Collections, exception handling, multithreading fundamentals and data structures.</p>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects I've built" description="Practical projects where I applied backend concepts to real use cases." />
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => <article className="project-card" key={project.name}>
          <div className="project-top"><span className="project-index">0{index + 1}</span><span className="project-type">{project.type}</span></div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="project-highlights">{project.highlights.map(item => <li key={item}><CheckCircle2 size={14} />{item}</li>)}</ul>
          <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
          <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}</div>
        </article>)}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <SectionHeading eyebrow="04 / EXPERIENCE" title="Internships & learning" description="Structured learning experiences that strengthened my technical foundation." />
        <div className="timeline">
          {portfolio.internships.map((item) => <article className="timeline-item" key={item.title}><div className="timeline-marker" /><div className="timeline-content"><div className="timeline-meta">{item.period}</div><h3>{item.title}</h3><div className="timeline-org">{item.organization}</div><p>{item.description}</p></div></article>)}
        </div>
        <div className="cert-block">
          <div className="cert-heading"><Award size={20} /><h3>Certifications</h3></div>
          <div className="cert-list">
            {portfolio.certifications.map(cert => <div className="cert-row" key={cert.title}><div><strong>{cert.title}</strong><span>{cert.issuer} · {cert.period}</span></div>{cert.url ? <a href={cert.url} target="_blank" rel="noreferrer" aria-label={`Open ${cert.title}`}><ArrowUpRight size={17} /></a> : <span className="cert-pending">Credential</span>}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section container" id="contact">
      <div className="contact-panel">
        <div className="contact-orb" />
        <span className="eyebrow">05 / GET IN TOUCH</span>
        <h2>Have a role or project<br /><span>in mind?</span></h2>
        <p>I'm open to Java Developer and Backend Developer opportunities. Let's connect.</p>
        <a className="button button-primary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}&su=Opportunity%20for%20Shaik%20Riyaz%20Baji`}>Say hello <ArrowUpRight size={17} /></a>
        <div className="contact-links">
          <a href={`mailto:${portfolio.email}`}><Mail size={16} />{portfolio.email}</a>
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
          <a href={portfolio.links.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="footer-name" href="#home">Shaik Riyaz Baji</a><span>Designed & built by Shaik Riyaz Baji</span><a href="#home">Back to top ↑</a></div></footer>
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    }), { threshold: 0.08 })
    document.querySelectorAll('.section, .hero').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main><Footer /></>
}