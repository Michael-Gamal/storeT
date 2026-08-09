import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";

function Navbar() {
    return (
        <nav className="border-b">
        <Container className="flex flex-col md:flex-row sm:items-center sm:justify-between flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className={'flex gap-4 items-center '}>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
        </Container>
        </nav>
    )
}

export default Navbar;