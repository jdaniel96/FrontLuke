import NavbarStyle from './Navbar.module.css'
import {SiReactivex} from 'react-icons/si'
import { Box } from '@chakra-ui/react'

const Navbar = function(){
    return(
        <Box justifyItems={'self-end'} width={[ "80%", "85%", "85%"]} className={NavbarStyle.nav}>
            <a className={NavbarStyle.Logo}href="somewhere"><SiReactivex className={NavbarStyle.logo}/></a>
            <a className={NavbarStyle.Something1}href="somewhere">Something</a>
            <a className={NavbarStyle.Something2}href="somewhere">Something</a>
            <a className={NavbarStyle.Something3}href="somewhere">Something</a>
            <a className={NavbarStyle.Something4}href="somewhere">Something</a>
        </Box>
    )
}

export default Navbar;