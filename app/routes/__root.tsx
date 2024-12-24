// app/routes/__root.tsx
import { createRootRoute } from '@tanstack/react-router'
import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import * as React from 'react'
// @ts-ignore
import appCss from "@/styles/globals.css?url"

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'BettrBets - Gaming and winning your way!',
    },
  ],
  links: () => [
    { rel: 'stylesheet', href: appCss }
  ],
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

// Root document always loadded on every route
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  )
}
