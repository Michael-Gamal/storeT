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
          border border-gray-300
          bg-white
          cursor-pointer
          flex items-center justify-center
          hover:bg-gray-100
          transition
          font-bold
          rounded-sm
        "
        onClick={() => console.log(productId)}
      >
        <IoIosHeartEmpty />
      </button>
    );
  }
  
  export default FavoriteToggleButton;