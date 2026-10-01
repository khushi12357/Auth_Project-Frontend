import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  async function getProfile() {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN:", token);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/profile`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("PROFILE STATUS:", response.status);
      const data = await response.json();
      console.log("PROFILE RESPONSE:", data);
      if (!response.ok) {
        setMessage(data.message);
        return;
      }
      setUser(data.user);
    } catch (error) {
      console.log("PROFILE ERROR:", error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="profile-page">
      {" "}
      <nav className="navbar">
        {" "}
        <Link to="/" className="logo">
          {" "}
          Auth<span>App</span>{" "}
        </Link>{" "}
        <button className="logout-button" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>{" "}
      </nav>{" "}
      <main className="profile-container">
        {" "}
        {loading && (
          <div className="profile-card">
            {" "}
            <h2>Loading profile...</h2>{" "}
            <p>Please wait while we fetch your profile.</p>{" "}
          </div>
        )}{" "}
        {message && !loading && (
          <p className="form-message error"> {message} </p>
        )}{" "}
        {user && !loading && (
          <div className="profile-card">
            {" "}
            <div className="profile-avatar">
              {" "}
              {user.name.charAt(0).toUpperCase()}{" "}
            </div>{" "}
            <h1>Welcome, {user.name}</h1>{" "}
            <p className="profile-subtitle"> Your profile information </p>{" "}
            <div className="profile-info">
              {" "}
              <div className="info-item">
                {" "}
                <span>Name</span> <strong>{user.name}</strong>{" "}
              </div>{" "}
              <div className="info-item">
                {" "}
                <span>Email</span> <strong>{user.email}</strong>{" "}
              </div>{" "}
              <div className="info-item">
                {" "}
                <span>Account Status</span>{" "}
                <strong className="status"> ✓ Active </strong>{" "}
              </div>{" "}
            </div>{" "}
            <button className="profile-logout" onClick={handleLogout}>
              {" "}
              Logout from Account{" "}
            </button>{" "}
          </div>
        )}{" "}
      </main>{" "}
    </div>
  );
};
export default Profile;
