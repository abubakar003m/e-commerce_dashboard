import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`${BASE_URL}/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  //Function to control update products
  const handleupdateclick = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    } else {
      let result = await fetch(`${BASE_URL}/product/${params.id}`, {
        method: "Put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Update Product</h1>
      <center>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter new product"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && <span className="invalid-input">Enter Product</span>}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && <span className="invalid-input">Enter Price</span>}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category && (
          <span className="invalid-input">Enter Category</span>
        )}
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Product Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </center>
      {error && !company && (
        <span className="invalid-input">Enter Company</span>
      )}
      <button onClick={handleupdateclick} className="signup">
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
