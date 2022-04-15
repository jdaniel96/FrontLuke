import NavbarStyle from './Navbar.module.css'

const Navbar = function(){
    return(
        <nav className={NavbarStyle.nav} >
            <a className={NavbarStyle.Logo}href="somewhere">Logo?</a>
            <a className={NavbarStyle.Something1}href="somewhere">Something</a>
            <a className={NavbarStyle.Something2}href="somewhere">Something</a>
            <a className={NavbarStyle.Something3}href="somewhere">Something</a>
            <a className={NavbarStyle.Something4}href="somewhere">Something</a>
        </nav>
    )
}

export default Navbar;