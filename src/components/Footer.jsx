import {FaFacebookF} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"

import img1 from "../public/coffee1.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="footer-logo">
          <h1>
            <img src={img1} className="img-thumb" alt="" />
            Coffee Shop
          </h1>
          <p>
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <FaFacebookF className="fb"/>
          <AiOutlineInstagram className="ig" />
          <BsTwitter className="tw"/>
        </div>
        <div>
          <ul> 
              <li><strong>Products</strong></li>
              <li>Download</li>
              <li>Pricing</li>
              <li>Location</li>
              <li>Countries</li>
              <li>Blog</li>
          </ul>
        </div>
        <div>
        <ul> 
              <li><strong>Engage</strong></li>
              <li>Coffee Shop ?</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Trems Of servics</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
