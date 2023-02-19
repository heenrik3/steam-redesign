import Card from '../components/Card'
import Page from '../components/Page'
import Slider from '../components/Slider'

function Home(props) {
  const slider = props.data

  return (
    <Page>
      <span className="title">Destaques</span>
      <Slider slider={slider} />

      <span className="title">Mais jogados</span>

      <div className="cards">
        {slider.map((card, i) => (i < 5 ? <Card card={card} key={i} /> : null))}
      </div>
    </Page>
  )
}

export default Home
