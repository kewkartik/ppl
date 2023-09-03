from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root(request: Request):
    return {"message": "Welcome to the calculator API!"}


@app.get("/api")
async def read_api_root():
    return {"message": "/api/add, /api/sub, /api/mul, /api/div"}


@app.get("/api/add")
async def add_numbers(a: float, b: float):
    result = a + b
    return {"result": result}


@app.get("/api/sub")
async def sub_numbers(a: float, b: float):
    result = a - b
    return {"result": result}


@app.get("/api/mul")
async def mul_numbers(a: float, b: float):
    result = a * b
    return {"result": result}


@app.get("/api/div")
async def div_numbers(a: float, b: float):
    if b != 0:
        result = a / b
        return {"result": result}
    else:
        return {"result": "Division by zero is not allowed."}
