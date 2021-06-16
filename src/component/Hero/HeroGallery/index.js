import React from 'react'
import './styles.scss'

const HeroGallery = () => {
    return (
        <div className="HeroGallery">
            <div className="HeroGallery-media__desktop">
                    <div className="HeroGallery-title">
                    We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.
                    </div>
                <div className="HeroGallery-subTitle__link">
                    <div className="HeroGallery-subTitle">                 
                    We have sold more than 300K pairs. We have customers in more than 51 countries. We sell in more tan 320 shops all around the globe.
                    </div>
                    <div className="HeroGallery-link">#dothefuture</div>
                </div>
            </div>
                <div className="HeroGallery-image">
                    <button>instashop</button>
                </div>
                <div className="HeroGallery-footer">
                    <p>#muroexe</p>
                    <p>instashop</p>
                </div>
        </div>
    )
}

export default HeroGallery
