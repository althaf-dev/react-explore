import { Link } from 'react-router-dom';
import { useAddProductsMutation } from '../apis/productApi';

function AddProduct() {
  const [addProduct, { isLoading }] = useAddProductsMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    addProduct(data);
  };
  return (
    <div>
      AddProduct
      <form  onSubmit={handleSubmit}>
        <div>
          <label>id</label>
          <input name="id" />
        </div>
        <div>
          <label>title</label>
          <input name="title" />
        </div>
        <div>
          <label>description</label>
          <input name="description" />
        </div>
        <div>
          <label>category</label>
          <input name="category" />
        </div>
        <div>
          <label>price</label>
          <input name="price" />
        </div>
        <div>
          <label>expiry date</label>
          <input name="expireDate" />
        </div>
        <div>
          <label>stock</label>
          <input name="stock" />
        </div>
        <button type="submit">{isLoading ? 'submitting...' : 'submit'}</button>
      </form>
      <Link to={"/products"}>Products</Link>
    </div>
  );
}

export default AddProduct;
