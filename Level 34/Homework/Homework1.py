# First Question
def greet():
    print("Hello, World!")

greet()


# Second Question
def add_numbers(a, b):
    print(a + b)

add_numbers(5, 7)


# Third Question
def multiply_by_ten(number):
    return number * 10

result = multiply_by_ten(3)
print(result)


# Fourth Question
def greet_user(name="Guest"):
    print(f"Hello, {name}!")

greet_user()
greet_user("Alice")

# Fifth Question
def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

check_even_odd([1, 2, 3, 4, 5])


# Sixth Question
def get_positive_numbers(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

result = get_positive_numbers([-3, 5, -1, 9, 0, -8, 4])
print(result)
