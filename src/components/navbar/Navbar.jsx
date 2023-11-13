import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">bookon</span>
        </Link>
        {user ? <span className="userName">{user.username.slice(0, user.username.indexOf('@'))}</span> : (
          <div className="navItems">
            <button className="navButton"><Link to="/register"  style={{textDecoration:"none",color:"inherit"}}>Register</Link></button>

            <button className="navButton"><Link to="/login" style={{textDecoration:"none"}}>Login</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;