import React from 'react'

const BasketItem = ({ item,products }) => {
const product = products.find(p => p.id === item.id)

  return (
    <>
      <li className='basket-item'>
        {product.title} <span>x {item.amount}</span>            
      </li>
      <style jsx>{`
      .basket-item {
        padding-bottom: 10px;
        font-size: 17px;        
      }

      .basket-item span {
        color: #999;
      }
      `}</style>
    </>
  )
}

export default BasketItem
