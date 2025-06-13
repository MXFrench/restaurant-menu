import { useState } from 'react'
import OrderReview from './OrderReview'
import { useOrder } from '../OrderContext';

const CheckoutForm = () => {
  const { orderType } = useOrder();
  const [sameAsBilling, setSameAsBilling] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="grid gap-6" onSubmit={submitForm}>
      <div className="flex">
        <label className="flex-1/2 grid gap-2">
          <span className="form-label">First Name</span>
          <input type="text"
            className="form-input rounded-r-none!"
            placeholder="First Name"
          />
        </label>

        <label className="flex-1/2 grid gap-2">
          <span className="form-label">Last Name</span>
          <input type="text"
            className="form-input rounded-l-none!"
            placeholder="Last Name"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="form-label">Email</span>
        <input type="email"
          className="form-input"
          placeholder="Email"
        />
      </label>

      <div className="grid gap-2">
        <label htmlFor="credit" className="form-label">Credit</label>
        <div className="grid grid-cols-2 grid-rows-2">
          <input type="text" id="credit"
            className="form-input col-span-full rounded-bl-none! rounded-br-none!"
            placeholder="Card Number"
          />

          <input type="text"
            className="form-input rounded-t-none! rounded-br-none!"
            placeholder="MM/YY"
          />

          <input type="text"
            className="form-input rounded-t-none! rounded-bl-none!"
            placeholder="CVC"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="billing" className="form-label">Billing Adress</label>
        <div className="grid">
          <input type="text" id="billing"
            className="form-input rounded-b-none!"
            placeholder="Street Address"  
          />

          <input type="text"
            className="form-input rounded-t-none!"
            placeholder="City, State, Zip"  
          />
        </div>
      </div>

      {orderType === "delivery" && (
        <div className="grid gap-2">
          <div className="flex items-center gap-4">
            <label htmlFor="delivery" className="form-label">Delivery Address</label>
            <p className="font-thin text-accent-1">Same As Billing</p>
            <input type="checkbox"
              className="accent-accent-2 cursor-pointer"
              value={sameAsBilling}
              onChange={() => setSameAsBilling(prev => !prev)}
            />
          </div>

          {!sameAsBilling && (
            <div className="grid">
              <input type="text" id="delivery"
                className="form-input rounded-b-none!"
                placeholder="Street Address"  
              />

              <input type="text"
                className="form-input rounded-t-none!"
                placeholder="City, State, Zip"  
              />
            </div>
          )}
        </div>
      )}

      <div className="grid gap-4">
        <p className="form-label">Review Order</p>

        <OrderReview />
      </div>

      <button type="submit" className="bg-accent-2/80 hover:bg-accent-2 text-accent-1 hover:text-fg py-2 px-4 rounded-lg hover:shadow-main-sm transition cursor-pointer">Submit Order</button>

    </form>
  )
}

export default CheckoutForm