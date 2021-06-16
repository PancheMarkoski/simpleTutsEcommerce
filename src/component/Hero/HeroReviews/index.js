import React from 'react'
import "./styles.scss"

const HeroReviews = ({imgStars, grade, gradeTitle, usersReviews}) => {
    return (
        <div className="HeroReviews">
            <img className="HeroReviews-imageStars" src={imgStars} alt="stars grade" />
            <div className="HeroReviews-grade">{grade}</div>
            <h4>{gradeTitle}</h4>
            <p className="HeroReviews-userReview">{usersReviews}</p>
        </div>
    )
}

export default HeroReviews
