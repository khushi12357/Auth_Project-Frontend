import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);

        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/profile");
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong");
    }
  }

  return (
    <div className="auth-page">
      <Link to="/" className="auth-logo">
        Auth<span>App</span>
      </Link>

      <div className="auth-card">
        <div className="auth-heading">
          <div className="auth-icon">🔐</div>

          <h1>Welcome back</h1>

          <p>Login to access your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="auth-button">Login</button>
        </form>

        {message && <p className="form-message error">{message}</p>}

        <p className="auth-footer">
          Don't have an account?
          <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
