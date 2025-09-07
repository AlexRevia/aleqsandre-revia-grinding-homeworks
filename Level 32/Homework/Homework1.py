# 1
def welcome_user(name, age):
    return f"Welcome {name}, you are {age} years old!"
print(welcome_user("Alice", 25))

# 2
def capitalize_name(first_name, last_name):
    return f"{first_name.capitalize()} {last_name.capitalize()}"

print(capitalize_name("john", "doe"))

# 3
def reverse_string(text):
    return f"The reversed string is: {text[::-1]}"
print(reverse_string("hello"))

# 4
def insert_word(sentence, word, index):
    return sentence[:index] + word + sentence[index:]

print(insert_word("I am learning Python.", "really ", 5))

# 5
def split_paragraph(paragraph):
    return paragraph.split(". ")

paragraph = "first sentence. second sentence. third sentence."
print(split_paragraph(paragraph))
