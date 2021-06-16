import React from 'react'
import "./styles.scss"
import video from '../../assets/Slider_ENG_2.mp4'
const Video = ({videoUrl}) => {
    return (
        <video className="Video" src={videoUrl ? videoUrl : video} loop autoPlay muted/>
    )
}

export default Video
