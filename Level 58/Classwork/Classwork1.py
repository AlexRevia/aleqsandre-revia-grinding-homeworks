# classwork n1
reverse_and_capitalize = lambda s: s[::-1].capitalize()

print(reverse_and_capitalize("hello"))
print(reverse_and_capitalize("goa"))
print(reverse_and_capitalize("python"))

# classwork n2
print((lambda x: x * 2)(5))

# classwork n3
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list(map(lambda x: x**2, numbers)))
