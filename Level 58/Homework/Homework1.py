# 2
add_five = lambda x: x + 5
print(add_five(10))

# 3
multiply = lambda x, y: x * y
print(multiply(4, 5))

# 4
is_even = lambda x: x % 2 == 0
print(is_even(6))

# 5
celsius_to_fahrenheit = lambda c: (c * 9/5) + 32
temperatures_c = [0, 20, 30, 40]
temperatures_f = list(map(celsius_to_fahrenheit, temperatures_c))
print(temperatures_f)

# 6
starts_with_A = lambda s: s.startswith('A')
print(starts_with_A('Alex'))

# 7
nums = [1, 2, 3, 4]
new_nums = list(map(lambda x: x + 10, nums))
print(new_nums)

# 8
words = ['goa', 'programming']
upper_words = list(map(lambda x: x.upper(), words))
print(upper_words)

# 9
words = ['apple', 'banana', 'watermelon']
lengths = list(map(lambda x: len(x), words))
print(lengths)

# 10
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)

# 11
nums = [1, 2, 3, 4]
nums_as_strings = list(map(lambda x: str(x), nums))
print(nums_as_strings)

# 12
names = ['Alex', 'Lasha', 'Gio']
greeted_names = list(map(lambda x: "Hello " + x, names))
print(greeted_names)

# 13
numbers = [10, 20, 30, 40]
subtracted = list(map(lambda x: x - 5, numbers))
print(subtracted)

# 14
numbers = [1, 2, 3, 4]
multiplied = list(map(lambda x: x * 3, numbers))
print(multiplied)

# 15
temperatures_c = [0, 20, 30, 40]
temperatures_f = list(map(lambda c: (c * 9/5) + 32, temperatures_c))
print(temperatures_f)

# 16
numbers = [10, 55, 32, 70]
greater_than_50 = list(map(lambda x: x > 50, numbers))
print(greater_than_50)

# 17
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)

# 18
nums = [5, 15, 25, 2, 8]
greater_than_10 = list(filter(lambda x: x > 10, nums))
print(greater_than_10)

# 19
words = ['example1', 'example2 ', 'example3', 'examlep4']
long_words = list(filter(lambda x: len(x) > 5, words))
print(long_words)

# 20
strings = ['hello', '', 'world', '', 'programming']
non_empty = list(filter(lambda x: x != '', strings))
print(non_empty)

# 21
nums = [-5, 0, 5, 10, -2]
positive_nums = list(filter(lambda x: x > 0, nums))
print(positive_nums)

# 22
names = ['Alex', 'Nika', 'gio', 'sandro']
names_with_A = list(filter(lambda x: x.startswith('A'), names))
print(names_with_A)

# 23
nums = [3, 6, 7, 9, 12]
divisible_by_3 = list(filter(lambda x: x % 3 == 0, nums))
print(divisible_by_3)

# 24
words = ['apple', 'goa', 'python', 'chad']
words_with_e = list(filter(lambda x: 'e' in x, words))
print(words_with_e)

# 25
items = [None, 'idk', None, 'ball', 'car']
non_none = list(filter(lambda x: x is not None, items))
print(non_none)

# 26
nums = [20, 55, 40, 60, 50]
less_or_equal_50 = list(filter(lambda x: x <= 50, nums))
print(less_or_equal_50)
