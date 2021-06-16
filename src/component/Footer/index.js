import React from 'react'
import "./styles.scss"

// Icons
import { AiOutlineArrowRight } from 'react-icons/ai';

// Components
import FooterAdvertisment from './FooterAdvertisment';
import FooterCur from './FooterCur';
import FooterLink from './FooterLink'
import FooterLogo from './FooterLogo';
import FooterWebAuth from './FooterWebAuth';
import Media from 'react-responsive'
import OnMobileMenuTransition from '../Hoc/OnMobileMenuTransition/OnMobileMenuTransition'

const Footer = () => {
    return (
      <OnMobileMenuTransition>
        <div className="Footer">
          <div className="FooterFlexBoxOne">
            <div className="FooterInnerFlexBox">
                <h1>
                    We are unisex, we are vegans,<br/>      
                    We are #dothefuture
                </h1>
                <div className="ContactFooter">
                    <input type="text" placeholder="Email address"/>
                    <div className='icon'>
                    <AiOutlineArrowRight />
                    </div>
                </div>
                <p>
                    By entering your email address, you agree to receive emails from Muroexe.
                </p>
            </div>
              <FooterLink Title="All about your order">
                  <li>
                  Shipments
                </li>
                  <li>
                  Exchange & Returns
                </li>
                  <li>
                  Size Chart
                </li> 
                <li>
                  FAQ
                </li>
              </FooterLink>
              <FooterLink Title="All about us :)"> 
                <li>
                  About Us
                </li>
                  <li>
                  Contact
                </li>
                <li>
                  Dress Your Projects
                </li> 
                <li>
                Design Process
                </li>
                <li>
                Official Stores
                </li>
                <li>
                Legal
                </li>
              </FooterLink>
            </div>
            <div className="FooterFlexBoxTwo">
              <FooterAdvertisment Title="Accepted payment methods"/>
              <div>
                <FooterCur Title="Currency EUR | English"/>
                <FooterLogo imgUrl="https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/logo-peta_200x.png?v=8207845700407246785"/>
              </div>
            </div>
            <Media query="(max-width: 550px)">
              <FooterWebAuth Paragraph={`© Coming back from 2050, Muroexe\n Paseo de los Melancólicos, 9. Madrid`}/>
            </Media>
        </div>
      </OnMobileMenuTransition>
    )
}

export default Footer
