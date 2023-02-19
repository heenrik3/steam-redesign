function Card(props) {
  return (
    <div className="card">
      <img src={`assets/${props.card.img}`} className="card__img"></img>
    </div>
  )
}

export default Card
