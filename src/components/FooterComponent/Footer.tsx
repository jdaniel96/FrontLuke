import FooterStyle from './Footer.module.css'
import {TiSocialTwitter} from 'react-icons/ti'
import {BsDiscord} from 'react-icons/bs'
const Footer = function(){
    return(
        <footer className={FooterStyle.Footer}>
            {/* <a href="somewhere">Something</a> */}
            <a className={FooterStyle.twitter} href="somewhere"><TiSocialTwitter className={FooterStyle.iconSize1}/></a>
            <a className={FooterStyle.discord}href="somewhere"><BsDiscord className={FooterStyle.iconSize2}/></a>
            {/* <a href="somewhere">Something</a> */}
        </footer>
    )
}

export default Footer;
