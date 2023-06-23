import { styled } from "../styles" 
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'

import tshirt1 from '../assets/tshirts/1.png'
import tshirt2 from '../assets/tshirts/2.png'
import tshirt3 from '../assets/tshirts/3.png'
import Image from "next/image"
import 'keen-slider/keen-slider.min.css'


const Button = styled('button', {
  background: '$rocketseat'
})

export default function Home() {
  
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  
  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt="tshirt1"/>

        <footer>
          <strong>T-shirt 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt="tshirt1"/>

        <footer>
          <strong>T-shirt 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt="tshirt1"/>

        <footer>
          <strong>T-shirt 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
