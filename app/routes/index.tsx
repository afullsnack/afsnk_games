import { Section } from '@/components/craft'
import { LandingLayout } from '@/components/landing-layout'
import { Button } from '@/components/ui/button'
import { createFileRoute, useRouter, Link } from '@tanstack/react-router'
import {CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
// import { createServerFn } from '@tanstack/start'
// import { useState } from 'react'

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
      <Section className='py-24 place-items-center grid gap-6'>
        <h1 className='text-center text-balance leading-none text-5xl font-bold font-sans lg:text-7xl'>Game and win <br/>your way!</h1>
        <span className='text-center text-balance leading-none text-lg font-medium font-sans lg:text-xl'>Leveraging web3 to create engaing and rewarding experiences</span>
      </Section>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-foreground"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Button}
            onClick={() => alert('Alert window!')}
            className="px-4 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Get started
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </LandingLayout>
  )
}
