# 2)
numbers = [x for x in range(1, 11)]
print(numbers)

# 3)
squares = [x * x for x in range(1, 6)]
print(squares)

# 4)
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)

# 5)
words = ["program", "basketball", "python"]
first_letters = [word[0] for word in words]
print(first_letters)

# 6)
upper_words = [word.upper() for word in words]
print(upper_words)

# 7) 
div_by_3 = [x for x in range(1, 51) if x % 3 == 0]
print(div_by_3)

# 8)
long_words = [word for word in words if len(word) > 4]
print(long_words)

# 9)
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(c * 9/5) + 32 for c in celsius]
print(fahrenheit)

# 10)
primes = [x for x in range(2, 101) if all(x % i != 0 for i in range(2, x))]
print(primes)

# 11)
sentence = "GOA provides best education for our generation fr"
words_list = sentence.split()
filtered_words = [word for word in words_list if len(word) > 5 and any(v in word for v in "aeiouAEIOU")]
print(filtered_words)

# 12)
fib = [0, 1]
[fib.append(fib[-1] + fib[-2]) for _ in range(18)]
print(fib)
