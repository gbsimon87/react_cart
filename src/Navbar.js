import React from 'react'
import { useGlobalContext } from './context';

function Navbar() {
  const { amount } = useGlobalContext();

  return (
    <nav className="nav">
      <div>EXAMPLE CART</div>
      <div className="nav-items">
        <span>ITEMS</span>
        <span className="nav-items-count">{amount}</span>
      </div>
    </nav>
  )
}

export default Navbar
