from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_root():
    return ({"message": "Welcome to the calculator API!"})


@app.get("/api")
async def read_api_root():
    return ({"message": "/api/add, /api/sub, /api/mul, /api/div"})


@app.get("/api/add")
async def add_numbers(a: float, b: float):
    result = a + b
    return ({"result": result})


@app.get("/api/sub")
async def sub_numbers(a: float, b: float):
    result = a - b
    return ({"result": result})


@app.get("/api/mul")
async def mul_numbers(a: float, b: float):
    result = a * b
    return ({"result": result})


@app.get("/api/div")
async def div_numbers(a: float, b: float):
    if b != 0:
        result = a / b
        return ({"result": result})
    else:
        return ({"result": "Division by zero is not allowed."})


@app.get("/api/first_assignment")
async def calculate_salary(basic_pay: float):

    hra = 0.10 * basic_pay
    ta = 0.05 * basic_pay
    total_salary = basic_pay + hra + ta

    professional_tax = 0.02 * total_salary
    salary_payable = total_salary - professional_tax

    return {"result": int(total_salary), "salary_payable": int(salary_payable)}
