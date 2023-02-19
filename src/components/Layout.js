import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Friends from '../pages/Friends'

import Home from '../pages/Home'
import Library from '../pages/Library'
import Header from './Header'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <Fragment>
      <main className="main">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home data={props.data} />} />
          <Route path="/biblioteca" element={<Library />} />
          <Route path="/amigos" element={<Friends />} />
        </Routes>
      </main>
      <footer className="footer">
        Desenvolvido por Henrique. {new Date().getFullYear()}
      </footer>
    </Fragment>
  )
}

export default Layout
