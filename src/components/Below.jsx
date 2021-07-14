import React from "react";

const Below = (props) => {
	const cartitems = props.cartItems;
    const onAdd= props.onAdd;
    const onRemove=props.onRemove;
   

	// console.log(cartitems);

	const itemsPrice = cartitems.reduce((a, c) => a + c.qty * c.price, 0);

	var stringTruncate = function (str, length) {
		var dots = str.length > length ? "..." : "";
		return str.substring(0, length) + dots;
	};

	return (
		<div>
			{cartitems.length === 0 && <div>Cart is empty</div>}
			{ cartitems ? cartitems.map((cartItem) => (
				<div className="cartItem" key={cartItem.id}>
					<div className="cartItem__products">
						<h1>
							{stringTruncate( cartItem.title ,16)}
                           
						</h1>

						<div>
							<button onClick={()=>onAdd(cartItem)}>+</button>
							<button onClick={()=>onRemove(cartItem)}>-</button>
						</div>

						<h4>
							{cartItem.qty}* $
							{cartItem.price}
						</h4>
					</div>
					
				</div>
			)) : ""}
			{cartitems.length !== 0 && (
				<div className="price">
					<hr />
					<div className="item_price">
						<h1>item price</h1>
						<h4>${itemsPrice.toFixed(2)}</h4>
					</div>
				</div>
			)}
		</div>
	);
};

export default Below;
