import {FaSignInAlt,FaSearch, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom"
import img1 from "../img/coffee1.svg";

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <h1><img src={img1} className="img-thumb" alt=""/>Coffee Shop</h1>
        </div>
        <div className="bar">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>

        <div className="link-to">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/your-chart">Your Chart</Link></li>
                <li><Link className="link-to" to="/historyChart">History</Link></li>
            </ul>
        </div>
        <ul>
            <li>
                <Link className="link-to" to="/login">
                    <FaSearch/>
                </Link>
            </li>
            <li>
                <Link className="link-to" to="/login">
                    <FaSignInAlt/>Login
                </Link>
            </li>
            <li>
                <Link className="link-to" to="/register">
                    <FaUser/>Register
                </Link>
            </li>
        </ul>
    </header>
  )
}
