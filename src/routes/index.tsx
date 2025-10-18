import { createFileRoute } from '@tanstack/react-router'

import logo from '/assets/tmmm-icon.jpg'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="h-full">
      <main className="flex h-full flex-col items-center justify-center">
        <div className="relative h-20 w-20">
          <img className="object-fit" src={logo} alt="icon" />
        </div>
      </main>
    </div>
  )
}
