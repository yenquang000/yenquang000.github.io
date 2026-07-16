import "./App.css";
import profilePic from "./assets/yen.jpg";

function App() {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#experience" className="nav-link">
          Experience
        </a>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <img src={profilePic} alt="Profile Avatar" className="avatar" />
          <h1 className="name">Yen Quang</h1>
          <h2 className="title">Aspiring Software Engineer & AI Developer</h2>
          <p className="tagline">
            Building intelligent systems and creating impactful software.
          </p>

          <div className="social-links">
            <a
              href="/resume.pdf"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://github.com/yenquang000"
              className="btn secondary "
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yen-quang-6a04a0323"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section">
          <h3 className="section-title">About Me</h3>
          <p className="section-text">
            Hi! I’m a Data Science student at Stony Brook University who really
            loves coding and AI. I spend a lot of my time working on machine
            learning and data analysis projects. Ultimately, I just want to
            build software that runs smoothly and actually helps people solve
            real-world problems.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="badges">
                <span className="badge">Java</span>
                <span className="badge">Python</span>
                <span className="badge">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Tools</h4>
              <div className="badges">
                <span className="badge">React</span>
                <span className="badge">DSPy</span>
                <span className="badge">Groq</span>
                <span className="badge">Git</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h3 className="section-title">Featured Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h4>AI Tutoring Pipeline</h4>
              <p>
                Developed a backend pipeline utilizing DSPy and Groq to
                dynamically structure and optimize AI tutoring interactions for
                specific coding curricula.
              </p>
              <div className="tech-stack">
                <span className="tech">Python</span>
                <span className="tech">DSPy</span>
                <span className="tech">LLMs</span>
              </div>
            </div>

            <div className="project-card">
              <h4>SightShare Web Platform</h4>
              <p>
                Architected and deployed a highly responsive web application,
                focusing on modern UI/UX principles and optimal performance.
              </p>
              <div className="tech-stack">
                <span className="tech">React</span>
                <span className="tech">Vite</span>
                <span className="tech">JavaScript</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Leadership Section */}
        <section id="experience" className="section">
          <h3 className="section-title">Experience & Leadership</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Apr 2026 - Present</div>
              <div className="timeline-content">
                <h4>Advisory Board Member</h4>
                <p className="timeline-org">
                  Data Science Student Advisory Board, Stony Brook University
                </p>
                <p>
                  Represent Data Science students by providing feedback on
                  curriculum, student experience, and departmental initiatives.
                  Collaborate with faculty and students to support improvements
                  within the DAS program.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Jan 2026 - Present</div>
              <div className="timeline-content">
                <h4>Founding Junior CRIZMeer - Machine Intelligence Team</h4>
                <p className="timeline-org">CRIZM at Stony Brook</p>
                <p>
                  Contributed to the design and development of an AI-assisted
                  academic platform. Built and integrated backend and analytics
                  components using JavaScript, Node.js, MongoDB, APIs, and
                  Chart.js.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Jan 2026 - Present</div>
              <div className="timeline-content">
                <h4>SEO Tech Developer</h4>
                <p className="timeline-org">SEO Tech First Year Academy</p>
                <p>
                  Developed technical skills through hands-on coding exercises
                  and guided instruction. Explored real-world applications of
                  software development and pathways within tech.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Dec 2025 - Present</div>
              <div className="timeline-content">
                <h4>Website Director</h4>
                <p className="timeline-org">SightShare</p>
                <p>
                  Built and maintained the organization’s website using React
                  and Vite. Designed responsive, user-focused UI/UX experiences.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Jul 2024 - Aug 2025</div>
              <div className="timeline-content">
                <h4>Cyber Security Analyst</h4>
                <p className="timeline-org">NYC Department of Education</p>
                <p>
                  Identified and flagged phishing attempts within the DOE
                  system. Trained AI model (YOLOv11) to improve object detection
                  accuracy and security analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
