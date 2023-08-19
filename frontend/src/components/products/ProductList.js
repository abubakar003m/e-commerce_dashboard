import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../api/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  //Function to show products
  const getProducts = async () => {
    let result = await fetch(`${BASE_URL}/products`);
    result = await result.json();
    setProducts(result);
  };
  console.warn("products", products);

  //Function to control delete product
  const deleteProduct = async (id) => {
    const shoulddelete =window.confirm("Do you want to delete the product?");
    if(shoulddelete)
    {
      let result = await fetch(`${BASE_URL}/product/${id}`, {
        method: "Delete",
      });
      result = await result.json();
      if (result) {
        getProducts();
      }
    }
    else
    {
      getProducts();
    }
  
  };

  //Function to control search product
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${BASE_URL}/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <input
        className="search"
        type="text"
        onChange={searchHandle}
        placeholder="Search Product"
      />
      <ul>
        <li>s.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Delete Product</li>
        <li>Update Product</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>{" "}
            </li>
            <li>
              <button>
                <Link to={"/update/" + item._id} className="list-sty">
                  update
                </Link>
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
};
export default ProductList;
