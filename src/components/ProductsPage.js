import jsonData from './../data.json'
import { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'



const ProductsPage = () => {
const [products, setProducts] = useState(jsonData)

    return (
        <div>
            IronStore
            <SearchBar />
            <ProductTable />
        </div>
    );
}

export default ProductsPage;
