"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Third() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [result, setResult] = useState("");

  const isValidNumber = (value:string) => /^\d*\.?\d*$/.test(value);
 
  const calculate = async (op:string) => {
      if (isValidNumber(num1) && isValidNumber(num2) && isValidNumber(num3) && isValidNumber(num4) && isValidNumber(num5)){ 
      const response = await fetch(`/api/${op}?num1=${num1}&num2=${num2}&num3=${num3}&num4=${num4}&num5=${num5}`);
      const data = await response.json();
      setResult(data.result);
    } else {
      setResult("Bruh! Please those are not numbers.");
    }
  };
  return(
      <main className="flex flex-col mx-auto max-w-2xl p-12 pt-16 pb-6">
      <div className="grid grid-cols-1 gap-4 p-4">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
          Practice Ments #3
        </h1>
        <blockquote className="my-6 border-l-2 pl-6 italic">
        Write a program to accept marks of five courses of students and compute his/her result and decide
        grade. Student is passing if he/she scores marks equal to and above 40 in each course. If student
        scores aggregate greater than 75%, then the grade is Distinction. If aggregate is 60&gt;= then the grade
        is First class. If aggregate is 50&gt;= then the grade is Second classand if aggregate is 40&gt;= then the
        grade is Pass class. 
        </blockquote>
        <Input
          type="number"
          placeholder="First Subject"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Second Subject"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Third Subject"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Fourth Subject"
          value={num4}
          onChange={(e) => setNum4(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Fifth Subject"
          value={num5}
          onChange={(e) => setNum5(e.target.value)}
        />        
        <div className="flex justify-center">
          <Button className="w-full" variant="secondary" onClick={() => calculate("third")}>Calculate</Button>
        </div>
        <Button variant="outline" className="w-full">
          {result && (
            <p>
              Grade: {result}
            </p>
          )}
        </Button>
      </div>
    </main>
  );
};
