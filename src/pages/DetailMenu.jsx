import { useParams, Link } from 'react-router-dom'
import { menu } from '../data/menu'

export default function DetailMenu() {
  const { id } = useParams()
  const item = menu.find((m) => m.id === Number(id))

  if (!item) return <p>Menu tidak ditemukan.</p>

  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">{item.nama}</h1>
      <p>{item.deskripsi}</p>
      <p className="mt-4 font-bold">Rp {item.harga.toLocaleString('id-ID')}</p>
      <Link to="/menu" className="mt-6 inline-block underline">← Kembali ke menu</Link>
    </>
  )
}