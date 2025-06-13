import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import CheckoutForm from "../components/CheckoutForm";


const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 px-4">
      <main className="grid gap-8 w-[min(100%,_60rem)] mx-auto">
        <button className="leading-none flex items-center gap-2 cursor-pointer text-accent-2 hover:text-accent-1 transition"
          onClick={() => navigate("/order")}
        ><FaLongArrowAltLeft /> Review order</button>

        <h1 className="text-2xl sm:text-4xl font-semibold">Checkout</h1>

        <CheckoutForm />

      </main>
    </div>
  )
}

export default Checkout