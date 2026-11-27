
import { Link } from 'react-router-dom'

export default function MenuCard({ id, nama, harga, deskripsi }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-lg">

      <h2 className="mb-2 text-xl font-bold">
        {nama}
      </h2>

      <p className="mb-4 text-gray-600">
        {deskripsi}
      </p>

      <p className="mb-4 text-lg font-semibold text-amber-700">
        {harga.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0
        })}
      </p>

      <Link
        to={`/menu/${id}`}
        className="inline-block rounded-lg bg-amber-800 px-4 py-2 text-white hover:bg-amber-900"
      >
        Lihat Detail
      </Link>

    </div>
  )
}
