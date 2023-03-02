import CartItem from "./CartItem";
const reducer = (state, action) => {
  
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  
  }
if (action.type === "GET_TOTALS") {
let {total, amount} =state.cart.reduce(( cartTotal, cartItem ) => {
  const { price, amount } = cartItem
    cartTotal.amount += amount

  cartTotal.total += cartTotal.amount * price
  return cartTotal
}, {
  total: 0,
  amount: 0
} 
)
amount = (amount > 99 ? 99: amount);
total = parseFloat(total.toFixed(2))
return {...state, total, amount}
}
if (action.type === "LOADING") {
    return {...state, loading: true}
  }
if (action.type === "DISPLAY_ITEMS") {
    return {...state, loading: false, cart: action.payload}
  } 

  return state;
};

export default reducer;
