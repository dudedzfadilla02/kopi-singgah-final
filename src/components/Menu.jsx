import { Link } from 'react-router-dom'

export default function MenuCard({ id, nama, harga, deskripsi }) {
  return (
    <article className="rounded-lg border-2 border-[#17302a] p-6">
      <h3 className="mb-2 font-bold">{nama}</h3>
      <p>{deskripsi}</p>
      <p className="mt-4 font-bold">Rp {harga.toLocaleString('id-ID')}</p>
      <Link to={`/menu/${id}`} className="mt-3 inline-block text-[#d9a521] underline">
        Lihat detail
      </Link>
    </article>
  )
}