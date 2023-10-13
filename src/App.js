import Header from "./components/Header";
import { useState, useEffect } from "react";
import products from "./products.json"
import Product from "./components/Product";
import index from "./index.css"
import Basket from "./components/Basket";
import BasketItem from "./components/BasketItem";

function App() {
  const [money, setMoney] = useState(1000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState()

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))
  }, [basket])

  return (
 <>
  <Header total={total} money={money} />
  <div className="container products">
  {products.map(product =>(
    <Product money={money} total= {total} key={product.id} basket={basket} setBasket={setBasket} product={product}/>
  ))}</div>

    {total > 0 && <div><Basket products={products} basket={basket} total={total} resetBasket={resetBasket} /></div> }     
 </>
  );
}

export default App;
