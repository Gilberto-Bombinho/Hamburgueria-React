import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/cartContext';


function ProductList() {
const {products} = useContext(CartContext)

  return (
    
    <StyledProductList>
      {products.map(product => (
      <ProductCard key={product.id} product={product} 
      />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
