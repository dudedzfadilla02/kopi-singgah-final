import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/menu', label: 'Menu' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/blog', label: 'Blog' },
  { to: '/reservasi', label: 'Reservasi' },
  { to: '/faq', label: 'FAQ' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Layout() {
  return (
    <>
      <header className="bg-[#17302a] px-8 py-4 text-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <span className="text-xl font-bold">Kopi Singgah</span>
          <ul className="flex flex-wrap gap-4">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `border-b-2 transition-colors hover:border-[#d9a521] ${
                      isActive ? 'border-[#d9a521]' : 'border-transparent'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto min-h-[70vh] max-w-5xl px-8 py-12">
        <Outlet />
      </main>

      <footer className="bg-[#17302a] px-8 py-6 text-center text-white">
        © 2026 Kopi Singgah
      </footer>
    </>
  )
}