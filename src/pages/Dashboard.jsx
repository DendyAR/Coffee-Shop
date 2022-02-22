import { Link } from "react-router-dom";
import FavoriteProducts from "../components/FavoriteProducts";
import img1 from "../img/imageBeef.svg";

const Dashboard = () => {
  return (
    <div className="main">
      <section className="section-1">
        <div className="promo-css">
          <h1>Promo for you</h1>
          <p className="p-1">
            Coupons will be updated every weeks. Check them out!{" "}
          </p>
        </div>
        <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3">
          <img src={img1} alt="" />
          <h2>Beef Spaghetti</h2>
          <h3>20 % OFF</h3>
          <p>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
          <h2>COUPON CODE</h2>
          <p className="br-line">-</p>
          <h1>FNPR15RG</h1>
          <h6>Valid untill October 10th 2020</h6>
        </div>
        <button className="btn-apply">
          <span className="btn-span">Apply Coupon</span>
        </button>
        <div className="trems-and-conditions">
          <ul>
            <li>
              <strong>Treams and Condition</strong>
            </li>
            <li>1. You can only apply 1 coupon per day </li>
            <li>2. It only for dine in</li>
            <li>3. Buy 1 get 1 only for new user</li>
            <li>4. Should make member card to apply coupon</li>
          </ul>
        </div>
      </section>
      <div className="content">
        <ul>
          <li>
            <Link to="/favorite-products">Favorite Product</Link>
          </li>
          <li>
            <Link to="/coffee-products">Coffee</Link>
          </li>
          <li>
            <Link to="/non-coffee">Non Coffee</Link>
          </li>
          <li>
            <Link to="/foods">Foods</Link>
          </li>
          <li>
            <Link to="/add-on">Add-on</Link>
          </li>
        </ul>
        <div className="li-div">
          <FavoriteProducts className="card-item" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
