import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";
const AddProduct = () => {
  /* ****************************
States
*******************************/
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  //Add Product Click function
  const handleaddclick = async () => {
    console.warn(name, price, category, company);

    if (!name || !price || !category || !company) {
      setError(true);

      return false;
    }

    /* ****************************
                save user data to local storage
                *******************************/
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch(`${BASE_URL}/add-product`, {
      method: "post",
      body: JSON.stringify({ name, price, category, company,userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    navigate("/");
  };
  return (
    <div>
      <h1>Add Product</h1>
      <center>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter new product"
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && <span className="invalid-input">Enter Name</span>}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        {error && !price && <span className="invalid-input">Enter Price</span>}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter product Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category && (
          <span className="invalid-input">Enter Category</span>
        )}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        {error && !company && (
          <span className="invalid-input">Enter Company</span>
        )}
      
      </center>
      <button onClick={handleaddclick} className="signup">
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
