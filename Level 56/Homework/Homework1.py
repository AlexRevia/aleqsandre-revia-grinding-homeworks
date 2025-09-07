# 1
print("Alex")

# 2
print('"The only limit to our realization of tomorrow is our doubts of today."')

# 3
print("Roses are red")
print("Violets are blue")
print("arvici poemis dawera xd")

# 4
print(2 + 3)

# 5
print("###")
print("# #")
print("###")

# 6
num_str = "42"
print(int(num_str))

# 7
a = 3.5
b = 2.5
print(a + b)

# 8
x = "Hello"
y = "World"
print(x + " " + y)

# 9
a = 10
b = "hi"
c = 2.5
print(type(a))
print(type(b))
print(type(c))

# 10
age = int(input("Enter your age: "))
print(age + 1)

# 11
name = input("Enter your name: ")
print("Hello, " + name + "!")

# 12
age = int(input("Enter your age: "))
print(age + 1)

# 13
num1 = int(input("Enter a number: "))
num2 = int(input("Enter another number: "))
print(num1 + num2)

# 14
color = input("Enter your favorite color: ")
print("Your favorite color is " + color + "!")

# 15
height = int(input("Enter your height in cm: "))
if height > 150:
    print("You are tall enough")
else:
    print("You are not tall enough")

# 16
for i in range(1, 6):
    print(i)

# 17
word = "Python"
for letter in word:
    print(letter)

# 18
total = 0
for i in range(1, 11):
    total += i
print(total)

# 19
for i in range(1, 6):
    print(2 * i)

# 20
for i in range(2, 21, 2):
    print(i)

# 21
i = 1
while i <= 5:
    print(i)
    i += 1

# 22
i = 1
total = 0
while i <= 5:
    total += i
    i += 1
print(total)

# 23
i = 10
while i >= 1:
    print(i)
    i -= 1

# 24
i = 1
while i <= 10:
    if i % 2 != 0:
        print(i)
    i += 1

# 25
text = ""
while text != "exit":
    text = input("Type something: ")

# 26
items = ["apple", "banana", "cherry"]
for item in items:
    print(item)

# 27
fruits = ["apple", "banana", "cherry"]
print(len(fruits))

# 28
numbers = [5, 10, 15]
print(numbers[1])

# 29
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)

# 30
nums = [1, 2, 3, 4]
nums.remove(2)
print(nums)

# 31
squares = [i*i for i in range(1, 6)]
print(squares)

# 32
evens = [i for i in range(2, 11, 2)]
print(evens)

# 33
nums = [1, 2, 3, 4, 5]
odds = [i for i in nums if i % 2 != 0]
print(odds)

# 34
words = ["hello", "world"]
upper = [w.upper() for w in words]
print(upper)

# 35
nums = [1, 2, 3, 4, 5]
result = [i*i for i in nums if i % 2 == 0]
print(result)

# 36
def greet(name):
    print("Hello, " + name + "!")

# 37
def add(a, b):
    return a + b

# 38
def check(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

# 39
def area(length, width):
    return length * width

# 40
def reverse(s):
    return s[::-1]

# 41
my_tuple = (5, "Alex", 3.14)
print(my_tuple)

# 42
t = (1, 2, 3, 4)
print(t[1])

# 43
t = (1, 2, 3, 4)
print(len(t))

# 44
t1 = (1, 2)
t2 = (3, 4)
print(t1 + t2)

# 45
nums = (1, 2, 3)
if 2 in nums:
    print("Found")
else:
    print("Not found")

# 46
my_set = {1, 2, 3}
print(my_set)

# 47
my_set = {1, 2, 3}
if 2 in my_set:
    print("Yes")
else:
    print("No")

# 48
s = {1, 2, 3}
s.add(4)
print(s)

# 49
s = {1, 2, 3, 4}
s.remove(3)
print(s)

# 50
a = {1, 2}
b = {2, 3}
print(a | b)

# 51
info = {"name": "Alex", "age": 15}
print(info)

# 52
data = {"name": "Alex", "age": 15}
print(data["name"])

# 53
person = {"name": "Alex"}
person["city"] = "Tbilisi"
print(person)

# 54 CODEWARS AMOCANA
a = "code"
b = "wa.rs"
name = a + b

# 55 CODEWARS AMOCANA
def get_char(c):
    return chr(c)