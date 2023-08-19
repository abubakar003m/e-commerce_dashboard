import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/pages/SignUp";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import ProductList from "./components/products/ProductList";
import PrivateComponent from "./components/pages/PrivateComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route
                path="/logout"
                element={<h1>Logout Product listing component</h1>}
              />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
