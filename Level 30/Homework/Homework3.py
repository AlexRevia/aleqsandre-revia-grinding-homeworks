# CAPTALIZE

# Question 7
sentence = input("Enter a sentence: ")
capitalized_sentence = sentence.capitalize()
print("Capitalized Sentence:", capitalized_sentence)

# Question 8
lowercase_list = ["hello", "world", "python"]
capitalized_list = [word.capitalize() for word in lowercase_list]
print("Capitalized List:", capitalized_list)

# Question 9
def capitalize_first_letter(string):
    return string.capitalize()

example_string = "hello world"
capitalized_string = capitalize_first_letter(example_string)
print("String with First Letter Capitalized:", capitalized_string)

