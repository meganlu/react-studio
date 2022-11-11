import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Array());
  const [total, setTotal] = useState(0);

  const onClick = (name, price) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name == name) {
        cart[i].quantity += 1
        setCart([...cart])
        setTotal(total + cart[i].price)
        return;
      }
    }
    cart.push({name: name, price: price, quantity: 1});
    setCart([...cart]);
    setTotal(total + price);
  }

  return (
    <div className="App">
      <div className="left">
        <h1 className="title">Bakery Menu</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="items">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <div className="BakeryItemDiv"><BakeryItem name={item.name} image={item.image} 
            desc={item.description} price={item.price} onAdd={onClick} key={item.name}/></div> // replace with BakeryItem component      
          ))}
        </div>
      </div>
      
      <div className="cart">
        <h1 className="carttitle">My Cart</h1>
        {/* TODO: render a list of items in the cart */}
        <div className="cartitems">
          {cart.map(item => (
            <h5>{item.quantity}x {item.name}</h5>
          ))}
          <hr/>
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>     
      </div>
    </div>
  );
}

export default App;
