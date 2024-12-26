import { LandingLayout } from '@/components/landing-layout'
import { Button } from '@/components/ui/button'
import { createFileRoute, useRouter } from '@tanstack/react-router'
// import { createServerFn } from '@tanstack/start'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {},
  notFoundComponent: () => <h1>Route not found</h1>
})

function Home() {
  // const router = useRouter()
  // const state = Route.useLoaderData()
  // const [count, setCount] = useState(0)

  return (
    <LandingLayout>
      <h1 className='text-center text-balance leading-none text-4xl font-bold font-sans lg:text-7xl'>Game and win <br/>your way!</h1>
    </LandingLayout>
  )
}
