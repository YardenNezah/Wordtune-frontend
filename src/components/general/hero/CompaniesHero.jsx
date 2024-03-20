import React from 'react'
import GridContainer from '../../layout/GridContainer'
import nike from '../../../images/nike.png';
import walmart from '../../../images/walmart.png';
import ebay from '../../../images/ebay.png';
import fujifilm from '../../../images/fujifilm.png';
import zoom from '../../../images/zoom.png';
import google from '../../../images/google.png';
import doordash from '../../../images/doordash.png';
import airbnb from '../../../images/airbnb.png';
import medtronic from '../../../images/medtronic.png';
import primis from '../../../images/primis.png';
import adidas from '../../../images/adidas.png';
import nice from '../../../images/nice.png';
import samsung from '../../../images/samsung.png';
import wix from '../../../images/wix.png';

const CompaniesHero = () => {
    const companiesImgSrc = [nike, walmart, ebay, fujifilm, zoom, google, doordash, airbnb, medtronic, primis, adidas, nice, samsung, wix]
    return (
        <section className="companies-hero">
            <p className="hero-paragraph">Trusted by professional in leading companies.</p>
            <GridContainer>
                {companiesImgSrc.map((src) => <img src={src} alt={src} className='company-img'></img>)}
            </GridContainer>
        </section>
    )
}

export default CompaniesHero;