  "use client";

  import React, { useState } from "react";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";

  export default function Practice1() {
    const [num1, setNum1] = useState("");
    const [result, setResult] = useState("");
    const [salaryPayable, setSalaryPayable] = useState("");

    const isValidNumber = (value:any) => /^\d*\.?\d*$/.test(value);

    const calculate = async (op:any) => {
      if (isValidNumber(num1)) {
        const response = await fetch(`/api/${op}?basic_pay=${num1}`);
        const data = await response.json();
        setResult(data.result.toLocaleString("en-IN", { style: "currency", currency: "INR" }));
        setSalaryPayable(data.salary_payable.toLocaleString("en-IN", { style: "currency", currency: "INR" }));
      } else {
        setResult("Bruh! Please those are not numbers.");
        setSalaryPayable("Bruh! Please those are not numbers.");
      }
    };

    return (
      <main className="flex flex-col mx-auto max-w-2xl p-12 pt-16 pb-6">
        <div className="grid grid-cols-1 gap-4 p-4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            Practice Ments #1
          </h1>
          <blockquote className="my-6 border-l-2 pl-6 italic">
          Write a program to calculate the salary of an employee given his basic pay (take input from user).
          Let HRA be 10 % of basic pay and TA be 5% of basic pay. Let employees pay professional tax as
          2% of total salary. Calculate total salary and salary payable after deductions.
          </blockquote>
          <Input
            type="number"
            placeholder="Enter basic pay"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <div className="flex justify-center">
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => calculate("first_assignment")}
            >
              Calculate
            </Button>
          </div>
          <Button variant="outline" className="w-full">
            {result && (
              <p>
                Total Salary: {result}
              </p>
            )}
          </Button>
          <Button variant="outline" className="w-full">
            {result && (
              <p>
                Salary Payable: {salaryPayable}
              </p>
            )}
          </Button>
        </div>
      </main>
    );
  }
