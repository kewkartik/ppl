import React from "react";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8 pt-24 pb-72">
      <div className="">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-20 pb-4">PPL Lab</h1>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Personal website to showcase PPL (Python Programming Lab) practice & notes</h2>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <a href="/practice/calc">Calc</a>
        <Separator orientation="vertical" />
        <a href="/ments/first">Ments</a>
      </div>
    </main>
  )
}
