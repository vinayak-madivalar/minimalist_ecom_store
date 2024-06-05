import { useState, useEffect } from "react";
import Rating from "./Rating";
import Link from "next/link";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedCategory}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading)
    return (
      <p className="text-center py-16 font-semibold text-2xl">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center py-16 font-semibold text-2xl">
        Error: {error.message}
      </p>
    );

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 my-8">
      {products.length > 0 ? (
        products.map((product) => (
          <Link href={"/products/" + product.id} key={product.id}>
            <div className="border bg-white shadow-lg rounded-md my-4 mx-4 pb-4 flex flex-col justify-center items-center">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-auto"
              />
              <p className="font-semibold pt-4 px-1 pb-1 text-center">
                {product.title}
              </p>
              <Rating data={product} />
              <p className="pt-1 font-semibold">${product.price}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
