const proofStats = [
  { value: '4+ Years', label: 'Teaching experience across classes 5-12' },
  { value: 'JEE Adv.', label: 'Qualified with disciplined exam preparation' },
  { value: 'DTU', label: 'Engineering credibility with builder mindset' },
  { value: '1000+ Hrs', label: 'Concept-focused mentoring and doubt solving' },
];

const projects = [
  {
    title: 'AI Chatbot',
    problem: 'Students and users drop off when support feels slow or generic.',
    solution: 'Built a React + Vite chatbot flow to simulate real-time conversations and make support feel instant and human.',
    stack: 'React, Vite, JavaScript, UI architecture',
    result: 'Created a strong proof-of-skill project that showcases conversation design, frontend speed, and AI product thinking.',
  },
  {
    title: 'Carbon Footprint Calculator',
    problem: 'Sustainability tools often feel boring and fail to keep users engaged.',
    solution: 'Designed a calculator with a gamified journey that helps users understand habits and track progress with more motivation.',
    stack: 'React, JavaScript, state management, gamification UX',
    result: 'Turned a static calculator idea into an interactive experience with better retention potential and a stronger product story.',
  },
  {
    title: 'Coaching Website',
    problem: 'Education businesses struggle to communicate trust, clarity, and outcomes online.',
    solution: 'Built a digital presence for coaching services that highlights conceptual teaching, structured classes, and student support.',
    stack: 'Frontend development, branding, conversion-focused design',
    result: 'Strengthened business credibility and gave the coaching brand a more professional online identity.',
  },
  {
    title: 'YouTube Automation System',
    problem: 'Consistent content creation is hard to scale without repeatable systems.',
    solution: 'Created an automation-led workflow for shorts and content output to reduce manual friction and improve consistency.',
    stack: 'Automation tools, AI workflows, content systems',
    result: 'Built leverage for personal branding by reducing production effort and making consistent publishing more realistic.',
  },
];

const skills = [
  { category: 'Technical', items: ['React - Intermediate', 'JavaScript - Intermediate', 'AI basics - Intermediate', 'Automation - Intermediate'] },
  { category: 'Business', items: ['Teaching systems - Advanced', 'Coaching operations - Advanced', 'Marketing mindset - Intermediate'] },
  { category: 'Communication', items: ['Public speaking - Advanced', 'Mentoring - Advanced', 'Concept explanation - Advanced'] },
];

const experience = [
  {
    role: 'Founder / Educator',
    org: 'Coaching Business',
    detail: 'Built a teaching system for classes 6-12 focused on conceptual clarity, performance improvement, and long-term student confidence.',
  },
  {
    role: 'Content Creator',
    org: 'Step Up',
    detail: 'Creating content around money, AI, student growth, and self-improvement to build authority and connect with ambitious learners.',
  },
  {
    role: 'AI Builder',
    org: 'Personal Projects',
    detail: 'Using frontend development and automation to build practical products that solve real problems and strengthen product thinking.',
  },
];

const lessons = [
  'JEE taught me that consistency beats intensity when the goal is high performance.',
  'Teaching taught me that clarity is power. If you can explain it simply, you actually understand it.',
  'Building online taught me that systems and leverage matter more than motivation alone.',
];

const contentPillars = ['Money', 'AI', 'Student growth', 'Discipline', 'Career direction'];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Aditya</div>
        <nav>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#brand">Brand</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">JEE Advanced Qualified | DTU Student | Educator & AI Builder</p>
            <h1>Helping students master concepts while building AI-driven solutions with real-world impact.</h1>
            <p className="hero-text">
              I am building at the intersection of education, technology, and business. From mentoring students to creating AI-powered projects and growing a personal brand, I bring operator energy to everything I touch.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#work">View My Work</a>
              <a className="button secondary" href="#contact">Work With Me</a>
              <a className="button ghost" href="#classes">Join My Classes</a>
            </div>
            <div className="hero-tags">
              <span>Builder + Educator + Future Entrepreneur</span>
              <span>Focused on clarity, consistency, and leverage</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="photo-card">
              <div className="photo-placeholder">AD</div>
              <p>Replace this with your best professional portrait for maximum impact.</p>
            </div>
            <div className="mini-proof">
              <strong>Authority Snapshot</strong>
              <p>Teaching experience, exam credibility, business ownership, and AI projects in one profile.</p>
            </div>
          </div>
        </section>

        <section className="proof-grid" aria-label="Proof section">
          {proofStats.map((stat) => (
            <article className="proof-card" key={stat.label}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="story-block" id="about">
          <div>
            <p className="section-kicker">Why trust me?</p>
            <h2>Proof over buzzwords.</h2>
          </div>
          <p>
            Over 4 years of teaching experience, mentoring students from Class 5-12 with a focus on conceptual clarity and exam performance. I qualified JEE Advanced, study at DTU, run coaching initiatives, and build AI-driven projects that show both technical curiosity and execution.
          </p>
        </section>

        <section className="metrics-section">
          <div className="section-heading">
            <p className="section-kicker">Metrics people remember</p>
            <h2>Numbers create trust fast.</h2>
          </div>
          <div className="metrics-grid">
            <div>
              <strong>4+</strong>
              <span>Years teaching and mentoring</span>
            </div>
            <div>
              <strong>5-12</strong>
              <span>Student classes taught</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Portfolio-ready projects built</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Mission: build education + AI leverage</span>
            </div>
          </div>
        </section>

        <section className="projects-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Real work with a clear problem, solution, and result.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p><span>Problem:</span> {project.problem}</p>
                <p><span>Solution:</span> {project.solution}</p>
                <p><span>Tech stack:</span> {project.stack}</p>
                <p><span>Result:</span> {project.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="skills">
          <div>
            <p className="section-kicker">Skills</p>
            <h2>Positioned by strength, not dumped in a list.</h2>
          </div>
          <div className="skill-columns">
            {skills.map((group) => (
              <article className="skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Built around impact and ownership.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-card" key={item.role}>
                <h3>{item.role}</h3>
                <strong>{item.org}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-section" id="brand">
          <div className="section-heading">
            <p className="section-kicker">Content & Personal Brand</p>
            <h2>Building authority in public.</h2>
          </div>
          <div className="brand-grid">
            <article className="brand-card">
              <h3>YouTube: Step Up</h3>
              <p>
                Sharing ideas on money, AI, student growth, and self-improvement to build a strong, relatable, and ambitious personal brand.
              </p>
              <div className="pill-row">
                {contentPillars.map((pillar) => (
                  <span key={pillar}>{pillar}</span>
                ))}
              </div>
            </article>
            <article className="brand-card">
              <h3>Video Introduction</h3>
              <p>
                Add a 60-90 second introduction video here covering who you are, what you are building, and why your journey matters.
              </p>
              <a className="inline-link" href="#contact">Add your intro link when ready</a>
            </article>
            <article className="brand-card">
              <h3>Shorts Preview</h3>
              <p>
                Use this section to embed standout short-form content later. It turns your portfolio into a credibility engine, not just a resume.
              </p>
              <div className="shorts-preview">
                <span>Short 01</span>
                <span>Short 02</span>
                <span>Short 03</span>
              </div>
            </article>
          </div>
        </section>

        <section className="currently-building" id="classes">
          <div className="section-heading">
            <p className="section-kicker">Currently Building</p>
            <h2>Showing progress in public creates leverage.</h2>
          </div>
          <div className="build-grid">
            <article>
              <h3>AI chatbot progress</h3>
              <p>Improving real-time UX, interaction quality, and product storytelling.</p>
            </article>
            <article>
              <h3>Coaching growth</h3>
              <p>Expanding structured learning systems and outcome-focused teaching.</p>
            </article>
            <article>
              <h3>Brand journey</h3>
              <p>Documenting ideas, lessons, and execution across content and business.</p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <p className="section-kicker">About Me</p>
            <h2>My story is the differentiator.</h2>
          </div>
          <p className="about-text">
            I started teaching early and discovered that I genuinely enjoy making difficult ideas feel simple. Qualifying JEE Advanced shaped my discipline. DTU sharpened my technical thinking. Now I am combining teaching, AI projects, coaching systems, and personal branding into one larger mission: to become a builder who creates impact at scale.
          </p>
        </section>

        <section className="lessons-section">
          <div className="section-heading">
            <p className="section-kicker">Lessons I Learned</p>
            <h2>Authority with relatability.</h2>
          </div>
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <article className="lesson-card" key={lesson}>
                <p>{lesson}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="viral-section">
          <div className="section-heading">
            <p className="section-kicker">Unique Feature</p>
            <h2>Portfolio ideas worth sharing.</h2>
          </div>
          <article className="feature-card">
            <h3>Interactive student mini-quiz</h3>
            <p>
              A future add-on that lets visitors test knowledge, engage with your teaching style, and experience your clarity before they ever contact you.
            </p>
          </article>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p className="section-kicker">Call To Action</p>
            <h2>Let’s build something meaningful together.</h2>
          </div>
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Hire Me</h3>
              <p>For internships, freelance opportunities, and frontend or AI product collaborations.</p>
            </article>
            <article className="contact-card">
              <h3>Collaborate</h3>
              <p>Open to projects across education, content, student tools, automation, and digital growth.</p>
            </article>
            <article className="contact-card">
              <h3>Join My Classes</h3>
              <p>For students who want conceptual clarity, structured learning, and a mentor who genuinely cares.</p>
            </article>
          </div>
          <div className="contact-strip">
            <a href="mailto:your-email@example.com">your-email@example.com</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
