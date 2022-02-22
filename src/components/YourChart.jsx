import img1 from "../img/order1.svg"
import img2 from "../img/order2.svg"

export default function YourChart() {
  return (
    <div className="container-fluid">
        <span>Checkout your item now!</span>
        <div className="card-order">
            <h1>Order Summary</h1>
            <div className="card-item-order">
                <img src={img1} alt=""/>
                <h5>Halzenut Late 1x</h5>
                <h5>IDR : 24.0</h5>
            </div>
            <div className="card-item-order">
                <img src={img2} alt=""/>
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
    </div>
  )
}
