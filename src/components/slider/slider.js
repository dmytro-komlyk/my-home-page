import * as React from "react"
import CardProject from "../card-project/card-project"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Slider = ({ items }) => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      { items.map(({ node }) => {
        return (
        <div className="keen-slider__slide" key={node.id} item>
          <CardProject data={node} />
        </div>
      )})}
    </div>
  )
}

export default Slider;