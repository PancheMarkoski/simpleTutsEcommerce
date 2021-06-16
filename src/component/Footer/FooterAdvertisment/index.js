import React from 'react'
import { GrAmex } from 'react-icons/gr';
import { FaCcApplePay } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { RiPaypalLine } from 'react-icons/ri';
import { FaCcVisa } from 'react-icons/fa';
import FooterWebAuth from '../FooterWebAuth'
import Media from "react-responsive"
import "./styles.scss"

const FooterAdvertisment = ({Title}) => {
    return (
        <div className="FooterAdvertisment">
            <h2 className="FooterAdvertisment-title">{Title}</h2>
            <div className="FooterAdvertisment-images">
               <GrAmex />
               <FaCcApplePay />
               <FaCcMastercard />
               <RiPaypalLine />
               <FaCcVisa />
            </div>
            <Media query="(min-width: 550px)">
            <FooterWebAuth className="item-4" Paragraph={`© Coming back from 2050, Muroexe\n Paseo de los Melancólicos, 9. Madrid`}/>
            </Media>
        </div>
    )
}

export default FooterAdvertisment
