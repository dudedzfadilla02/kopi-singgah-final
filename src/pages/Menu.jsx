import MenuCard from '../components/MenuCard'
import { menu } from '../data/menu'

export default function Menu() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Menu</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {menu.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}