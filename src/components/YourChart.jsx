import img1 from "../img/order1.svg";
import img2 from "../img/order2.svg";
import {MdPayment} from "react-icons/md"
import {BsBank2} from "react-icons/bs"
import {AiFillCar} from "react-icons/ai"

export default function YourChart() {
  return (
    <div className="container-fluid">
      <span>Checkout your item now!</span>
      <div className="card-order">
        <h1>Order Summary</h1>
        <div className="card-item-order">
          <img src={img1} alt="" />
          <h5>Halzenut Late 1x</h5>
          <h5>IDR : 24.0</h5>
        </div>
        <div className="card-item-order">
          <img src={img2} alt="" />
          <h5>Halzenut Late 1x</h5>
          <h5>IDR : 24.0</h5>
        </div>
        <p>-</p>
        <div className="li-item-order">
          <ul>
            <li>SUBTOTAL</li>
            <li>TAKS & FEES</li>
            <li>SHIPPING</li>
          </ul>
          <ul>
            <li>IDR 120.000</li>
            <li>IDR 20.000</li>
            <li>IDR 10.000</li>
          </ul>
        </div>
        <ul className="total">
          <li>TOTAL</li>
          <li>IDR 150.000</li>
        </ul>
      </div>
      <div className="card-item-right">
        <span>
          <strong>Address detail</strong>
        </span>
        <div className="li-item-order2">
          <ul>
            <h1>Delivery to Iskandar Street</h1>
            <h4>-</h4>
            <p>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
            <h4>-</h4>
            <h5>+62 81348287878</h5>
          </ul>
        </div>
        <div className="card-item-right2">
          <span>
            <strong>Payment Method</strong>
          </span>
          <div className="option-item-order3">
            <div className="input-item">
              <input type="radio" value="" /> 
              <input type="radio" value="" /> 
              <input type="radio" value="" /> 
            </div>
            <div className="label-item">
              <label> <MdPayment className="icon-card"/> Card</label>
              <h1> </h1>
              <label> <BsBank2 className="icon-card"/> Bank account</label>
              <h1> </h1>
              <label> <AiFillCar className="icon-card"/> Cash on delivery</label>
              <h1> </h1>
            </div>
          </div>
          <button className="btn-confirm">Confirm and Pay</button>
        </div>
      </div>
    </div>
  );
}
