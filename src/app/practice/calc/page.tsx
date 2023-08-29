"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = async () => {
    const response = await fetch(`/api/add?a=${num1}&b=${num2}`);
    const data = await response.json();
    setResult(data.result);
  };

  const handleSub = async () => {
    const response = await fetch(`/api/sub?a=${num1}&b=${num2}`);
    const data = await response.json();
    setResult(data.result);
  };

    const handleMul = async () => {
    const response = await fetch(`/api/mul?a=${num1}&b=${num2}`);
    const data = await response.json();
    setResult(data.result);
  };

    const handleDiv = async () => {
    const response = await fetch(`/api/div?a=${num1}&b=${num2}`);
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <main className="flex flex-col mx-auto max-w-2xl p-12 pt-32">
      <div className="grid grid-cols-1 gap-4 p-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Calculator</h1>
        <Input
          type="text"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-2">
          <Button className="w-full" variant="secondary" onClick={handleAdd}>Add</Button>
          <Button className="w-full" variant="secondary" onClick={handleSub}>Sub</Button>
          <Button className="w-full" variant="secondary" onClick={handleMul}>Mul</Button>
          <Button className="w-full" variant="secondary" onClick={handleDiv}>Div</Button>
        </div>
        <Button className="w-full">
          {result && <p>Result: {result}</p>}
        </Button>
      </div>
      <div className="max-w-2xl p-6 pt-32">
      <hr />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            It has a typescript frontend (nextjs) & a python backend (flask). <br/>
            A request is made to the backend to get the result of the calc.
            <Image className="mx-auto" src="/explain.svg" width={300} height={300} alt="Flowcahrt" draggable={false} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>The python code?</AccordionTrigger>
          <AccordionContent>
            Here is an example
          <br/>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {`@app.get("/api/add")`} <br/>
            {`async function addNumbers(a, b) {`} <br/>
            {`const result = a + b;`} <br/>
            {`return { result };`} <br/>
            {`}`} 
            </code>
          <br/>
          complete py code <a href="https://github.com/kewkartik/ppl/blob/update/api/index.py" className="text-muted-foreground">here</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </main>
  )
}
