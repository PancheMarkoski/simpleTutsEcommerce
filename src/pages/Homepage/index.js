import React from 'react'
import "./styles.scss"

// Components
import Video from '../../component/Video'
import ProductSection from '../../component/ProductsSection'
import HeroAdvertisment from '../../component/Hero/HeroAdvertisment'
import HeroGallery from '../../component/Hero/HeroGallery'
import HeroReviews from "../../component/Hero/HeroReviews"
import HeroSlider from "../../component/Hero/HeroSlider"
import OnMobileMenuTransition from '../../component/Hoc/OnMobileMenuTransition/OnMobileMenuTransition'

// Redux
// import { connect } from 'react-redux'

const Homepage = () => {
    return (
        <OnMobileMenuTransition>
            <div className="Homepage">
                <Video videoUrl='https://cdn.shopify.com/s/files/1/1241/4530/files/Slider.mp4?v=1618905237' />
                <ProductSection title="Spring Summer Collection 21" linkName="See all models"/>
                <ProductSection title="Mid Season Sale" linkName="See all"/>
                <HeroAdvertisment title={<p>Tehnical and elegant products<br /> for your daily life. Extreme comfort.<br />100%animal free.</p>} />
                <HeroGallery />
                <div className="HeroReviewsHeroSliderFlexBox">
                    <HeroReviews 
                        imgStars="https://cdn.shopify.com/s/files/1/1241/4530/files/star-with-transparent-background-44.png?v=1582798732"
                        grade="4.7"
                        gradeTitle='"Excellent!"'
                        usersReviews="Based on 431 reviews from our users"
                    />
                    <HeroSlider />
                </div>
            </div>
        </OnMobileMenuTransition>
    )
}

// const mapStateToProps = (state) => ({
//     headerMobileMenu: state.header.mobileMenu
// })

export default Homepage;
