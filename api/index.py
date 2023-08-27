from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Allow requests from any origin (not recommended for production)
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"message": "Welcome to the calculator API!"}


@app.get("/api/add")  # Update the route decorator
async def add_numbers(a: float, b: float):
    result = a + b
    return {"result": result}


@app.get("/api/sub")  # Update the route decorator
async def sub_numbers(a: float, b: float):
    result = a - b
    return {"result": result}


@app.get("/api/mul")  # Update the route decorator
async def add_numbers(a: float, b: float):
    result = a * b
    return {"result": result}


@app.get("/api/div")  # Update the route decorator
async def add_numbers(a: float, b: float):
    result = a / b
    return {"result": result}
