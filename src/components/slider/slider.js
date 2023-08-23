import React, { useState } from "react"
import CardProject from "../card-project/card-project"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import * as styles from './slider.module.scss';

const getCountDots = (currentInstance) => {
  if (currentInstance.size > 900) {
    return Array(currentInstance.track.details.slides.length - 2).keys();
  } else if (currentInstance.size > 600) {
    return Array(currentInstance.track.details.slides.length - 1).keys();
  } else {
    return Array(currentInstance.track.details.slides.length).keys();
  }
}

const Slider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: "center",
    },
    breakpoints: {
      "(max-width: 449px)": {
        slides: { origin: "center", perView: 1.1, spacing: 5 },
      },
      "(min-width: 450px)": {
        slides: { perView: 1.5, spacing: 5 },
      },
      "(min-width: 600px)": {
        slides: { perView: 1.7, spacing: 5},
      },
      "(min-width: 750px)": {
        slides: { perView: 2.4, spacing: 5},
      },
      "(min-width: 900px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  
  return (
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className="keen-slider">
        {items.map(({ node }) => {
          return (
          <div className="keen-slider__slide" key={node.id} item>
            <CardProject data={node} />
          </div>
        )})}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles.dots}>
          {[...getCountDots(instanceRef.current)].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={(currentSlide === idx ? styles.dotsActive : styles.dots)}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Slider;