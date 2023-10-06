import './App.css';
import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails'; // Import the ProductDetails component
import axios from 'axios'; 

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/productsdata'); // Use Axios for GET request
        console.log("????????????",response)
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Details</h1>
      </header>
      <main>
        <div className="product-list">
      {productData?.map((product, index) => (
        <ProductDetails key={index} product={JSON.parse(product.data)} index={index} />
      ))}
    </div>
      </main>
    </div>
  );
}

export default App;

