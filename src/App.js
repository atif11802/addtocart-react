import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Below from "./components/Below";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const getProduct = async () => {
			try {
				// fetch data from a url endpoint
				const data = await axios.get(
					"https://fakestoreapi.com/products"
				);

				setProducts(data.data);
			} catch (error) {
				console.log("error", error);
				// appropriately handle the error
			}
		};
		getProduct();
	}, []);

	const onAdd = (product) => {
    console.log(product)
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id
						? {
								...exist,
								qty:
									exist.qty +
									1,
						  }
						: x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};

  const onRemove= ( product ) =>{
console.log(product)
const exist = cartItems.find((x) => x.id === product.id);

if(exist.qty === 1){
  setCartItems(cartItems.filter(x=> x.id !== product.id))
}
else{
  setCartItems(
    cartItems.map((x) =>
      x.id === product.id
        ? {
            ...exist,
            qty:
              exist.qty -
              1,
          }
        : x
    )
  );
}

  }


	console.log(cartItems);

	return (
		<div className="app">
			<BrowserRouter>
				<Header cartItems={cartItems} />

				<Switch>
					<Route exact path="/">
						<Main
							products={products}
							onAdd={onAdd}
						/>
					</Route>
          <Route exact path="/cart">
						<Below 
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            />
					</Route>

				
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
