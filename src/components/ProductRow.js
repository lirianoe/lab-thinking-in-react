import jsonData from './../data.json'
import { useState } from 'react';

const ProductRow = () => {



    return (     
            jsonData.map(el => {
                
                return (
                    <tr>
                        {el.inStock ? <td style={{color:"black"}}>{el.name}</td> : <td style={{color: "red"}}>{el.name}</td>}
                        <td>{el.price}</td>
                    </tr>
                )
            })   
    );
}

export default ProductRow;
