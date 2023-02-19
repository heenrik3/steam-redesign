import { useEffect, useState } from 'react'

function Slider(props) {
  const [pos, setPos] = useState(0)
  const { slider } = props
  const sliderTimeout = 3500

  function handleChange(e) {
    setPos(Array.from(e.target.parentNode.children).indexOf(e.target))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((pos) => (pos + 1 > slider.length - 1 ? 0 : pos + 1))
    }, sliderTimeout)

    return () => clearInterval(interval)
  }, [slider.length, sliderTimeout])

  return (
    <div className="slider">
      <picture className="slider__pic">
        <div className="slider__tags">
          {slider[pos].tags.map((tag, i) => (
            <div className="slider__tag" key={i}>
              {tag}
            </div>
          ))}
        </div>
        <img
          src={`assets/${slider[pos].img}`}
          className="slider__img"
          alt="slider preview"
        ></img>
      </picture>

      <div className="slider__info">
        <div className="slider__details">
          <span className="slider__title">{slider[pos].title}</span>
          <p className="slider__description">{slider[pos].description}</p>

          <span className="slider__price">{slider[pos].price}</span>

          <div className="slider__action">
            <button className="slider__btn">Disponível</button>

            <i className="slider__platform fa-brands fa-windows"></i>
          </div>
        </div>

        {slider[pos].preview.map((img, i) => (
          <img
            src={img}
            className="slider__details--img"
            alt="game preview"
            key={i}
          ></img>
        ))}
      </div>

      <div className="slider__controls">
        <div className="slider__controls--wrapper">
          {slider.map((item, i) => (
            <button
              className={`slider__control ${
                pos === i ? 'slider__control--active' : ''
              }`}
              onMouseEnter={handleChange}
              key={i}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
