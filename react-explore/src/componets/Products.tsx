import { useState } from 'react';
import { useGetProductsQuery } from '../apis/productApi';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

function Products() {
  const [category, setCategory] = useState('');
  const { data, isLoading } = useGetProductsQuery(category, {
    refetchOnMountOrArgChange: true,
  });
  return (
    <div>
      <h1>Products</h1>
      <Link to={'/addProducts'}>add products</Link>
      <div style={{display:"flex"}}>
        <div>
          <ul>
            {data?.map((item: any) => (
              <li>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <AddProduct/>
        </div>
      </div>
    </div>
  );
}

export default Products;
