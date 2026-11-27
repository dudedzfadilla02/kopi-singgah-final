import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function TopCard() {
  const [count, setCount] = useState(0)

  return (
    <section
      id="center"
      className="flex flex-1 flex-col items-center justify-center gap-6 px-5 py-8 text-center lg:gap-6 lg:py-8"
    >
      <div className="hero relative">
        <img
          src={heroImg}
          className="relative z-0 mx-auto"
          width="170"
          height="179"
          alt=""
        />
        <img
          src={reactLogo}
          className="absolute inset-x-0 top-[34px] z-10 mx-auto h-7 [perspective:2000px] [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
          alt="React logo"
        />
        <img
          src={viteLogo}
          className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
          alt="Vite logo"
        />
      </div>

      <div>
        <h1 className="mb-5 mt-8 text-4xl font-medium tracking-tight lg:text-5xl">
          Get started
        </h1>
        <p>
          Edit{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[15px] dark:bg-gray-800">
            src/App.jsx
          </code>{' '}
          and save to test{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[15px] dark:bg-gray-800">
            HMR
          </code>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
        className="inline-block rounded-md border-2 border-transparent bg-purple-100 px-2.5 py-1.5 text-base text-purple-600 transition-colors hover:border-purple-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:bg-purple-950 dark:text-purple-300"
      >
        Count is {count}
      </button>
    </section>
  )
}

export default TopCard