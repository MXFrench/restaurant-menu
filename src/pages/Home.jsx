import bgImg from "../assets/bg-img.jpg";
import logo from "../assets/logo.svg";
import OrderButton from "../components/OrderButton";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <img 
        className="w-full h-full fixed object-cover"
        src={bgImg} 
        alt="background-image"
      />
      <div className="w-full h-full fixed z-10 bg-base/75 flex flex-col gap-8 justify-center items-center">
          <img
            className="w-80"
            src={logo}
            alt="restaurant-logo"
          />

          <OrderButton orderType="takeout" />
          <OrderButton orderType="dine-in" />
          <OrderButton orderType="delivery" />

      </div>
    </div>
  )
}

export default Home