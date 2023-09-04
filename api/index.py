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
