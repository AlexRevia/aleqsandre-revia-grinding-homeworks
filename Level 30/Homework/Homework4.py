# FIND

# Question 10
sentence = "I am learning Python. Goa is best"
position = sentence.find("Python")
if position != -1:
    print("The first occurrence of 'Python' is at index:", position)
else:
    print("'Python' is not found in the sentence.")

# Question 11
string = "The quick brown fox jumps over the lazy dog."
substring = input("Enter the substring to search for: ")
index = string.find(substring)
if index != -1:
    print(f"The substring '{substring}' starts at index:", index)
else:
    print(f"The substring '{substring}' was not found.")
