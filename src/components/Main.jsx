import React from 'react';
import Product from "./Product";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Main = ({products,onAdd}) => {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
        <div className="products">
        
           
            {
                products ? products.map((product)=>(
                    <Product key={product.id} 
                    product={product}
                    onAdd={onAdd}
                    />

                )) : <Skeleton count={10} />
            }
            
        </div>
        </SkeletonTheme>
    )
}

export default Main
