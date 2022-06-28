import './index.css'

const CartSummary = props => {
  const {cartList} = props

  const numberOfItemsInTheCart = cartList.length
  const totalPriceList = cartList.map(
    eachItem => eachItem.price * eachItem.quantity,
  )
  const totalPrice = totalPriceList.reduce(
    (total, eachPrice) => total + eachPrice,
  )

  return (
    <div className="cart-summary-bg-container">
      <div className="cart-summary-price-container">
        <h1 className="cart-summary-total-price-header">
          Order Total:{' '}
          <span className="cart-summary-total-price">Rs {totalPrice}/-</span>
        </h1>
        <p className="cart-summary-total-items">
          {numberOfItemsInTheCart} items in cart
        </p>
        <button type="button" className="checkout-button-lg">
          Checkout
        </button>
      </div>
      <button type="button" className="checkout-button-sm">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
