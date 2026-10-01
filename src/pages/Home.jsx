import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      {/* Navbar */}

      <nav className="navbar">
        <Link to="/" className="logo">
          Auth<span>App</span>
        </Link>

        <div className="nav-links">
          <Link to="/login" className="nav-login">
            Login
          </Link>

          <Link to="/register" className="nav-register">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}

      <main className="hero">
        <div className="hero-content">
          <div className="badge">🔐 Simple • Secure • Fast</div>

          <h1>
            Your account.
            <br />
            <span>Simple & Secure.</span>
          </h1>

          <p>
            A simple authentication system built with React, Node.js, Express
            and MongoDB.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Create Account →
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>

        {/* Right side card */}

        <div className="hero-card">
          <div className="card-top">
            <div className="avatar">L</div>

            <div>
              <h3>Welcome back!</h3>
              <p>Your account is protected</p>
            </div>
          </div>

          <div className="security-box">
            <div className="security-icon">✓</div>

            <div>
              <strong>Authentication Active</strong>
              <p>JWT secured session</p>
            </div>
          </div>

          <div className="mini-stats">
            <div>
              <strong>100%</strong>
              <span>Secure</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Available</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Access</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}

      <section className="features">
        <div className="section-heading">
          <p>WHY AUTHAPP?</p>

          <h2>Everything you need to get started</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>

            <h3>Secure Authentication</h3>

            <p>
              User passwords are securely hashed before being stored in the
              database.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>

            <h3>Fast & Simple</h3>

            <p>
              A clean authentication flow that is easy to understand and use.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>

            <h3>Protected Profile</h3>

            <p>
              Only authenticated users can access their profile information.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="footer">
        <p>© 2026 AuthApp. Built with React & Node.js.</p>
      </footer>
    </div>
  );
};

export default Home;
