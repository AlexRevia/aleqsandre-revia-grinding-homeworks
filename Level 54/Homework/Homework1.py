# 1
try:
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    result = num1 / num2
    print("Result:", result)
except ValueError:
    print("Error: Please enter valid numbers.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")

# 2
my_list = [10, 20, 30, 40, 50]
try:
    index = int(input("Enter an index to access (0-4): "))
    print("Element at index:", my_list[index])
except IndexError:
    print("Error: Index out of range.")
except ValueError:
    print("Error: Please enter a valid integer.")

# 3
my_dict = {"apple": 1, "banana": 2, "orange": 3}
key = input("Enter a fruit name (apple, banana, orange): ")
try:
    print("Value:", my_dict[key])
except KeyError:
    print("Error: Key not found in dictionary.")

# 4
user_input = input("Enter a number: ")
try:
    number = int(user_input)
    print("You entered the number:", number)
except ValueError:
    print("Error: That is not a valid integer.")

# 5
def say_hello():
    print("Hello!")

def greet(func):
    print("Calling the greeting function:")
    func()

greet(say_hello)

# 6
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

times_three = multiplier(3)
print("5 multiplied by 3 is:", times_three(5))

times_five = multiplier(5)
print("7 multiplied by 5 is:", times_five(7))
