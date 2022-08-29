def fun(a,b):
    yield a
    yield b
result=fun(2,4)
print(type(result))
print(next(result))