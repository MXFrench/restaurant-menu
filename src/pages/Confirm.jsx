import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const Confirm = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const countDown = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(countDown);
  }, [])

  return (
    <div className="min-h-screen grid place-content-center gap-12 justify-items-center">
      <img
        src={logo}
        className="h-12"
        alt="logo-img"
      />

      <div className="max-w-60 min-h-20">
        {isLoading ? (
          <div className="grid gap-4 justify-items-center">
            <span className="size-8 border-4 rounded-full border-accent-1 border-t-transparent animate-spin"></span>
            <p>Processing order...</p>
          </div>
        ): (
          <p className="text-2xl text-center animate-pulse">
            Thanks for ordering! Come again soon!
          </p>
        )}
      </div>
    </div>
  )
}

export default Confirm