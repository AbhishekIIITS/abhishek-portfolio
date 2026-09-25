
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import GithubSection from "@/components/GithubSection";
import Image from "next/image";

export default function Home() {
  return (
    <main id="top">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">
            COMPUTER SCIENCE ENGINEERING · IIIT SURAT
          </p>

          {/* Main SEO heading: Your full name */}

          <h1>
            Abhishek
            <br />
            <span>Sonkar</span>
          </h1>

          <p className="hero-description">
            I&apos;m Abhishek Sonkar, a B.Tech Computer Science
            &amp; Engineering student at IIIT Surat.
            I build software, solve problems and explore
            modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects
            </a>

            <a href="/resume.pdf" className="button secondary">
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/AbhishekIIITS"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-sonkar-2b7415328"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://leetcode.com/u/AbhishekIIITS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode ↗
            </a>
          </div>
        </div>

        {/* HERO PHOTO */}

        <div className="hero-photo">
          <Image
            src="/profile.jpg"
            alt="Abhishek Sonkar"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 470px"
          />

          <div className="photo-overlay"></div>

          <div className="photo-label">
            <span>ABHISHEK SONKAR</span>
            <span>CSE · IIIT SURAT</span>
          </div>
        </div>

        <div className="hero-side-label">
          SOFTWARE
          <br />
          DEVELOPER
        </div>

        <div className="hero-number">01</div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="section">
        <div className="section-number">02 / ABOUT</div>

        <Reveal>
          <div className="about-grid">
            <h2>Who I Am</h2>

            <div>
              <p>
                I&apos;m Abhishek Sonkar, a Computer Science
                Engineering student at IIIT Surat.
              </p>

              <p>
                I&apos;m interested in software development,
                data structures and algorithms, web development
                and building practical applications.
              </p>

              <p>
                I enjoy turning ideas into working software
                while continuously improving my problem-solving
                and engineering skills.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section className="section">
        <div className="section-number">03 / EDUCATION</div>

        <Reveal>
          <div className="education-card">
            <div>
              <span className="year">2025 — PRESENT</span>

              <h2>IIIT Surat</h2>

              <p>
                B.Tech in Computer Science &amp; Engineering
              </p>
            </div>

            <span className="location">
              Surat, Gujarat
            </span>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section id="skills" className="section">
        <div className="section-number">04 / SKILLS</div>

        <div className="skills-grid">
          <Reveal delay={0}>
            <div className="skill-group">
              <span>01</span>

              <h3>Programming</h3>

              <p>
                C · C++ · Java · Python · JavaScript
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="skill-group">
              <span>02</span>

              <h3>Web Development</h3>

              <p>
                HTML · CSS · JavaScript · React · Next.js
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="skill-group">
              <span>03</span>

              <h3>Computer Science</h3>

              <p>
                DSA · OOP · DBMS · Operating Systems
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="skill-group">
              <span>04</span>

              <h3>Tools</h3>

              <p>
                Git · GitHub · VS Code · Linux
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="section projects-section"
      >
        <div className="section-number">05 / PROJECTS</div>

        {/* PROJECT 01 */}

        <Reveal>
          <article className="project-card">
            <div className="project-top">
              <span className="project-index">01</span>

              <span className="project-type">
                WEB DEVELOPMENT
              </span>
            </div>

            <div className="project-preview onecart-preview">
              <div className="preview-content">
                <span>ONECART</span>

                <small>
                  E-COMMERCE APPLICATION
                </small>
              </div>
            </div>

            <div className="project-info">
              <div>
                <h2>OneCart</h2>

                <p>
                  A modern e-commerce web application built
                  to explore frontend development, responsive
                  design and interactive user interfaces.
                </p>
              </div>

              <div className="project-details">
                <div className="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/AbhishekIIITS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a href="#contact">
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* PROJECT 02 */}

        <Reveal delay={0.12}>
          <article className="project-card">
            <div className="project-top">
              <span className="project-index">02</span>

              <span className="project-type">
                PYTHON · AUTOMATION
              </span>
            </div>

            <div className="project-preview trading-preview">
              <div className="preview-content">
                <span>TRADING AUTOMATION</span>

                <small>
                  PYTHON · API · AUTOMATION
                </small>
              </div>
            </div>

            <div className="project-info">
              <div>
                <h2>Trading Automation</h2>

                <p>
                  A Python-based automation project exploring
                  market monitoring, APIs, alerts and automated
                  workflows.
                </p>
              </div>

              <div className="project-details">
                <div className="tags">
                  <span>Python</span>
                  <span>API</span>
                  <span>Automation</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/AbhishekIIITS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* =====================================================
          CURRENT FOCUS
      ===================================================== */}

      <section className="section">
        <div className="section-number">
          06 / CURRENT FOCUS
        </div>

        <div className="focus-grid">
          <Reveal delay={0}>
            <div>
              <span>01</span>

              <h3>DSA</h3>

              <p>
                Improving algorithmic problem solving and
                competitive programming skills.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <span>02</span>

              <h3>Web Development</h3>

              <p>
                Building modern responsive applications
                using React and Next.js.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div>
              <span>03</span>

              <h3>Computer Science</h3>

              <p>
                Strengthening DBMS, OOP, operating systems
                and other core fundamentals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          GITHUB
      ===================================================== */}

      <GithubSection />

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="section contact">
        <div className="section-number">08 / CONTACT</div>

        <Reveal>
          <div className="contact-header">
            <div>
              <p className="contact-eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                LET&apos;S BUILD
                <br />
                <span>SOMETHING.</span>
              </h2>
            </div>

            <div className="contact-intro">
              <p>
                I&apos;m open to internships, collaborations,
                technical discussions and interesting
                software projects.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="contact-grid">
          {/* EMAIL */}

          <Reveal delay={0}>
            <a
              href="mailto:sonkarabhishek958@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-top">
                <span>01</span>
                <span>↗</span>
              </div>

              <div>
                <span className="contact-label">
                  EMAIL
                </span>

                <h3>
                  sonkarabhishek958@gmail.com
                </h3>
              </div>
            </a>
          </Reveal>

          {/* LINKEDIN */}

          <Reveal delay={0.08}>
            <a
              href="https://www.linkedin.com/in/abhishek-sonkar-2b7415328"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-top">
                <span>02</span>
                <span>↗</span>
              </div>

              <div>
                <span className="contact-label">
                  LINKEDIN
                </span>

                <h3>Connect with me</h3>
              </div>
            </a>
          </Reveal>

          {/* GITHUB */}

          <Reveal delay={0.16}>
            <a
              href="https://github.com/AbhishekIIITS"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-top">
                <span>03</span>
                <span>↗</span>
              </div>

              <div>
                <span className="contact-label">
                  GITHUB
                </span>

                <h3>AbhishekIIITS</h3>
              </div>
            </a>
          </Reveal>

          {/* LEETCODE */}

          <Reveal delay={0.24}>
            <a
              href="https://leetcode.com/u/AbhishekIIITS/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-top">
                <span>04</span>
                <span>↗</span>
              </div>

              <div>
                <span className="contact-label">
                  LEETCODE
                </span>

                <h3>AbhishekIIITS</h3>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="contact-bottom">
            <div>
              <span className="contact-small-label">
                CURRENTLY
              </span>

              <p>Open to opportunities</p>
            </div>

            <a
              href="mailto:sonkarabhishek958@gmail.com"
              className="contact-email-button"
            >
              SEND AN EMAIL →
            </a>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div>ABHISHEK SONKAR</div>

        <div>© 2026</div>
      </footer>
    </main>
  );
}
