def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

num = 7
result = even_or_odd(num)
print("The number", num, "is", result)
