import { Product } from '../../app/models/Product';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/Products')
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
