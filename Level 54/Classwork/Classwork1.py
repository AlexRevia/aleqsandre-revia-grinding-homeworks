# classwork N1

try:
    numerator = float(input("Enter the numerator: "))
    denominator = float(input("Enter the denominator: "))

    if denominator == 0:
        raise ValueError("You cant divide by zero")

    result = numerator / denominator
    print("Result:", result)

except ValueError as ve:
    print("ValueError:", ve)

except Exception as e:
    print("error: Please enter valid numbers.")

finally:
    print("operation complete.")

# classwork N2
def apply_to_list(func, values):
    return [func(x) for x in values]

def square(x):
    return x * x


def apply_to_list(func, values):
    new_list = []
    for item in values:
        new_list.append(func(item))
    return new_list

def square(x):
    return x * x