import axios from "axios";
import { useEffect, useState } from "react";

// '/'에 해당하는 페이지 컴포넌트
function ProductPage() {
  const [products, setproducts] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
      setproducts(response.data);
    })
  }, []); // react 컴포넌트가 렌더링 되고 나서 바로 추가적으로 취할 동작들을 작성 가능하다.

  console.log(products);

  return <div style={{ color: 'blue' }}>상품 목록 페이지</div>
}

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/carts'
 */

export default ProductPage;