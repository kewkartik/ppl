"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          PPL&nbsp;
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
      <h1>Calculator</h1>
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
      <div className="flex gap-2">
        <Button className="pr-24" variant="secondary" onClick={handleAdd}>Add</Button>
        <Button className="pr-24" variant="secondary" onClick={handleSub}>Sub</Button>
      </div>
      <div className="flex gap-2">
        <Button className="pr-24" variant="secondary" onClick={handleMul}>Mul</Button>
        <Button className="pr-24" variant="secondary" onClick={handleDiv}>Div</Button>
      </div>
      <Button>
      {result && <p>Result: {result}</p>}
      </Button>
    </div>
    </main>
  )
}
