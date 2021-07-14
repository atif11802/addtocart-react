import React from 'react';


const Product = ({product,onAdd}) => {

    var stringTruncate = function(str, length){
        var dots = str.length > length ? '...' : '';
        return str.substring(0, length)+dots;
      };
    return (
        <div className="product">
            <img src={product.image} alt="" />
            <h2>
            {stringTruncate(product.title, 10)}
            </h2>
            <h4> 
            ${product.price}
            </h4>
            
                <button onClick={()=>onAdd(product)}>add to cart </button>
            
            
        </div>
    )
}

export default Product
