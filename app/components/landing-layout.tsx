import * as React from "react";
import { Main, Section, Layout } from "@/components/craft"

export function LandingLayout({ children }: { children: React.ReactNode }) {

  return (
    <Main className="w-full text-background bg-foreground py-5 h-screen place-items-center items-center px-1">
      {children}
    </Main>
  );
}
