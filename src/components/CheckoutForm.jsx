import { useState } from 'react'
import OrderReview from './OrderReview'
import { useOrder } from '../OrderContext';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CheckoutForm = () => {
  const { orderType } = useOrder();
  const [showReview, setShowReview] = useState(true);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    credit: {
      number: "",
      expiration: "",
      cvc: "",
    },
    billingAddress: {
      line1: "",
      line2: "",
    },
    deliveryAddress: orderType === "delivery" ? {
      isBilling: false,
      line1: "",
      line2: "",
    } : null,
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form className="grid gap-6" onSubmit={submitForm}>
      <div className="flex">
        <label className="flex-1/2 grid gap-2">
          <span className="form-label">First Name</span>
          <input type="text"
            className="form-input rounded-r-none!"
            placeholder="First Name"
            value={formData.fName}
            onChange={(e) => setFormData(prev => ({...prev, fName: e.target.value}))}
          />
        </label>

        <label className="flex-1/2 grid gap-2">
          <span className="form-label">Last Name</span>
          <input type="text"
            className="form-input rounded-l-none!"
            placeholder="Last Name"
            value={formData.lName}
            onChange={(e) => setFormData(prev => ({...prev, lName: e.target.value}))}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="form-label">Email</span>
        <input type="email"
          className="form-input"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        />
      </label>

      <div className="grid gap-2">
        <label htmlFor="credit" className="form-label">Credit</label>
        <div className="grid grid-cols-2 grid-rows-2">
          <input type="text" id="credit"
            className="form-input col-span-full rounded-bl-none! rounded-br-none!"
            placeholder="Card Number"
            value={formData.credit.number}
            onChange={(e) => setFormData(prev => ({...prev, credit: {...prev.credit, number: e.target.value}}))}
          />

          <input type="text"
            className="form-input rounded-t-none! rounded-br-none!"
            placeholder="MM/YY"
            value={formData.credit.expiration}
            onChange={(e) => setFormData(prev => ({...prev, credit: {...prev.credit, expiration: e.target.value}}))}
          />

          <input type="text"
            className="form-input rounded-t-none! rounded-bl-none!"
            placeholder="CVC"
            value={formData.credit.cvc}
            onChange={(e) => setFormData(prev => ({...prev, credit: {...prev.credit, cvc: e.target.value}}))}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="billing" className="form-label">Billing Adress</label>
        <div className="grid">
          <input type="text" id="billing"
            className="form-input rounded-b-none!"
            placeholder="Street Address"
            value={formData.billingAddress.line1}
            onChange={(e) => setFormData(prev => ({...prev, billingAddress: {...prev.billingAddress, line1: e.target.value}}))}
          />

          <input type="text"
            className="form-input rounded-t-none!"
            placeholder="City, State, Zip"
            value={formData.billingAddress.line2}
            onChange={(e) => setFormData(prev => ({...prev, billingAddress: {...prev.billingAddress, line2: e.target.value}}))}
          />
        </div>
      </div>

      {orderType === "delivery" && (
        <div className="grid gap-2">
          <div className="flex items-center gap-4">
            <label htmlFor="delivery" className="form-label">Delivery Address</label>
            <label className="font-thin text-accent-1" htmlFor="sab">Same As Billing</label>
            <input type="checkbox" id="sab"
              className="accent-accent-2 cursor-pointer"
              value={formData.deliveryAddress.isBilling}
              onChange={() => {
                if (orderType !== "delivery") return;
                setFormData(prev => {
                  const delAdd = prev.deliveryAddress;
                  const isBilling = delAdd.isBilling;
                  const ba1 = prev.billingAddress.line1;
                  const ba2 = prev.billingAddress.line2;

                  return {
                    ...prev,
                    deliveryAddress: {
                      ...delAdd,
                      isBilling: !isBilling,
                      line1: !isBilling ? ba1 : "",
                      line2: !isBilling ? ba2 : "",
                    }
                  }
                })
              }}
            />
          </div>

          {!formData.deliveryAddress?.isBilling && (
            <div className="grid">
              <input type="text" id="delivery"
                className="form-input rounded-b-none!"
                placeholder="Street Address"
                value={formData.deliveryAddress.line1}
                onChange={(e) => setFormData(prev => ({...prev, deliveryAddress: {...prev.deliveryAddress, line1: e.target.value}}))}
              />

              <input type="text"
                className="form-input rounded-t-none!"
                placeholder="City, State, Zip"
                value={formData.deliveryAddress.line2}
                onChange={(e) => setFormData(prev => ({...prev, deliveryAddress: {...prev.deliveryAddress, line2: e.target.value}}))}
              />
            </div>
          )}
        </div>
      )}

      <div className="grid gap-4">
        <button type="button" className="form-label text-left cursor-pointer flex items-center gap-2"
          onClick={() => setShowReview(prev => !prev)}
        >Review Order {showReview ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
        {showReview && <OrderReview />}
      </div>

      <button type="submit" className="bg-accent-2/80 hover:bg-accent-2 text-accent-1 hover:text-fg py-2 px-4 rounded-lg hover:shadow-main-sm transition cursor-pointer">Submit Order</button>

    </form>
  )
}

export default CheckoutForm