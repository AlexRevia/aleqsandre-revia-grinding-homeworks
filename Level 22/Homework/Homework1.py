# 1
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for element in my_list:
    print(element)

# 2
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

if num1 > num2:
    new_list = my_list[num2:num1]
elif num2 > num1:
    new_list = my_list[num1:num2]
else:
    new_list = []

print(new_list)


# 3
numbers = [10, 20, 30, 40, 50, 60, 70]

print(numbers[0])
print(numbers[2])
print(numbers[-1])

# 4
words = ["basketball", "banana", "goa", "pytho ", "idk"]

reversed_list = words[::-1]
print(reversed_list)

# 5
words = ["basketball", "goa", "python", "cloud", "idk", "programming", "ufc"]

print(words[::2])

# 6
numbers = [5, 10, 15, 20, 25, 30, 35]

numbers[3] = 100
print(numbers)


