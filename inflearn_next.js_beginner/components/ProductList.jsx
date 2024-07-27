import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
    const [products, setproducts] = useState();

    useEffect(() => {
      axios.get('http://localhost:4000/products').then(response => {
        setproducts(response.data);
      })
    }, []); // react 컴포넌트가 렌더링 되고 나서 바로 추가적으로 취할 동작들을 작성 가능하다.

    return (
        <ul>
            {products && 
            products.map(product => {
                return <li key={product.id}>{product.name}</li>
            })}
        </ul>
    )
}

export default ProductList