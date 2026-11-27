import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const linkClass =
  'flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 py-1.5 pl-2 pr-3 ' +
  'text-base text-gray-900 no-underline transition-shadow duration-300 ' +
  'hover:shadow-md dark:bg-gray-800 dark:text-gray-100 ' +
  'lg:w-auto lg:justify-start'

const listClass =
  'mt-5 flex list-none flex-wrap justify-center gap-2 p-0 ' +
  'lg:mt-8 lg:flex-nowrap lg:justify-start'

const itemClass = 'basis-[calc(50%-8px)] lg:basis-auto'

function BottomCard() {
  return (
    <section
      id="next-steps"
      className="flex flex-col border-t border-gray-200 text-center dark:border-gray-700 lg:flex-row lg:text-left"
    >
      <div
        id="docs"
        className="flex-1 border-b border-gray-200 px-5 py-6 dark:border-gray-700 lg:border-b-0 lg:border-r lg:p-8"
      >
        <svg
          className="mx-auto mb-4 h-[22px] w-[22px] lg:mx-0"
          role="presentation"
          aria-hidden="true"
        >
          <use href="/icons.svg#documentation-icon"></use>
        </svg>
        <h2 className="text-xl font-medium">Documentation</h2>
        <p>Your questions, answered</p>
        <ul className={listClass}>
          <li className={itemClass}>
            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <img className="h-[18px]" src={viteLogo} alt="" />
              Explore Vite
            </a>
          </li>
          <li className={itemClass}>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
              Learn more
            </a>
          </li>
        </ul>
      </div>

      <div id="social" className="flex-1 px-5 py-6 lg:p-8">
        <svg
          className="mx-auto mb-4 h-[22px] w-[22px] lg:mx-0"
          role="presentation"
          aria-hidden="true"
        >
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2 className="text-xl font-medium">Connect with us</h2>
        <p>Join the Vite community</p>
        <ul className={listClass}>
          {[
            { href: 'https://github.com/vitejs/vite', icon: 'github-icon', label: 'GitHub' },
            { href: 'https://chat.vite.dev/', icon: 'discord-icon', label: 'Discord' },
            { href: 'https://x.com/vite_js', icon: 'x-icon', label: 'X.com' },
            { href: 'https://bsky.app/profile/vite.dev', icon: 'bluesky-icon', label: 'Bluesky' },
          ].map(({ href, icon, label }) => (
            <li key={label} className={itemClass}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`/icons.svg#${icon}`}></use>
                </svg>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default BottomCard