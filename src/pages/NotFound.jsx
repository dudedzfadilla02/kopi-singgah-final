import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">404, halaman tidak ada</h1>
      <Link to="/" className="underline">Kembali ke beranda</Link>
    </>
  )
}
