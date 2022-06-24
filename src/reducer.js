const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      }
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
      }
    case "INCREASE":
      const increasedCart = state.cart.map(cartItem => {
        if (action.payload === cartItem.id) {
          return { ...cartItem, amount: cartItem.amount + 1}
        }
        return cartItem
      })
      return {
        ...state,
        cart: increasedCart
      }
    case "DECREASE":
      const decreasedCart = state.cart.map(cartItem => {
        console.log(cartItem.amount);
        if (cartItem.amount === 0) {
          return {
            ...cartItem
          }
        }
        if (action.payload === cartItem.id) {
          return { ...cartItem, amount: cartItem.amount - 1}
        }
        return cartItem
      })
      return {
        ...state,
        cart: decreasedCart
      }
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce((totalValue, currentValue) => {
        const { price,  amount } = currentValue;
        const itemTotal = price * amount;

        totalValue.total += itemTotal;
        totalValue.amount += amount;
        return totalValue;
      }, {
        total: 0,
        amount: 0,
      })

      total = parseFloat(total.toFixed(2))
      return {
        ...state,
        total,
        amount
      }
    default:
      break;
  }
  throw new Error("No matching type")
}

export default reducer;

