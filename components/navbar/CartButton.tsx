import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

function CartButton() {
  const numItemsInCart = 9;
  return (
    <Link href='/cart'
      className="flex justify-center items-center relative cursor-pointer w-9 h-9 rounded-md shadow-sm border border-[#e2e8f0]">
      <LuShoppingCart/>
      <span className="absolute -top-3 -right-3 bg-[#2b7fff] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">{numItemsInCart}</span>
    </Link>
  )
}

export default CartButton