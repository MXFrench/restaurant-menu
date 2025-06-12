import ViewOrderBtn from './ViewOrderBtn'
import CheckoutBtn from './CheckoutBtn'

const MenuFooter = () => {
  return (
    <footer className="p-4 bg-base border-t-2 border-t-accent-1 shadow-main">
      <div className="w-[min(32rem,_100%)] mx-auto grid grid-cols-2 gap-4">
        <ViewOrderBtn />
        <CheckoutBtn />
      </div>
    </footer>
  )
}

export default MenuFooter