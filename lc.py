print("welcome to love calculater")
x=input("enter name")
y=input("enter name")
z=x+y
n=z.lower()
t=n.count("t")
r=n.count("r")
u=n.count("u")
e=n.count("e")
true=t+r+u+e
l=z.count("l")
o=z.count("o")
v=z.count("v")
e=z.count("e")
love=l+o+v+e
love_score=str(true)+str(love)
l=int(love_score)
print(love_score)
if (l>50) and (l<90):
    print(f"yehhh",love_score)
elif (l>=40) and (l<=50):
    print(f"alright",love_score)
else:
    (f"oops",love_score)


