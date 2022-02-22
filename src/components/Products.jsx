import img1 from "../img/image25.png";
import {AiOutlineArrowRight} from "react-icons/ai"

export default function Products() {
  return (
    <div className="container">
        <h5>Favorite & Promo: <a href="/favorite-produts">Cold Bear</a></h5>
        <div className="img-1">
            <img src={img1} alt="" />
        </div>
        <div className="card">
            <h2>Delivery and Time</h2>
            <ul>
                <li>Dine in</li>
                <p>Door delivery</p>
                <p>Pick up</p>
                <label htmlFor="">Now :</label>
                <li>Yes</li>
                <p>No</p>
            </ul>
            <label>Set Time
            <input type="time" placeholder="Enter time for reservation"/>
            </label>
        </div>
            <div className="paragrap">
                <h1>COLD BREW</h1>
                <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
            <h3>Delivery only on <strong>Monday to friday</strong> at <strong>1 - 7 pm</strong> </h3>
            <div className="counter">
                <div className="btn">+</div>
                <div className="count">2</div>
                <div className="btn">-</div>
            </div>
                <h2>IDR 30.000</h2>
                <button className="btn-add">Add to Cart</button>
                <button className="btn-aks">Aks as Staff</button>
            </div>
            <div className="chose-size">
                <h1>Choose a size</h1>
                <button>R</button>
                <button>L</button>
                <button>XL</button>
            </div>
            <div className="card-checkout">
                <img src={img1} alt="..."/>
                    <h1>COLD BREW</h1>
                <ul>
                    <li>xl (large)</li>
                    <li>xl (Regular)</li>
                </ul>
                    <h2>Checkout</h2>
                    <button><AiOutlineArrowRight/></button>
            </div>
    </div>
  )
}
