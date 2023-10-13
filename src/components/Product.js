import React from 'react'
import {moneyFormat} from '../helpers'

function Product({money, total, product, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id)
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id)

    const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === product.id)                            
      // Sepette varsa bu ürün çıkarılacak.
      if(currentBasket){
        currentBasket.amount -= 1
        setBasket([...basketWithoutCurrent, currentBasket])
      }
      // Burda ürün miktarı 0 ise ürünü sepetten kaldırıyoruz.
    if(currentBasket.amount === 0){
        setBasket([...basketWithoutCurrent])
      }  
            
    }

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // urun eklenmis
        if (checkBasket){
          checkBasket.amount += 1
          setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
          setBasket([...basket, {
            id:product.id,
            amount:1
          }])
        }
    }

  return (
    <>
    <div className="product">
    <div className='container-img'><img src={product.image} alt="" /></div>
     
     <h6>{product.title}</h6>         
     
     <div className="price">
        $ {moneyFormat(product.price)}
     </div>

    <div className="actions">
        <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
        <span className="amount">{basketItem ? basketItem.amount : 0}</span>
        <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Ekle</button>
    </div>

     <style jsx>{`
    .product {
        padding: 15px;
        background: #fff;
        border : 1px solid #ddd;
        margin-bottom : 20px;
        width: 24%;        
    } 
       
    .container-img img{
      position: relative;
      width: 12rem;
      height: 12rem;  
      transition: transform 0.3s;
    }

    .container-img img:hover {
    transform: scale(1.1);
    }
    
    .product h6 {
      font-size: 20px;
      margin-bottom: 10px;      
    }

    .product .actions {
      display: flex;
      align-items: center;
      margin-top: 15px;
    }
     
    .product .price {
      font-size: 20px;
      color: #179b17;
    }

    .actions button{
      height: 40px;
      padding: 0 15px;
      flex: 1;
      cursor: pointer;
    }

    .actions button[disabled]{
      opacity: .3;
      cursor: not-allowed;
    }

    .actions .amount {
      width: 50px;
      text-align: center;
      border: 1px solid #ddd;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: bold;
      color: #555;
    }

    .actions .buy-btn {
      background: #61dafb;
      font-size: 14px;
      font-weight: 500;
      border-radius: 0 4px 4px 0;
    }

     .actions .sell-btn {
      background: #ccc;
      font-size: 14px;
      font-weight: 500;
      border-radius: 4px 0 0 4px;
      color: #333;
    }
     `}</style>
    </div>
    </>
  )
}

export default Product
