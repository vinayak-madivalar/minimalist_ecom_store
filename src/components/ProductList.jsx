import { useState, useEffect } from "react";
import Rating from "./Rating";
import Link from "next/link";
import Shimmer from "./Shimmer";
import { BsCurrencyDollar } from "react-icons/bs";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedCategory}?limit=4`
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
      <div className="my-8">
        <Shimmer />;
      </div>
    );
  if (error)
    return (
      <p className="text-center font-sans py-16 font-semibold text-3xl">
        Something Went Wrong!
      </p>
    );

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 my-8">
      {products.length > 0 ? (
        products.map((product) => (
          <Link href={"/products/" + product.id} key={product.id}>
            <div className="border bg-gray-50 hover:bg-white hover:shadow-xl rounded-md my-4 mx-4 pb-4 flex flex-col justify-center items-center">
              <img
                src={product.images[0]}
                alt={product.title}
                className="aspect-square bg-gray-200"
              />
              <p className="font-semibold pt-4 px-1 pb-1 text-center text-blue-800 hover:underline">
                {product.title}
              </p>
              <div className="flex items-center gap-1 font-sans font-mediu">
                <Rating data={product} size={"100"} /> (
                {product.rating.toFixed(1)})
              </div>
              <p className="pt-1  text-lg flex items-center font-bold">
                <BsCurrencyDollar size={20} />
                {product.price}
              </p>
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
