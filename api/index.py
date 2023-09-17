from fastapi import FastAPI, UploadFile
from bardapi import Bard

app = FastAPI()

# Replace with your actual Bard API token
token = 'awh99Tnz8dOaW-CJ9YgjfktkvrbG8tFDtYmurj6tfN2XnWQQC9dKzEjjeRBHEQCdS-eACA.'


@app.get("/")
async def read_root():
    return ({"message": "Welcome to the calculator API!"})


@app.get("/api")
async def read_api_root():
    return ({"message": "/api/add, /api/sub, /api/mul, /api/div"})


@app.get("/api/add")
async def add_numbers(num1: float, num2: float):
    result = num1 + num2
    return ({"result": result})


@app.get("/api/sub")
async def sub_numbers(num1: float, num2: float):
    result = num1 - num2
    return ({"result": result})


@app.get("/api/mul")
async def mul_numbers(num1: float, num2: float):
    result = num1 * num2
    return ({"result": result})


@app.get("/api/div")
async def div_numbers(num1: float, num2: float):
    if num2 != 0:
        result = num1 / num2
        return ({"result": result})
    else:
        return ({"result": "Division by zero is not allowed."})


@app.get("/api/mod")
async def mod_numbers(num1: float, num2: float):
    result = num1 % num2
    return ({"result": result})


@app.get("/api/expo")
async def expo_numbers(num1: float, num2: float):
    result = num1 ** num2
    return ({"result": result})


@app.get("/api/floor_division")
async def floor_division_numbers(num1: float, num2: float):
    result = num1 // num2
    return ({"result": result})


@app.get("/api/first_assignment")
async def calculate_salary(basic_pay: float):

    hra = 0.10 * basic_pay
    ta = 0.05 * basic_pay
    total_salary = basic_pay + hra + ta

    professional_tax = 0.02 * total_salary
    salary_payable = total_salary - professional_tax

    return {"result": int(total_salary), "salary_payable": int(salary_payable)}
