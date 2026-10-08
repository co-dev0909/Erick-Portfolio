import { existsSync } from 'node:fs';
import path from 'node:path';
import { CurrentYear, EmailContact, PrintResumeButton, SiteNavigation } from './components';
import ResumeDownload from './resume-download';

export default function Home() {
  const hasResume = existsSync(path.join(process.cwd(), 'public', 'resume.pdf'));

  return (
    <>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="site-header">
    <div className="container header-inner">
      <a className="wordmark" href="#about" aria-label="Erick Ramos, home">er<span>.</span></a>
      <SiteNavigation />
      <a className="header-contact" href="#contact">Let’s connect <span className="contact-mark" aria-hidden="true">+</span></a>
    </div>
  </header>

  <main id="main">
    <section className="hero container" id="about" aria-labelledby="hero-title">
      <div className="hero-topline"><span className="eyebrow">Software engineer</span><span className="location"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>Plano, Texas</span></div>
      <div className="hero-grid">
        <h1 id="hero-title">Erick<br /><span>Ramos.</span></h1>
        <div className="hero-intro">
          <div className="intro-symbol" aria-hidden="true">{'{ er }'}</div>
          <p className="intro-lead">A background in computer science. <br />A career in software engineering.</p>
          <p className="intro-copy">I’m Erick, a software engineer based in Plano, Texas. I currently work remotely at McKinsey, following engineering roles at Alkami Technology and GitHub.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:eramos.r10@hotmail.com">Get in touch</a>
            <ResumeDownload available={hasResume} />
          </div>
          <address className="print-address">2709 Chadwick Dr, Plano, TX 75075<br />eramos.r10@hotmail.com · (254) 244-3557</address>
        </div>
      </div>
      <div className="career-strip" aria-label="Career at a glance">
        <span className="eyebrow strip-label">Experience across</span>
        <span className="company-wordmark mckinsey">McKinsey</span>
        <span className="company-wordmark alkami">alkami</span>
        <span className="company-wordmark github">GitHub</span>
        <span className="strip-note">2020 — Present</span>
      </div>
    </section>

    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container section-layout">
        <div className="section-heading">
          <p className="eyebrow"><span className="section-number">01</span> The journey</p>
          <h2 id="experience-title">Professional <br />experience<span className="blue">.</span></h2>
          <p>From an engineering internship to my current role at McKinsey.</p>
        </div>
        <ol className="experience-list">
          <li className="experience-item">
            <div className="experience-marker" aria-hidden="true">01</div>
            <div className="experience-content">
              <div className="experience-meta"><span>May 2024 — Present</span><span className="current-label">Current role</span></div>
              <h3>McKinsey</h3>
              <p className="role">Software Engineer</p>
              <p className="job-location">Remote</p>
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-marker" aria-hidden="true">02</div>
            <div className="experience-content">
              <div className="experience-meta"><span>Apr 2021 — Mar 2024</span></div>
              <h3>Alkami Technology</h3>
              <p className="role">Junior Software Engineer</p>
              <p className="job-location">Plano, Texas</p>
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-marker" aria-hidden="true">03</div>
            <div className="experience-content">
              <div className="experience-meta"><span>Sep 2020 — Mar 2021</span></div>
              <h3>GitHub</h3>
              <p className="role">Software Engineer Intern</p>
              <p className="job-location">Austin, Texas</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section className="education-section container" id="education" aria-labelledby="education-title">
      <div className="education-panel">
        <div className="education-intro">
          <p className="eyebrow"><span className="section-number">02</span> The foundation</p>
          <h2 id="education-title">Curiosity.<br />Meet computer<br />science.</h2>
        </div>
        <div className="education-details">
          <span className="education-monogram" aria-hidden="true">UNT</span>
          <p className="education-date">Aug 2016 — May 2020</p>
          <h3>University of <br />North Texas</h3>
          <p className="degree">Bachelor of Computer Science</p>
          <p className="university-location">Denton, Texas</p>
        </div>
      </div>
    </section>

    <section className="contact-section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-heading">
        <p className="eyebrow"><span className="section-number">03</span> Get in touch</p>
        <h2 id="contact-title">Let’s start a<br /><span className="blue">conversation.</span></h2>
        <p>Have something in mind? I’d love to hear from you.</p>
      </div>
      <EmailContact />
    </section>
  </main>

  <footer className="site-footer container">
    <a className="wordmark" href="#about" aria-label="Back to top">er<span>.</span></a>
    <p>© <CurrentYear initialYear={new Date().getFullYear()} /> Erick Ramos</p>
    <PrintResumeButton />
    <span className="footer-note">Software engineer · Plano, TX</span>
  </footer>

    </>
  );
}
