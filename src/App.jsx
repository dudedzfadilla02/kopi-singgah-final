import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Beranda from './pages/Beranda'
import Tentang from './pages/Tentang'
import Menu from './pages/Menu'
import DetailMenu from './pages/DetailMenu'
import Galeri from './pages/Galeri'
import Blog from './pages/Blog'
import Reservasi from './pages/Reservasi'
import Faq from './pages/Faq'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<DetailMenu />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reservasi" element={<Reservasi />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}