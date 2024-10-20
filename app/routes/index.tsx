// app/routes/index.tsx
import * as fs from 'fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { useState } from 'react'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn('GET', () => {
  return readCount()
})

const updateCount = createServerFn('POST', async (addBy: number) => {
  const count = await readCount()
  await fs.promises.writeFile(filePath, `${Number(count) + addBy}`)
  return (Number(count) + addBy)
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => getCount(),
  notFoundComponent: () => <h1>Route not found</h1>
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          updateCount(3).then((newVal) => {
            console.log(newVal, ":::client state tracker")
            setCount(newVal)
            router.invalidate()
          })
        }}
      >
        Add 1 to {state}?
      </button>
      <h1>Client count state: {count}</h1>
    </>
  )
}
