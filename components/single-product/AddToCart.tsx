import Button from "../ui/Button"

const AddToCart = ({productId} : {productId: string}) => {
  return (
    <Button className= "capitalize mt-8 h-11 px-8 " >
      Add to Cart
    </Button>
  )
}

export default AddToCart
