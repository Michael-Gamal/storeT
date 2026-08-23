"use client";
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";


function FavoriteToggleButton({
    productId,
  }: {
    productId: string;
  }) {
    return (
      <button
        type="button"
        className="
          w-9 h-9
          cursor-pointer
          flex items-center justify-center
          transition
          font-bold
          rounded-sm
          bg-background
          hover:text-accent-foreground
          border border-input
          hover:bg-accent hover:text-accent-foreground
        "
        onClick={() => console.log(productId)}
      >
        <IoIosHeartEmpty />
      </button>
    );
  }
  
  export default FavoriteToggleButton;