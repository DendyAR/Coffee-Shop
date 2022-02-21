import {FaSignInAlt, FaSignOutAlt, FaSearch, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom"
import img1 from "../public/coffee1.svg";

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <h1><img src={img1} className="img-thumb" alt=""/>Coffee Shop</h1>
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/your-chart">Your Chart</Link></li>
                <li><Link to="/historyChart">History</Link></li>
            </ul>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSearch/>
                </Link>
            </li>
            <li>
                <Link to="/login">
                    <FaSignInAlt/>Login
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <FaUser/>Register
                </Link>
            </li>
        </ul>
    </header>
  )
}
