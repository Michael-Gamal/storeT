import Link from "next/link"
import { VscCode } from "react-icons/vsc" 

function Logo() {
  return (
    <div className="w-10 h-10 flex items-center justify-center bg-[#3d83f7] rounded-md ">
        <Link href="/" className="text-2xl text-white p-2  ">
          <VscCode />
        </Link>
    </div>
  )
}

export default Logo