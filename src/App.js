import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteProducts from "./components/FavoriteProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import YourChart from "./components/YourChart";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/favorite-products" element={<FavoriteProducts />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/your-chart" element={<YourChart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
