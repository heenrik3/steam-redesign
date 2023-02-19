import Layout from './components/Layout'

import './sass/main.sass'

const data = [
  {
    title: 'Yu-Gi-Oh! Master Duel',
    img: 'yu-gi-oh.png',
    preview: [
      'https://www.gematsu.com/wp-content/uploads/2021/08/YuGiOh-Master-Duel_08-25-21.jpg',
      'https://cdn.akamai.steamstatic.com/steam/apps/1449850/ss_6501d1b0e2dc14a5e1031d5e02456d9b72912a0b.1920x1080.jpg?t=1676271488',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius nulla facilisis tellus varius, ac pulvinar nisl ullamcorper. Aenean vehicula interdum aliquet. Sed tincidunt, nulla lacinia condimentum placerat, mi sem vehicula augue, nec scelerisque ipsum dui eget turpis. Phasellus ac imperdiet justo.',
    price: 'Gratuito',
    tags: ['Cartas', 'Monstros', 'Magias', 'Armadilhas'],
  },
  {
    title: 'Hogswarts Legacy',
    img: 'hogwarts.jpg',
    preview: [
      'https://clubedovideogame.com.br/wp-content/uploads/2022/12/maxresdefault-17-1024x576.jpg.webp',
      'https://s2.glbimg.com/hLVdRGO_mZ8OMkxo24PMHhSxgSM=/0x0:1363x762/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/p/n/jbbhyPSJmRwWPRiBTaYw/hogwarts-legacy.jpg',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius nulla facilisis tellus varius, ac pulvinar nisl ullamcorper. Aenean vehicula interdum aliquet. Sed tincidunt, nulla lacinia condimentum placerat, mi sem vehicula augue, nec scelerisque ipsum dui eget turpis. Phasellus ac imperdiet justo.',
    price: 'R$299',
    tags: ['Harry Potter', 'Bruxos', 'Magias', 'Hogwarts'],
  },
  {
    title: 'Apex Legends',
    img: 'apex.jpg',
    preview: [
      'https://www.pichauarena.com.br/wp-content/uploads/2022/12/208d0429-02fc-45d7-92f5-0ca469c83b77.jpg',
      'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/07/04/apex-legends-mobile-(2)-r1dd67pr3fqd.jpg',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius nulla facilisis tellus varius, ac pulvinar nisl ullamcorper. Aenean vehicula interdum aliquet. Sed tincidunt, nulla lacinia condimentum placerat, mi sem vehicula augue, nec scelerisque ipsum dui eget turpis. Phasellus ac imperdiet justo.',
    price: 'Gratuito',
    tags: ['FPS', 'Armas', 'Battle Royale', 'Equipe'],
  },
  {
    title: 'Call Of Duty Infinite Warfare',
    img: 'cod.png',
    preview: [
      'https://m.media-amazon.com/images/I/91e8WZ67XKL._AC_SL1500_.jpg',
      'https://support.activision.com/servlet/servlet.ImageServer?id=0150B000005d1Sr&oid=00DU0000000HMgw&lastMod=1477790103000',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius nulla facilisis tellus varius, ac pulvinar nisl ullamcorper. Aenean vehicula interdum aliquet. Sed tincidunt, nulla lacinia condimentum placerat, mi sem vehicula augue, nec scelerisque ipsum dui eget turpis. Phasellus ac imperdiet justo.',
    price: 'R$200',
    tags: ['FPS', 'Guerra', 'Armas', 'Militar'],
  },
  {
    title: 'Fifa 23',
    img: 'fifa.jpg',
    preview: [
      'https://static1-br.millenium.gg/articles/8/12/61/8/@/142487-fifa-23-article_cover_bd-1.jpg',
      'https://adrenaline.com.br/uploads/chamadas/imagem_2022-08-29_093557497.png',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius nulla facilisis tellus varius, ac pulvinar nisl ullamcorper. Aenean vehicula interdum aliquet. Sed tincidunt, nulla lacinia condimentum placerat, mi sem vehicula augue, nec scelerisque ipsum dui eget turpis. Phasellus ac imperdiet justo.',
    price: 'Gratuito',
    tags: ['Futebol', 'Equipe', 'Competitivo', 'Copa'],
  },
  {
    title: 'Stray',
    img: 'stray.jpg',
    preview: [
      'https://assets.reedpopcdn.com/stray-header_BOF1FcC.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/stray-header_BOF1FcC.jpg',
      'https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_88e209a90c2039fa76bca6fa08c641365be38d50.1920x1080.jpg?t=1670349423',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius nulla facilisis tellus varius, ac pulvinar nisl ullamcorper. Aenean vehicula interdum aliquet. Sed tincidunt, nulla lacinia condimentum placerat, mi sem vehicula augue, nec scelerisque ipsum dui eget turpis. Phasellus ac imperdiet justo.',
    price: 'R$299',
    tags: ['Animal', 'Gato', 'Pet', 'Sozinho'],
  },
]

function App() {
  return (
    <div className="app">
      <Layout data={data} />
    </div>
  )
}

export default App
