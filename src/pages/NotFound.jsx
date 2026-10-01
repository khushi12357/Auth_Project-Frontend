import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <span>404</span>

        <h1>Page not found</h1>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className="primary-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
