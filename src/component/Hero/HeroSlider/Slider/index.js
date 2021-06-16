import React from 'react'
import {Carousel} from 'react-bootstrap'
import "./styles.scss"

const Slider = () => {
    return (
        <Carousel controls={false}>
        <Carousel.Item>
            <img
              className="d-block"
              src="https://cdn.shopify.com/s/files/1/1241/4530/files/Lemondelogo_120x.png?v=1582798443"
              alt="First slide"
            />
          <Carousel.Caption>
        <p> 
                     "La nouvelle marque de chaussures élégantes et techniques pour votre quotidien."
                </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block_go"
              src="//cdn.shopify.com/s/files/1/1241/4530/files/gq-logo_120x.png?v=1582798573"
              alt="Second slide"
              />
          <Carousel.Caption>
          <p> 
                      
          Muroexe seduces at first sight. The simplicity of its design, cleanliness and a very appropriate choice of colors
                
                </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block"
              src="//cdn.shopify.com/s/files/1/1241/4530/files/elle-logo-png_120x.png?v=1582798605"
              alt="Third slide"
              />
          <Carousel.Caption>
          <p> 
                     All the advantages of a sport shoes, but wrapped in a disruptive design
                </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block"
              src="//cdn.shopify.com/s/files/1/1241/4530/files/hypebeast-png-3_120x.png?v=1582798659"
              alt="Fourth slide"
            />
          <Carousel.Caption>
          <p> 
                     The brand highlights its slick, minimalist running-inspired silhouettes, offered in an array of five hues
                </p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    )
}

export default Slider
