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

  const isValidNumber = (value:string) => /^\d*\.?\d*$/.test(value);

  const calculate = async (op:string) => {
    if (isValidNumber(num1) && isValidNumber(num2)) {
      const response = await fetch(`/api/${op}?a=${num1}&b=${num2}`);
      const data = await response.json();
      setResult(data.result);
    } else {
      setResult("Bruh! Please those are not numbers.");
    }
  };

  return (
    <main className="flex flex-col mx-auto max-w-2xl p-12 pt-32">
      <div className="grid grid-cols-1 gap-4 p-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Calculator</h1>
        <Input
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-2">
          <Button className="w-full" variant="secondary" onClick={() => calculate("add")}>Add</Button>
          <Button className="w-full" variant="secondary" onClick={() => calculate("sub")}>Sub</Button>
          <Button className="w-full" variant="secondary" onClick={() => calculate("mul")}>Mul</Button>
          <Button className="w-full" variant="secondary" onClick={() => calculate("div")}>Div</Button>
        </div>
        <Button className="w-full">
          {result && <p>Result: {result}</p>}
        </Button>
        <blockquote className="mt-4 border-l-2 pl-6 italic text-sm text-muted-foreground">
          Because of coldstart, it could take a few seconds for initial result to show up. <a href="https://github.com/vercel/vercel/discussions/7961" className="hover:underline">read more</a>
        </blockquote>
      </div>
      <div className="max-w-2xl p-4 pt-16">
        <Accordion type="single" collapsible>
          <hr />
          <AccordionItem value="item-1">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              It has a typescript frontend (nextjs) & a python backend (fastapi). <br/>
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
              {`return ({ result });`} <br/>
              {`}`} 
              </code>
            <br/>
            complete py code (<a href="https://github.com/kewkartik/ppl/blob/update/api/calc.py" className="text-muted-foreground"> here </a>)
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}
